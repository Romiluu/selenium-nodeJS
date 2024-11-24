const { Builder } = require('selenium-webdriver');

async function pruebaHTML() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {
    await driver.get('https://www.ejemplo.com');
    const title = await driver.getTitle();
    console.log('Título de la página:', title);
  } finally {
    await driver.quit();
  }
}

pruebaHTML().catch(console.error);

