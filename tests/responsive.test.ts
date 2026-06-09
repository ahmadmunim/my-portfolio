import { test, expect } from '@playwright/test';

test.describe('Responsive Layout', () => {

  // =====================
  // 520px — Hero section
  // =====================
  test.describe('520px breakpoint', () => {
    test.use({ viewport: { width: 520, height: 900 } });

    test('hero photo appears above text content', async ({ page }) => {
      await page.goto('/');
      const heroRight = page.locator('.hero-right');
      const heroLeft = page.locator('.hero-left');
      const rightBox = await heroRight.boundingBox();
      const leftBox = await heroLeft.boundingBox();
      expect(rightBox!.y).toBeLessThan(leftBox!.y);
    });

    test('hero renders in single column', async ({ page }) => {
      await page.goto('/');
      const heroRight = page.locator('.hero-right');
      const heroLeft = page.locator('.hero-left');
      const rightBox = await heroRight.boundingBox();
      const leftBox = await heroLeft.boundingBox();
      // In single column, x positions should be similar
      expect(Math.abs(rightBox!.x - leftBox!.x)).toBeLessThan(50);
    });
  });

  // =====================
  // 700px — Service cards
  // =====================
  test.describe('700px breakpoint', () => {
    test.use({ viewport: { width: 700, height: 900 } });

    test('service cards render in 2 columns', async ({ page }) => {
      await page.goto('/');
      const cards = page.locator('.service-card');
      const firstCard = await cards.nth(0).boundingBox();
      const thirdCard = await cards.nth(2).boundingBox();
      // In 2-column layout, 1st and 3rd cards should have same x position
      expect(Math.abs(firstCard!.x - thirdCard!.x)).toBeLessThan(5);
    });
  });

  // =====================
  // 850px — About section
  // =====================
  test.describe('850px breakpoint', () => {
    test.use({ viewport: { width: 850, height: 900 } });

    test('about section collage appears above bio text', async ({ page }) => {
      await page.goto('/');
      const collage = page.locator('.collage');
      const bio = page.locator('.about-bio');
      const collageBox = await collage.boundingBox();
      const bioBox = await bio.boundingBox();
      expect(collageBox!.y).toBeLessThan(bioBox!.y);
    });

    test('about section renders in single column', async ({ page }) => {
      await page.goto('/');
      const collage = page.locator('.collage');
      const bio = page.locator('.about-bio');
      const collageBox = await collage.boundingBox();
      const bioBox = await bio.boundingBox();
      expect(Math.abs(collageBox!.x - bioBox!.x)).toBeLessThan(50);
    });
  });

  // =====================
  // 900px — Experience cards
  // =====================
  test.describe('900px breakpoint', () => {
    test.use({ viewport: { width: 900, height: 900 } });

    test('experience cards render in single column', async ({ page }) => {
      await page.goto('/');
      const cards = page.locator('.experience-card');
      const firstCard = await cards.nth(0).boundingBox();
      const secondCard = await cards.nth(1).boundingBox();
      // In single column, cards should have same x position
      expect(Math.abs(firstCard!.x - secondCard!.x)).toBeLessThan(5);
    });
  });

  // =====================
  // 1000px — Service cards two rows
  // =====================
  test.describe('1000px breakpoint', () => {
    test.use({ viewport: { width: 1000, height: 900 } });

    test('service cards render in 4 columns', async ({ page }) => {
      await page.goto('/');
      const cards = page.locator('.service-card');
      const firstCard = await cards.nth(0).boundingBox();
      const fifthCard = await cards.nth(4).boundingBox();
      // In 4-column layout, 1st and 5th cards should have same x position (new row)
      expect(Math.abs(firstCard!.x - fifthCard!.x)).toBeLessThan(5);
    });
  });

  // =====================
  // 440px — Navbar
  // =====================
  test.describe('460px breakpoint', () => {
    test.use({ viewport: { width: 460, height: 900 } });

    test('navbar brand name is hidden', async ({ page }) => {
      await page.goto('/');
      const brandName = page.locator('.brand-name');
      await expect(brandName).toBeHidden();
    });

    test('navbar logo mark is still visible', async ({ page }) => {
      await page.goto('/');
      const logoMark = page.locator('.logo-mark');
      await expect(logoMark).toBeVisible();
    });
  });

  // =====================
  // Desktop — 1280px
  // =====================
  test.describe('desktop layout', () => {
    test.use({ viewport: { width: 1280, height: 900 } });

    test('hero renders in two columns', async ({ page }) => {
      await page.goto('/');
      const heroRight = page.locator('.hero-right');
      const heroLeft = page.locator('.hero-left');
      const rightBox = await heroRight.boundingBox();
      const leftBox = await heroLeft.boundingBox();
      // In two column layout, y positions should be similar
      expect(Math.abs(rightBox!.y - leftBox!.y)).toBeLessThan(50);
    });

    test('about section renders in two columns', async ({ page }) => {
      await page.goto('/');
      const collage = page.locator('.collage');
      const bio = page.locator('.about-bio');
      const collageBox = await collage.boundingBox();
      const bioBox = await bio.boundingBox();
      // In two column layout, y positions should be similar
      expect(Math.abs(collageBox!.y - bioBox!.y)).toBeLessThan(50);
    });

    test('experience cards render in two columns', async ({ page }) => {
      await page.goto('/');
      const cards = page.locator('.experience-card');
      const firstCard = await cards.nth(0).boundingBox();
      const secondCard = await cards.nth(1).boundingBox();
      // In two column layout, cards should have similar y positions
      expect(Math.abs(firstCard!.y - secondCard!.y)).toBeLessThan(50);
    });

    test('skills category cards render in 4 columns', async ({ page }) => {
      await page.goto('/');
      const cards = page.locator('.category-card');
      const firstCard = await cards.nth(0).boundingBox();
      const lastCard = await cards.nth(3).boundingBox();
      // All 4 cards should be on the same row
      expect(Math.abs(firstCard!.y - lastCard!.y)).toBeLessThan(5);
    });
  });

});