import { test, expect } from '@playwright/test';
 
test.describe('Navigation', () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
 
  // Navbar links
  test('navbar logo navigates to top of page', async ({ page }) => {
    // Scroll down first
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.click('header .brand');
    await expect(page).toHaveURL('/');
  });
 
  test('navbar About link scrolls to about section', async ({ page }) => {
    await page.click('header a[href="#about"]');
    const about = page.locator('#about');
    await expect(about).toBeInViewport();
  });
 
  test('navbar Services link scrolls to services section', async ({ page }) => {
    await page.click('header a[href="#services"]');
    const services = page.locator('#services');
    await expect(services).toBeInViewport();
  });
 
  test('navbar Resume link has correct href', async ({ page }) => {
    const resumeLink = page.locator('header a[href="/resume.pdf"]');
    await expect(resumeLink).toHaveAttribute('href', '/resume.pdf');
  });
 
  // Footer links
  test('footer About link scrolls to about section', async ({ page }) => {
    await page.click('footer a[href="#about"]');
    const about = page.locator('#about');
    await expect(about).toBeInViewport();
  });
 
  test('footer Services link scrolls to services section', async ({ page }) => {
    await page.click('footer a[href="#services"]');
    const services = page.locator('#services');
    await expect(services).toBeInViewport();
  });
 
  test('footer Resume link has correct href', async ({ page }) => {
    const resumeLink = page.locator('footer a[href="/resume.pdf"]');
    await expect(resumeLink).toHaveAttribute('href', '/resume.pdf');
  });
 
  // Social icons
  test('email icon opens mail client', async ({ page }) => {
    const emailLink = page.locator('a[aria-label="Email"]').first();
    await expect(emailLink).toHaveAttribute('href', /mailto:/);
  });
 
  test('LinkedIn icon opens in new tab', async ({ page, context }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('a[aria-label="LinkedIn"]'),
    ]);
    await expect(newPage).toHaveURL(/linkedin\.com/);
  });
 
  test('GitHub icon opens in new tab', async ({ page, context }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('a[aria-label="GitHub"]'),
    ]);
    await expect(newPage).toHaveURL(/github\.com/);
  });
 
  // CTA button
  test('"Real Work, Real Impact" button scrolls to experience section', async ({ page }) => {
    await page.click('a.cta-btn');
    const experience = page.locator('#experience-col');
    await expect(experience).toBeInViewport();
  });
 
});