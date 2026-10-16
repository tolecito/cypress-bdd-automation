Feature: Escenarios del flujo de checkout de productos

  Background:
    Given el usuario inicia sesión con usuario "standard_user" y contraseña "secret_sauce"

  @realizarCheckoutProducto
  Scenario Outline: Realizar checkout de producto

    Given el producto "<productName>" se encuentra en el carrito
    When ingresamos los datos del cliente "<firstName>", "<lastName>", "<postalCode>"
    And se validan los datos del producto "<productName>", "<productPrice>"
    Then se valida el mensaje de agradecimiento "Thank you for your order!"
    And se genera el PDF de la orden
    And se regresa a la pantalla de productos

    Examples:
      | productName                       | productPrice |firstName    | lastName   | postalCode |
      | Sauce Labs Backpack               | $29.99       |Jose         | Tolentino  | 15001      |
      | Sauce Labs Bolt T-Shirt           | $15.99       |Diego        | Paz        | 16220      |
      | Sauce Labs Bike Light             | $9.99        |Abraham      | Vivanco    | 14003      |
      | Test.allTheThings() T-Shirt (Red) | $15.99       |Claudia      | Magallanes | 17552      |