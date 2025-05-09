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

//Would you like a working test using Playwright Test with a full HTML report?
//playwright
//Would you like to automate this in GitHub Actions as a CI pipeline?
//Would you like to also deploy this test result report as a static page (e.g., GitHub Pages)?