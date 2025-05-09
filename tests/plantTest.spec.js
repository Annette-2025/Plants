import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ka5fc4sskf.execute-api.us-east-1.amazonaws.com/default/Plants');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Plant Calendar/);
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