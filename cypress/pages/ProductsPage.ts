export class ProductsPage {

    private title = '[data-test="title"]'
    private cartButton = '[data-test="shopping-cart-link"]'

    private productContainer = (productName: string) =>
        `//div[@data-test="inventory-item"]` +
        `[.//div[@data-test="inventory-item-name" and normalize-space(.)="${productName}"]]`;

    addProductToCart(productName: string): void {
        const product = this.productContainer(productName);

        cy.xpath(product).should("have.length", 1).within(() => {
            cy.get('button[data-test^="add-to-cart"]')
                .should("have.text", "Add to cart")
                .click();
        });
    }

    viewProductDetails(productName: string): void {
        const product = this.productContainer(productName);

        cy.xpath(product).should("have.length", 1).within(() => {
            cy.get('[data-test="inventory-item-name"]')
                .should("have.text", productName)
                .click();
        });
    }

    toCart(): void {
        cy.get(this.cartButton).click()
    }

    isDisplayed(): void {
        cy.get(this.title).should("be.visible")
    }
}
