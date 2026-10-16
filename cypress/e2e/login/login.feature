Feature: Escenarios de login

  @loginExitoso
  Scenario: Login exitoso con usuario estándar
    Given el usuario se encuentra en la página de login
    When ingresa el usuario "standard_user"
    And ingresa la contraseña "secret_sauce"
    And presiona el botón Login
    Then debería visualizar la página de productos


  @loginFallido
  Scenario Outline: Login fallido con credenciales incorrectas
    Given el usuario se encuentra en la página de login
    When ingresa el usuario "<username>"
    And ingresa la contraseña "<password>"
    And presiona el botón Login
    Then debería visualizar el mensaje de error de login "Epic sadface: Username and password do not match any user in this service"

    Examples:
      | username          | password       |
      | usuario123        | password123    |
      | usuarioIncorrecto | secret_sauce   |
      | standard_user     | password123    |
      | usuario123        | secret_sauce   |