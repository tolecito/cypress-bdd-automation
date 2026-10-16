export class LoginPage {

    private usernameInput = "#user-name"; //id
    private passwordInput = '[name="password"]'; //name
    private loginButton = '//*[@id="login-button"]'; //xpath
    private errorMessage = '[data-test="error"]'

    visit(): void {
        cy.visit("https://www.saucedemo.com/");
    }

    enterUsername(username: string): void {
        cy.get(this.usernameInput).type(username);
    }

    enterPassword(password: string): void {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin(): void {
        cy.xpath(this.loginButton).click();
    }

    isLoginErrorDisplayed(): void {
        cy.get(this.errorMessage)
            .should("be.visible");
    }

    verifyErrorMessage(expectedMessage: string): void {
        cy.get(this.errorMessage)
            .should("have.text", expectedMessage);
    }

}