import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Investing in Our Community')
    // Verify stats section renders
    await expect(page.getByText('$285M')).toBeVisible()
    await expect(page.getByText('Assets Under Management')).toBeVisible()
  })

  test('renders featured grants section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Our Grants' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Community Impact Grants' })).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /grants/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /focus areas/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /events/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /news/i }).first()).toBeVisible()
  })
})

test.describe('Grants', () => {
  test('listing page shows grants from Drupal', async ({ page }) => {
    await page.goto('/grants')
    await expect(page.locator('h1')).toContainText('Grants')
    await expect(page.getByRole('heading', { name: 'Community Impact Grants' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Nonprofit Capacity Building/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Heartland Scholars Program' })).toBeVisible()
  })

  test('grant detail page renders', async ({ page }) => {
    await page.goto('/grants/community-impact-grants')
    await expect(page.locator('h1')).toContainText('Community Impact Grants')
  })
})

test.describe('Focus Areas', () => {
  test('listing page shows focus areas from Drupal', async ({ page }) => {
    await page.goto('/focus-areas')
    await expect(page.locator('h1')).toContainText('Focus Areas')
    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Health & Wellness' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Arts & Culture' })).toBeVisible()
  })

  test('focus area detail page renders', async ({ page }) => {
    await page.goto('/focus-areas/education')
    await expect(page.locator('h1')).toContainText('Education')
  })
})

test.describe('Events', () => {
  test('listing page shows events from Drupal', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.getByRole('heading', { name: 'Annual Giving Gala' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Nonprofit Leaders Summit' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Heartland Giving Day' })).toBeVisible()
  })

  test('event detail page renders', async ({ page }) => {
    await page.goto('/events/annual-giving-gala')
    await expect(page.locator('h1')).toContainText('Annual Giving Gala')
  })
})

test.describe('News', () => {
  test('listing page shows news from Drupal', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('News')
    await expect(page.getByRole('heading', { name: /2025 Annual Report/ })).toBeVisible()
  })

  test('news detail page renders', async ({ page }) => {
    await page.goto('/news/2025-annual-report-released')
    await expect(page.locator('h1')).toContainText('2025 Annual Report')
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('Heartland Community Foundation')
  })
})
