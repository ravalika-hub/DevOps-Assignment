import { test, expect } from '@playwright/test';

test('Homepage shows frontend and backend messages', async ({ page }) => {
  await page.goto('http://13.232.62.219:3000');
  await expect(page.locator('h1')).toHaveText('Hello from frontend!');
  await expect(page.locator('text=Message from backend:')).toContainText('Hello from backend!');
});

test('Backend message is fetched and displayed', async ({ page }) => {
  await page.goto('http://13.232.62.219:3000');
  const backendText = await page.locator('text=Message from backend:').innerText();
  expect(backendText).toContain('Hello from backend!');
});


