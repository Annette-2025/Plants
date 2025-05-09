const { Builder, By, until } = require('selenium-webdriver');
const assert = require("assert");
async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:4444/wd/hub');
        let title = await driver.getTitle();
        assert.strictEqual(title, "Plant Calendar")
        console.log("Page title is:", title);
    } finally {
        await driver.quit();
    }
}example();