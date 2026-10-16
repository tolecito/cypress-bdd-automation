import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import { DetailsProductPage } from "../../pages/DetailsProductPage";

const productsPage = new ProductsPage();
const cartPage = new CartPage();
const detailsProductPage = new DetailsProductPage();
let product = '';

Given("se ingresa al detalle del producto {string}", (productName: string) => {
    productsPage.viewProductDetails(productName);
    product = productName;
});

Given("se valida que el producto {string} cueste {string}", (productName: string, productPrice: string) => {
    detailsProductPage.checkProductAndPrice(productName, productPrice);
});

Given("el producto {string} se encuentra en el carrito", (productName: string) => {
    cy.addProductToCart(productName);
});

When("se agrega el producto {string} al carrito", (productName: string) => {
    productsPage.addProductToCart(productName);
    product = productName;
    productsPage.toCart();
});

When("se agrega el producto al carrito", () => {
    productsPage.addProductToCart(product);
    detailsProductPage.toCart();
});

When("se remueve el producto del carrito", () => {
    cartPage.removeProductFromCart(product);
});

Then("se valida que el producto se encuentre en el carrito", () => {
    cartPage.checkProductName(product);
});

Then("se valida que su precio sea {string}", (productPrice: string) => {
    cartPage.checkProductPrice(product,productPrice);
});

Then("se valida que el producto no se encuentre en el carrito", () => {
    cartPage.checkNoProductName(product);
});