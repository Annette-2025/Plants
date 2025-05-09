import { test, expect } from '@playwright/test';

//--------------------CHECK THAT EACH PAGE EXISTS-----------------------------
/*
test('plantList has title', async ({ page }) => {
  await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/Plants');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Plant Calendar/);
});
test('january has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/page2');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('february has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/february');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('march has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/march');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('april has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/april');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('may has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/may');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('june has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/june');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('july has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/july');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('august has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/august');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('september has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/september');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('october has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/october');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('november has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/november');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
  test('december has title', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/december');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Plant Calendar/);
  });
*/


  const TODO_ITEMS = [
    'ficus',
    2025,
    1,
    1
  ];


test('add item to list', async ({ page }) => {
    await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/Plants');
    // create a new todo locator
    const locator = page.getByRole('input', {id: 'Name'});
    
    // Create 1st todo.
    //await locator.fill(TODO_ITEMS[0]);
    //await locator.press('Tab');
    //await locator.fill(TODO_ITEMS[1]);
    //await locator.press('Tab');
    //await locator.fill(TODO_ITEMS[2]);
    //await locator.press('Tab');
    //await locator.fill(TODO_ITEMS[3]);
    //await locator.press('Enter');

    const list = page.getByRole('ul', {id: 'myList'});
    await expect(list).toBeVisible();
    await page.waitForTimeout(5000);
});


/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/