export class CartPage{

    private checkoutButton = '[data-test="checkout"]'
    private continueShoppingButton = '[data-test="continue-shopping"]'
    private productContainer = (productName: string) =>
        `//div[@data-test="inventory-item"]` +
        `[.//div[@data-test="inventory-item-name" and normalize-space(.)="${productName}"]]`;


    toCheckout(): void{
        cy.get(this.checkoutButton).click();
    }

    checkProductName(productName: string): void {
        const product = this.productContainer(productName);

        cy.xpath(product).should("have.length", 1).within(() => {
            cy.get('[data-test="inventory-item-name"]')
                .should("have.text", productName)
        });
    }

    checkNoProductName(productName: string): void {
        const product = this.productContainer(productName);
        cy.xpath(product).should("have.length", 0);
    }

    checkProductPrice(productName: string, productPrice: string): void {
        const product = this.productContainer(productName);

        cy.xpath(product).should("have.length", 1).within(() => {
            cy.get('[data-test="inventory-item-price"]')
                .should("have.text", productPrice)
        });
    }

    removeProductFromCart(productName: string): void {
        const product = this.productContainer(productName);

        cy.xpath(product)
            .should("have.length", 1)
            .within(() => {
                cy.get('button[data-test^="remove-"]')
                    .should("have.text", "Remove")
                    .click();
            });
    }

}