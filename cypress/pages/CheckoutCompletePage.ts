export class CheckoutCompletePage {

    private thanksMessage = '[data-test="complete-header"]'
    private title = '[data-test="title"]'
    private backHomeButton = '[data-test="back-to-products"]'
    private generatePdfButton = '[data-test="generate-pdf-order"]'

    backToProducts(): void {
        cy.get(this.backHomeButton).click();
    }

    generatePdfOrder(): void {
        cy.get(this.generatePdfButton).click();
    }

    validateThanksMessage(message: string): void {
        cy.get(this.thanksMessage).should("have.text",message);
    }
}