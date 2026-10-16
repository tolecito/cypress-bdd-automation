import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<void>;
            addProductToCart(productName: string): Chainable<void>;
        }
    }
}

Cypress.Commands.add("login", (username: string, password: string) => {
    loginPage.visit();
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
});

Cypress.Commands.add("addProductToCart", (productName: string) => {
    productsPage.addProductToCart(productName);
    productsPage.toCart();
    cartPage.checkProductName(productName);
    cartPage.toCheckout();
});

export {};