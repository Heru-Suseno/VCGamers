// @ts-check
const { test, expect } = require('@playwright/test');

test('Succsess Register ', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('herususeno58@gmail.com')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('herususeno56')
  await page.locator('[placeholder="Ulangi Password"]').fill('herususeno56')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847906')
  await page.locator('.w-\\[18px\\]').click();
  await page.locator('.min-w-\\[18px\\]').click();
  await page.getByRole('button', { name: /Daftar/i }).click();
  await expect(page.locator('text= Silahkan cek inbox email aktivasi')).toBeVisible();
  await page.pause();
});

test('Register with blank email field', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('herususeno')
  await page.locator('[placeholder="Ulangi Password"]').fill('herususeno')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847988')
  await page.locator('.w-\\[18px\\]').click();
  await page.locator('.min-w-\\[18px\\]').click();
  const locator = page.getByRole('button', { name: 'Daftar' })
  await expect(locator).toBeDisabled();
  await page.pause();
  await expect(page.locator('text= Kamu akan menerima email konfirmasi berisi tautan untuk aktivasi akun. Jika menemukan kendala silakan')).toBeVisible();
});

test('Register with blank password field', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('herusuuseno56@gmail.com')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('')
  await page.locator('[placeholder="Ulangi Password"]').fill('herususeno')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847988')
  await page.locator('.w-\\[18px\\]').click();
  await page.locator('.min-w-\\[18px\\]').click();
  const locator = page.getByRole('button', { name: 'Daftar' })
  await expect(locator).toBeDisabled();
  await page.pause();
  await expect(page.locator('text= Kamu akan menerima email konfirmasi berisi tautan untuk aktivasi akun. Jika menemukan kendala silakan')).toBeVisible();
});


test('Register with blank repeat password field', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('herusuuseno56@gmail.com')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('herususeno')
  await page.locator('[placeholder="Ulangi Password"]').fill('')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847988')
  await page.locator('.w-\\[18px\\]').click();
  await page.locator('.min-w-\\[18px\\]').click();
  const locator = page.getByRole('button', { name: 'Daftar' })
  await expect(locator).toBeDisabled();
  await page.pause();
  await expect(page.locator('text= Kamu akan menerima email konfirmasi berisi tautan untuk aktivasi akun. Jika menemukan kendala silakan')).toBeVisible();
});


test('Register with blank no hp field', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('herusuuseno56@gmail.com')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('herususeno')
  await page.locator('[placeholder="Ulangi Password"]').fill('herususeno')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('')
  await page.locator('.w-\\[18px\\]').click();
  await page.locator('.min-w-\\[18px\\]').click();
  const locator = page.getByRole('button', { name: 'Daftar' })
  await expect(locator).toBeDisabled();
  await page.pause();
  await expect(page.locator('text= Kamu akan menerima email konfirmasi berisi tautan untuk aktivasi akun. Jika menemukan kendala silakan')).toBeVisible();
});

test('Register with uncheck S&K', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('herusuuseno56@gmail.com')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('herususeno')
  await page.locator('[placeholder="Ulangi Password"]').fill('herususeno')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847555')
  await page.locator('.w-\\[18px\\]').click();
  const locator = page.getByRole('button', { name: 'Daftar' })
  await expect(locator).toBeDisabled();
  await page.pause();
  await expect(page.locator('text= Kamu akan menerima email konfirmasi berisi tautan untuk aktivasi akun. Jika menemukan kendala silakan')).toBeVisible();
});

test('Register with 5 carakter password', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('herusuuseno56@gmail.com')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('heru')
  await page.locator('[placeholder="Ulangi Password"]').fill('heru')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847333')
  await page.locator('.w-\\[18px\\]').click();
  await page.locator('.min-w-\\[18px\\]').click();
  const locator = page.getByRole('button', { name: 'Daftar' })
  await expect(locator).toBeDisabled();
  await page.pause();
  await expect(page.locator('text= Kamu akan menerima email konfirmasi berisi tautan untuk aktivasi akun. Jika menemukan kendala silakan')).toBeVisible();
});


test('Register with a different password than repeat password', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('herusuuseno56@gmail.com')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('heru123')
  await page.locator('[placeholder="Ulangi Password"]').fill('heru')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847888')
  await page.locator('.w-\\[18px\\]').click();
  await page.locator('.min-w-\\[18px\\]').click();
  const locator = page.getByRole('button', { name: 'Daftar' })
  await expect(locator).toBeDisabled();
  await page.pause();
  await expect(page.locator('text= Kamu akan menerima email konfirmasi berisi tautan untuk aktivasi akun. Jika menemukan kendala silakan')).toBeVisible();
});


test('Register with email incorrect format', async ({ page }) => {
  await page.goto('https://auth.vcgamers.com/');
  await page.pause();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.pause(); 
  await page.locator('[placeholder="Masukkan alamat email"]').fill('herususeno58')
  await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('herususeno56')
  await page.locator('[placeholder="Ulangi Password"]').fill('herususeno56')
  await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847906')
  await page.locator('.w-\\[18px\\]').click();
  await page.locator('.min-w-\\[18px\\]').click();
  await page.getByRole('button', { name: /Daftar/i }).click();
  await expect(page.locator('text= Pastikan email yang kamu tulis sudah benar')).toBeVisible();
  await page.pause();
});

test('Succsess Register with uncheck Subscribe to VCGamers news feed', async ({ page }) => {
    await page.goto('https://auth.vcgamers.com/');
    await page.pause();
    await page.getByText('Buat akun', { exact: true }).click();
    await page.pause(); 
    await page.locator('[placeholder="Masukkan alamat email"]').fill('herususeno580@gmail.com')
    await page.locator('[placeholder="Password Min. 6 Karakter"]').fill('herususeno56')
    await page.locator('[placeholder="Ulangi Password"]').fill('herususeno56')
    await page.locator('[placeholder="Masukkan No. Ponsel/Whatsapp"]').fill('0895327847904')
    await page.locator('.min-w-\\[18px\\]').click();
    await page.getByRole('button', { name: /Daftar/i }).click();
    await expect(page.locator('text= Silahkan cek inbox email aktivasi')).toBeVisible();
    await page.pause();
  });