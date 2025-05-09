const { Builder, By, until } = require('selenium-webdriver');
const assert = require("assert");

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/Plants');
        let title = await driver.getTitle();
        console.log("Page title is:", title);
    } finally {
        await driver.quit();
    }
})();