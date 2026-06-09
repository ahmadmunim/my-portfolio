import { test, expect } from '@playwright/test';

test.describe('Interactions', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // =====================
  // Skills category switching
  // =====================
  test.describe('Skills section', () => {

    test.beforeEach(async ({ page }) => {
      await page.locator('#skills').scrollIntoViewIfNeeded();
      await page.locator('.category-card').first().waitFor({ state: 'visible', timeout: 3000 });
      await page.waitForTimeout(800); // wait for entrance animation to complete
    });

    test('Languages category is active by default', async ({ page }) => {
      const languagesCard = page.locator('.category-card').first();
      const className = await languagesCard.getAttribute('class');
      expect(className).toContain('active');
    });

    test('clicking a category card makes it active', async ({ page }) => {
      const backendCard = page.locator('.category-card').nth(1);
      await backendCard.click();
      await page.waitForTimeout(800);
      const className = await backendCard.getAttribute('class');
      expect(className).toContain('active');
    });

    test('clicking a category card deactivates the previous one', async ({ page }) => {
      const languagesCard = page.locator('.category-card').first();
      const backendCard = page.locator('.category-card').nth(1);
      await backendCard.click();
      await page.waitForTimeout(800);
      const className = await languagesCard.getAttribute('class');
      expect(className).not.toContain('active');
    });

    test('clicking a category updates the skills display', async ({ page }) => {
      // Wait for initial chips to be visible
      await page.locator('.skills-display .chip').first().waitFor({ state: 'visible', timeout: 3000 });
      const initialChips = await page.locator('.skills-display .chip').allTextContents();

      // Click Backend category and wait for animation
      await page.locator('.category-card').nth(1).click();
      await page.waitForTimeout(800);

      // Get new chips
      const newChips = await page.locator('.skills-display .chip').allTextContents();
      expect(initialChips).not.toEqual(newChips);
    });

    test('all 4 category cards are clickable', async ({ page }) => {
      const cards = page.locator('.category-card');
      const count = await cards.count();
      expect(count).toBe(4);
      for (let i = 0; i < count; i++) {
        await cards.nth(i).click();
        await page.waitForTimeout(800);
        const className = await cards.nth(i).getAttribute('class');
        expect(className).toContain('active');
      }
    });

    test('skills display is not empty after switching category', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        await page.locator('.category-card').nth(i).click();
        await page.locator('.skills-display .chip').first().waitFor({ state: 'visible', timeout: 3000 });
        const chips = page.locator('.skills-display .chip');
        await expect(chips.first()).toBeVisible();
      }
    });

  });

  // =====================
  // Social icon links
  // =====================
  test.describe('Social links', () => {

    test('email link has correct mailto href', async ({ page }) => {
      const emailLink = page.locator('a[aria-label="Email"]').first();
      await expect(emailLink).toHaveAttribute('href', /mailto:/);
    });

    test('LinkedIn link has correct href', async ({ page }) => {
      const linkedinLink = page.locator('a[aria-label="LinkedIn"]').first();
      await expect(linkedinLink).toHaveAttribute('href', /linkedin\.com/);
    });

    test('GitHub link has correct href', async ({ page }) => {
      const githubLink = page.locator('a[aria-label="GitHub"]').first();
      await expect(githubLink).toHaveAttribute('href', /github\.com/);
    });

    test('social links open in new tab', async ({ page }) => {
      const linkedinLink = page.locator('a[aria-label="LinkedIn"]').first();
      await expect(linkedinLink).toHaveAttribute('target', '_blank');
      const githubLink = page.locator('a[aria-label="GitHub"]').first();
      await expect(githubLink).toHaveAttribute('target', '_blank');
    });

  });

  // =====================
  // Experience cards
  // =====================
  test.describe('Experience cards', () => {

    test.beforeEach(async ({ page }) => {
      await page.locator('#experience-col').scrollIntoViewIfNeeded();
      await page.locator('.experience-card').first().waitFor({ state: 'visible', timeout: 3000 });
    });

    test('each experience card has problem text', async ({ page }) => {
      const problems = page.locator('.exp-problem');
      const count = await problems.count();
      for (let i = 0; i < count; i++) {
        await expect(problems.nth(i)).not.toBeEmpty();
      }
    });

    test('each experience card has solution text', async ({ page }) => {
      const solutions = page.locator('.exp-solution');
      const count = await solutions.count();
      for (let i = 0; i < count; i++) {
        await expect(solutions.nth(i)).not.toBeEmpty();
      }
    });

    test('each experience card has impact text', async ({ page }) => {
      const impacts = page.locator('.impact-text');
      const count = await impacts.count();
      for (let i = 0; i < count; i++) {
        await expect(impacts.nth(i)).not.toBeEmpty();
      }
    });

    test('each experience card has a down arrow', async ({ page }) => {
      const arrows = page.locator('.exp-arrow');
      await expect(arrows).toHaveCount(4);
    });

  });

});