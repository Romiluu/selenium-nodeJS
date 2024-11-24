const { Builder, By } = require('selenium-webdriver');
const path = require('path');
const httpServer = require('http-server');

(async function pruebaHTML() {
    // Crear y arrancar un servidor HTTP local
    const server = httpServer.createServer({ root: path.resolve(__dirname) });
    const port = 8080;
    server.listen(port, () => console.log(`Servidor iniciado en http://localhost:${port}`));

    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Cargar el archivo HTML desde el servidor
        const fileUrl = `http://localhost:${port}/index.html`;
        await driver.get(fileUrl);

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
        // Detener el servidor y cerrar el navegador
        server.close();
        await driver.quit();
    }
})();
