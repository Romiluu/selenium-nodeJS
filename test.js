const { Builder, By } = require('selenium-webdriver');

(async function pruebaHTML() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Apuntar al servidor iniciado en el workflow
        const filePath = `http://localhost:8080/index.html`;
        await driver.get(filePath);

        const titulo = await driver.findElement(By.id('titulo')).getText();
        console.log(titulo === '¡Bienvenido a la prueba!' ? '✅ Título correcto' : '❌ Título incorrecto');

        const boton = await driver.findElement(By.id('boton'));
        console.log(boton ? '✅ Botón encontrado' : '❌ Botón no encontrado');
    } finally {
        await driver.quit();
    }
})();
