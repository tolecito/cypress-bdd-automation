export class CheckoutOverviewPage {

    private cancelButton = '#cancel'
    private finishButton =  '#finish'
    private productContainer = (productName: string) =>
        `//div[@data-test="inventory-item"]` +
        `[.//div[@data-test="inventory-item-name" and normalize-space(.)="${productName}"]]`;


    checkProductName(productName: string): void {
        const product = this.productContainer(productName);

        cy.xpath(product).should("have.length", 1).within(() => {
            cy.get('[data-test="inventory-item-name"]')
                .should("have.text", productName)
        });
    }

    checkProductPrice(productName: string, productPrice: string): void {
        const product = this.productContainer(productName);

        cy.xpath(product).should("have.length", 1).within(() => {
            cy.get('[data-test="inventory-item-price"]')
                .should("have.text", productPrice)
        });
    }

    completeCheckout(): void{
        cy.get(this.finishButton).click();
    }
}