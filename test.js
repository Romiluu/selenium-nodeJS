const { Builder } = require('selenium-webdriver');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const path = require('path');

(async function pruebaHTML() {
    const chromeDriverPath = '/usr/local/bin/chromedriver'; // Ruta al ejecutable
    const service = new ServiceBuilder(chromeDriverPath);

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service) // Configura el servicio manualmente
        .build();

    try {
        await driver.get('http://localhost:8080/index.html');
        console.log('✅ Prueba ejecutada correctamente.');
    } finally {
        await driver.quit();
    }
})();
