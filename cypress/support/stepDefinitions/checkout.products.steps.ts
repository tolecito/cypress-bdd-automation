import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutInfoPage } from "../../pages/CheckoutInfoPage";
import { CheckoutOverviewPage } from "../../pages/CheckoutOverviewPage";
import { CheckoutCompletePage } from "../../pages/CheckoutCompletePage";

const productsPage = new ProductsPage();
const cartPage = new CartPage();
const checkoutInfoPage = new CheckoutInfoPage();
const checkOverviewPage = new CheckoutOverviewPage();
const checkoutCompletePage = new CheckoutCompletePage();

When("ingresamos los datos del cliente {string}, {string}, {string}", (firstName: string, lastName: string, postalCode: string) => {
    checkoutInfoPage.enterInformationCheckout(firstName, lastName, postalCode);
    checkoutInfoPage.continueCheckout();
});

When("se validan los datos del producto {string}, {string}", (productName: string, productPrice: string) => {
    checkOverviewPage.checkProductName(productName);
    checkOverviewPage.checkProductPrice(productName, productPrice);
    checkOverviewPage.completeCheckout();
});

Then("se valida el mensaje de agradecimiento {string}", (message: string) => {
    checkoutCompletePage.validateThanksMessage(message);
});

Then("se genera el PDF de la orden", () => {
    checkoutCompletePage.generatePdfOrder();
});

Then("se regresa a la pantalla de productos", () => {
    checkoutCompletePage.backToProducts();
});