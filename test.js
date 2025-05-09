const { Builder, By, until } = require('selenium-webdriver');
const assert = require("assert");

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://localhost:8080');
        let title = await driver.getTitle();
        console.log("Page title is:", title);
    } finally {
        await driver.quit();
    }
}example();