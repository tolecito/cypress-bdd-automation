Correr todas las pruebas: npx cypress run
Generar reporte Allure: npx allure generate ./allure-results
Abrir reporte Allure: npx allure open ./allure-report
Para hacerlo directamente: npx allure serve ./allure-results
Cuando quieres ver la ejecución pero mantener comportamiento de run: npx cypress run --headed --browser chrome

Abrir cypress: npx cypress open


cypress — raíz del proyecto

allure-report/
Reporte generado
Contiene el reporte HTML de Allure, que puedes abrir en el navegador para revisar los resultados de ejecución, los escenarios aprobados y fallidos y las evidencias adjuntas.


allure-results/
Resultados de ejecución
Contiene los archivos JSON, metadatos y adjuntos que genera la integración con Allure. Son los datos que se utilizan para construir el reporte HTML.



cypress/ — código y recursos de automatización
e2e/
Contiene los escenarios de prueba, por ejemplo los archivos .feature de Cucumber.


fixtures/
Contiene datos de prueba: usuarios, contraseñas ficticias, productos y otros datos reutilizables.


pages/
Contiene los Page Objects (POM): localizadores y acciones asociadas a cada página.


screenshots/
Almacena capturas de pantalla que Cypress genera, por ejemplo, cuando un test falla.


support/
Contiene la configuración de soporte de Cypress, comandos personalizados e implementaciones de pasos de Cucumber, según cómo hayas configurado tu proyecto.


utils/
Contiene funciones auxiliares reutilizables que no pertenecen específicamente a una página.