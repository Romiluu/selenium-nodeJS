const { Builder, By } = require('selenium-webdriver');

(async function pruebaHTML() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Conecta al servidor iniciado en el workflow
    const filePath = `http://localhost:8080/index.html`;
    await driver.get(filePath);

    // Verificar elementos
    let titulo = await driver.findElement(By.id('titulo')).getText();
    if (titulo === '¡Bienvenido a la prueba!') {
      console.log('✅ El título es correcto');
    } else {
      console.log('❌ El título es incorrecto');
    }

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
