const { test, expect } = require('@playwright/test');

test.beforeEach(async({page}) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
  await page.locator('[placeholder="Email"]').fill('alinzia.putri123@gmail.com')
  await page.locator('[placeholder="Password"]').fill('516041Heru')
  await page.getByRole('button', { name: /Masuk/i }).click();
})


test('test', async ({ page }) => {
    await page.getByRole('button', { name: 'Saya Mengerti' }).click();
    await page.getByPlaceholder('placholder').fill('mobile legends');
    await page.getByPlaceholder('placholder').press('Enter');
    await page.goto('https://www.vcgamers.com/marketplace/products?page=1&sorter=termurah&sortby=price&sorttype=asc&searchby=name&search=mobile%20legends');
    await page.getByRole('button', { name: 'Saya Mengerti' }).click();
    await page.getByText('Menampilkan 5 dari 5 produk').click();
  });

