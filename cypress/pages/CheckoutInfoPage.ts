export class CheckoutInfoPage{
    private firstNameInput  = '#first-name'
    private lastNameInput = '#last-name'
    private postalCodeInput = '#postal-code'
    private cancelButton = '#cancel'
    private continueButton = '#continue'

    enterInformationCheckout(firstName: string, lastName: string, postalCode: string): void {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.postalCodeInput).type(postalCode);
    }

    continueCheckout(): void {
        cy.get(this.continueButton).click();
    }

    cancelCheckout(): void {
        cy.get(this.cancelButton).click();
    }
}