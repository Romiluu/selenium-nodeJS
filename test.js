const { Builder, By } = require('selenium-webdriver');
const path = require('path');

(async function pruebaHTML() {
    // Crear el controlador de Chrome
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Cargar el archivo HTML
        const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
        await driver.get(filePath);

        // Verificar que el título sea correcto
        let titulo = await driver.findElement(By.id('titulo')).getText();
        if (titulo === '¡Bienvenido a la prueba!') {
            console.log('✅ El título es correcto');
        } else {
            console.log('❌ El título es incorrecto');
        }

        // Verificar que el botón exista
        let boton = await driver.findElement(By.id('boton'));
        if (boton) {
            console.log('✅ El botón existe');
        } else {
            console.log('❌ El botón no existe');
        }
    } finally {
        // Cerrar el navegador
        await driver.quit();
    }
})();

