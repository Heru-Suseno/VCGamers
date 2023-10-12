// @ts-check
const { test, expect } = require('@playwright/test');

test('login dengan email tidak terdaftar', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
  await page.locator('[placeholder="Email"]').fill('heru@gmail.com')
  await page.locator('[placeholder="Password"]').fill('heru')
  await page.getByRole('button', { name: /Masuk/i }).click();
  await expect(page.locator('text=Email atau password anda salah.')).toBeVisible();
});

test('login dengan blank field', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
  await page.locator('[placeholder="Email"]').fill('')
  await page.locator('[placeholder="Password"]').fill('')
  await page.getByRole('button', { name: /Masuk/i }).click();
  await expect(page.locator('text=Email atau password tidak boleh kosong')).toBeVisible();
});

test('login dengan blank Password', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
  await page.locator('[placeholder="Email"]').fill('Heru@gmail.com')
  await page.locator('[placeholder="Password"]').fill('')
 const locator = page.getByRole('button', { name: 'Masuk' })
  await expect(locator).toBeDisabled();
  await page.pause(); 
});

test('login dengan blank Email', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
  await page.locator('[placeholder="Email"]').fill('')
  await page.locator('[placeholder="Password"]').fill('Heru')
 const locator = page.getByRole('button', { name: 'Masuk' })
  await expect(locator).toBeDisabled();
  await page.pause(); 
});

test('login with Correct Email and incorrect password', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
  await page.locator('[placeholder="Email"]').fill('alinzia.putri123@gmail.com')
  await page.locator('[placeholder="Password"]').fill('Heru')
  await page.getByRole('button', { name: /Masuk/i }).click();
  await expect(page.locator('text= Password anda salah.')).toBeVisible();
});

test('login with Correct Password and incorrect Email', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
  await page.locator('[placeholder="Email"]').fill('alinzia@gmail.com')
  await page.locator('[placeholder="Password"]').fill('516041Heru')
  await page.getByRole('button', { name: /Masuk/i }).click();
  await expect(page.locator('text= Email atau password anda salah.')).toBeVisible();
});

test('Succsess Login ', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
  await page.locator('[placeholder="Email"]').fill('alinzia.putri123@gmail.com')
  await page.locator('[placeholder="Password"]').fill('516041Heru')
  await page.getByRole('button', { name: /Masuk/i }).click();
  await page.goto('https://auth.vcgamers.com/');
  await page.pause(); 
});
