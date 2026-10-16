1. Aserciones de existencia y visibilidad: 

exist: Verifica que el elemento exista en el DOM:

cy.get("#login-button")
.should("exist");


not.exist: Verifica que no exista

cy.get(".error-message")
.should("not.exist");


be.visible: Verifica que sea visible

cy.get("#login-button")
.should("be.visible");


not.be.visible: Existe, pero no debe estar visible

cy.get("#modal")
.should("not.be.visible");


2. Aserciones de texto

have.text: Texto exacto

cy.get('[data-test="error"]')
.should("have.text", "Mensaje de error");


contain.text: El elemento debe contener el texto

cy.get('[data-test="error"]')
.should("contain.text", "error");

3. Aserciones de atributos

have.attr: Verifica que tenga un atributo

cy.get("#login-button")
.should("have.attr", "type");

También puedes validar su valor

cy.get("#login-button")
.should("have.attr", "type", "submit");

Otro ejemplo

cy.get("#user-name")
.should("have.attr", "placeholder", "Username");


not.have.attr: 

cy.get("#user-name")
.should("not.have.attr", "disabled");


6. Aserciones de estado de elementos

be.enabled: El elemento está habilitado

cy.get("#login-button")
.should("be.enabled");


be.disabled: Está deshabilitado

cy.get("#login-button")
.should("be.disabled");

También:

.should("not.be.disabled");


be.checked: Para checkbox/radio

cy.get("#remember")
.should("be.checked");


not.be.checked

cy.get("#remember")
.should("not.be.checked");


be.selected: Para opciones seleccionadas

cy.get("select option:selected")
.should("be.selected");

También puedes usar:

.should("not.be.selected");

