import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Given("el usuario se encuentra en la página de login", () => {
    loginPage.visit();
});

When("ingresa el usuario {string}", (username: string) => {
    loginPage.enterUsername(username);
});

When("ingresa la contraseña {string}", (password: string) => {
    loginPage.enterPassword(password);
});

When("el usuario inicia sesión con usuario {string} y contraseña {string}", (username: string, password: string) => {
    cy.login(username, password);
});

When("presiona el botón Login", () => {
    loginPage.clickLogin();
});

Then("debería visualizar la página de productos", () => {
    productsPage.isDisplayed();
});

Then("debería visualizar el mensaje de error de login", () => {
    loginPage.isLoginErrorDisplayed();
});

Then("debería visualizar el mensaje de error de login {string}",(expectedMessage: string) => {
    loginPage.verifyErrorMessage(expectedMessage);
});