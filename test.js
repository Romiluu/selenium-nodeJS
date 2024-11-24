const { Builder, By } = require('selenium-webdriver');
const path = require('path');
const http = require('http-server'); // Solo si inicias un servidor HTTP desde el script.

(async function pruebaHTML() {
  // Iniciar el servidor en otro puerto
  const server = http.createServer({ root: '.' });
  server.listen(8081); // Cambia al puerto 8081

  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Cargar el archivo HTML
    const filePath = `http://localhost:8081/index.html`;
    await driver.get(filePath);

    // Verificar elementos en el archivo HTML
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
    server.close(); // Asegúrate de cerrar el servidor al final
  }
})();
