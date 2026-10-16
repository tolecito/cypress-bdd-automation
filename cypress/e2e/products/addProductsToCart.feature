Feature: Escenarios del flujo de agregar productos al carrito

  Background:
    Given el usuario inicia sesión con usuario "standard_user" y contraseña "secret_sauce"

  @agregarProductoCarrito
  Scenario Outline: Agregar producto al carrito

    When se agrega el producto "<productName>" al carrito
    Then se valida que el producto se encuentre en el carrito
    And se valida que su precio sea "<productPrice>"

    Examples:
      | productName                       | productPrice |
      | Sauce Labs Backpack               | $29.99       |
      | Sauce Labs Bolt T-Shirt           | $15.99       |
      | Sauce Labs Bike Light             | $9.99        |
      | Test.allTheThings() T-Shirt (Red) | $15.99       |


  @removerProductoCarrito
  Scenario Outline: Remover producto del carrito

    And se agrega el producto "<productName>" al carrito
    And se valida que el producto se encuentre en el carrito
    When se remueve el producto del carrito
    Then se valida que el producto no se encuentre en el carrito

    Examples:
      | productName                       |
      | Sauce Labs Backpack               |
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Bike Light             |
      | Test.allTheThings() T-Shirt (Red) |


  @verDetalleProductoAgregar
  Scenario Outline: Agregar producto al carrito desde el detalle de producto

    And se ingresa al detalle del producto "<productName>"
    And se valida que el producto "<productName>" cueste "<productPrice>"
    When se agrega el producto al carrito
    Then se valida que el producto se encuentre en el carrito
    And se valida que su precio sea "<productPrice>"

    Examples:
      | productName                       | productPrice |
      | Sauce Labs Backpack               | $29.99       |
      | Sauce Labs Bolt T-Shirt           | $15.99       |
      | Sauce Labs Bike Light             | $9.99        |
      | Test.allTheThings() T-Shirt (Red) | $15.99       |