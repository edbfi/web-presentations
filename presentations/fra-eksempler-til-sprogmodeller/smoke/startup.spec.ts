import { expect, test } from '@playwright/test';

test('production presentation renders and preserves presenter navigation', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Hvordan lærer');
  const progress = page.getByRole('progressbar', { name: 'Fremdrift' });
  await expect(progress).toHaveAttribute('aria-valuenow', '1');
  await expect(page.getByRole('button', { name: 'Forrige trin', exact: true })).toBeDisabled();
  await page.getByRole('button', { name: 'Næste trin', exact: true }).click();
  await expect(progress).toHaveAttribute('aria-valuenow', '2');
  await expect(page).toHaveURL(/#en-regel$/);
  await page.reload();
  await expect(progress).toHaveAttribute('aria-valuenow', '2');
  await page.keyboard.press('ArrowLeft');
  await expect(progress).toHaveAttribute('aria-valuenow', '1');
  await page.getByRole('button', { name: 'Overblik', exact: true }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();
  expect(errors).toEqual([]);
});
