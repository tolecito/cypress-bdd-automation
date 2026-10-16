export class DetailsProductPage{

    private productName = '[data-test="inventory-item-name"]'
    private productPrice = '[data-test="inventory-item-price"]'
    private addToCartButton = '[data-test="add-to-cart"]'
    private removefromCartButton = '[data-test="remove"]'
    private cartButton = '[data-test="shopping-cart-link"]'

    checkProductAndPrice(prouctName: string, productPrice: string): void {
        cy.get(this.productName).should("have.text",prouctName);
        cy.get(this.productPrice).should("have.text",productPrice);
    }

    addProductToCart(): void{
        cy.get(this.addToCartButton).click();
    }

    toCart(): void{
        cy.get(this.cartButton).click()
    }
}