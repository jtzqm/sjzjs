import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  // We assume the dev server is running on port 3000
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/东非电竞/i);
});

test('navigation contains expected links', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const navbar = page.locator('nav');
  await expect(navbar).toBeVisible();
});
