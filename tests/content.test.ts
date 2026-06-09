import { test, expect } from '@playwright/test';

test.describe('Content', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // =====================
  // Page metadata
  // =====================
  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Ahmad Munim/);
  });

  test('page has meta description', async ({ page }) => {
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Ahmad Munim/);
  });

  test('page has OG title', async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Ahmad Munim/);
  });

  test('page has OG image', async ({ page }) => {
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /.+/);
  });

  // =====================
  // Navbar
  // =====================
  test('navbar displays name', async ({ page }) => {
    await expect(page.locator('header .brand-name')).toContainText('Ahmad Munim');
  });

  test('navbar has correct links', async ({ page }) => {
    await expect(page.locator('header a[href="#about"]')).toBeVisible();
    await expect(page.locator('header a[href="#services"]')).toBeVisible();
    await expect(page.locator('header a[href="/resume.pdf"]')).toBeVisible();
  });

  // =====================
  // Hero section
  // =====================
  test('hero displays Engineer title', async ({ page }) => {
    await expect(page.locator('.role-static')).toContainText('Engineer');
  });

  test('hero displays hook text', async ({ page }) => {
    await expect(page.locator('.hero-hook')).toBeVisible();
  });

  test('hero displays profile photo', async ({ page }) => {
    const photo = page.locator('.photo-placeholder img');
    await expect(photo).toBeVisible();
    await expect(photo).toHaveAttribute('src', /ahmad-munim/);
  });

  test('hero displays social icons', async ({ page }) => {
    await expect(page.locator('a[aria-label="Email"]').first()).toBeVisible();
    await expect(page.locator('a[aria-label="LinkedIn"]').first()).toBeVisible();
    await expect(page.locator('a[aria-label="GitHub"]').first()).toBeVisible();
  });

  test('hero displays resume CTA', async ({ page }) => {
    await expect(page.locator('.resume-label')).toContainText('resume');
  });

  // =====================
  // About section
  // =====================
  test('about section heading is visible', async ({ page }) => {
    await expect(page.locator('#about .section-heading')).toContainText('About Me');
  });

  test('about section has bio text', async ({ page }) => {
    const bio = page.locator('.about-bio');
    await expect(bio).toBeVisible();
  });

  test('about section has collage images', async ({ page }) => {
    const images = page.locator('.collage-img img');
    await expect(images).toHaveCount(5);
  });

  test('"Real Work, Real Impact" CTA button is visible', async ({ page }) => {
    await expect(page.locator('a.cta-btn')).toContainText('Real Work, Real Impact');
  });

  // =====================
  // Skills section
  // =====================
  test('skills section heading is visible', async ({ page }) => {
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await expect(page.locator('#skills .section-heading')).toContainText('My Skills');
  });

  test('skills section has 4 category cards', async ({ page }) => {
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await expect(page.locator('.category-card')).toHaveCount(4);
  });

  test('skills section displays chips for default category', async ({ page }) => {
    await page.locator('#skills').scrollIntoViewIfNeeded();
    const chips = page.locator('.skills-display .chip');
    await expect(chips.first()).toBeVisible();
  });

  // =====================
  // Services section
  // =====================
  test('services section heading is visible', async ({ page }) => {
    await page.locator('#services').scrollIntoViewIfNeeded();
    await expect(page.locator('#services .col-heading')).toBeVisible();
  });

  test('services section has 8 service cards', async ({ page }) => {
    await page.locator('#services').scrollIntoViewIfNeeded();
    await expect(page.locator('.service-card')).toHaveCount(8);
  });

  // =====================
  // Experience section
  // =====================
  test('experience section heading is visible', async ({ page }) => {
    await page.locator('#experience-col').scrollIntoViewIfNeeded();
    await expect(page.locator('#experience-col .col-heading')).toBeVisible();
  });

  test('experience section has 4 cards', async ({ page }) => {
    await page.locator('#experience-col').scrollIntoViewIfNeeded();
    await expect(page.locator('.experience-card')).toHaveCount(4);
  });

  test('each experience card has title and company', async ({ page }) => {
    await page.locator('#experience-col').scrollIntoViewIfNeeded();
    const titles = page.locator('.exp-title');
    const companies = page.locator('.exp-company');
    await expect(titles).toHaveCount(4);
    await expect(companies).toHaveCount(4);
  });

  // =====================
  // Footer
  // =====================
  test('footer displays name', async ({ page }) => {
    await expect(page.locator('footer .brand-name')).toContainText('Ahmad Munim');
  });

  test('footer displays copyright', async ({ page }) => {
    await expect(page.locator('footer .copyright')).toContainText('Ahmad Munim');
  });

  test('footer has correct nav links', async ({ page }) => {
    await expect(page.locator('footer a[href="#about"]')).toBeVisible();
    await expect(page.locator('footer a[href="#services"]')).toBeVisible();
    await expect(page.locator('footer a[href="/resume.pdf"]')).toBeVisible();
  });

});