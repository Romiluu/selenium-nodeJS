const { Builder, By } = require('selenium-webdriver');
const path = require('path');

(async function pruebaHTML() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Ruta del archivo HTML (cambia la ruta si es necesario)
        const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
        await driver.get(filePath);

        // Verifica que el título sea el correcto
        let titulo = await driver.findElement(By.id('titulo')).getText();
        if (titulo === '¡Bienvenido a la prueba!') {
            console.log('✅ El título es correcto');
        } else {
            console.log('❌ El título es incorrecto');
        }

        // Verifica que el botón existe
        let boton = await driver.findElement(By.id('boton'));
        if (boton) {
            console.log('✅ El botón existe');
        } else {
            console.log('❌ El botón no existe');
        }
    } finally {
        await driver.quit();
    }
})();
