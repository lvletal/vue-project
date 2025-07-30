import { test, expect } from '@playwright/test';

test.describe('Storybook Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Storybook으로 이동
    await page.goto('http://localhost:6006');
  });

  test('should load Storybook correctly', async ({ page }) => {
    // Storybook이 로드되었는지 확인
    await expect(page.locator('#storybook-panel-root')).toBeVisible();
    
    // 사이드바가 보이는지 확인
    await expect(page.locator('[data-testid="sidebar"]')).toBeVisible();
  });

  test('should display Button component stories', async ({ page }) => {
    // Button 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/button--primary');
    
    // Primary 버튼이 보이는지 확인
    await expect(page.locator('button')).toBeVisible();
    
    // Secondary 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/button--secondary');
    
    // Secondary 버튼이 보이는지 확인
    await expect(page.locator('button')).toBeVisible();
  });

  test('should display Card component stories', async ({ page }) => {
    // Card 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/card--default');
    
    // 카드가 보이는지 확인
    await expect(page.locator('.card')).toBeVisible();
  });

  test('should display ColorPalette component stories', async ({ page }) => {
    // ColorPalette 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/colorpalette--default');
    
    // 색상 팔레트가 보이는지 확인
    await expect(page.locator('.color-palette')).toBeVisible();
  });

  test('should handle component interactions in Storybook', async ({ page }) => {
    // Button 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/button--primary');
    
    // 버튼 클릭 테스트
    const button = page.locator('button');
    await button.click();
    
    // 버튼이 클릭 가능한 상태인지 확인
    await expect(button).toBeEnabled();
  });

  test('should test responsive design in Storybook', async ({ page }) => {
    // Button 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/button--primary');
    
    // 다양한 뷰포트에서 테스트
    const viewports = [
      { width: 1920, height: 1080 }, // 데스크톱
      { width: 1024, height: 768 },  // 태블릿
      { width: 375, height: 667 },   // 모바일
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      
      // 버튼이 모든 뷰포트에서 보이는지 확인
      await expect(page.locator('button')).toBeVisible();
    }
  });

  test('should test component accessibility in Storybook', async ({ page }) => {
    // Button 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/button--primary');
    
    // 버튼이 접근 가능한지 확인
    const button = page.locator('button');
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    
    // 키보드 네비게이션 테스트
    await page.keyboard.press('Tab');
    await expect(button).toBeFocused();
  });

  test('should test component visual regression', async ({ page }) => {
    // Button 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/button--primary');
    
    // 스크린샷 비교 (실제로는 baseline 이미지와 비교)
    await expect(page.locator('button')).toHaveScreenshot('button-primary.png');
  });

  test('should test component state changes', async ({ page }) => {
    // Button 스토리로 이동
    await page.goto('http://localhost:6006/?path=/story/button--primary');
    
    const button = page.locator('button');
    
    // 호버 상태 테스트
    await button.hover();
    await expect(button).toBeVisible();
    
    // 클릭 상태 테스트
    await button.click();
    await expect(button).toBeEnabled();
  });

  test('should test component with different props', async ({ page }) => {
    // 다양한 Button 스토리들을 테스트
    const buttonStories = [
      'http://localhost:6006/?path=/story/button--primary',
      'http://localhost:6006/?path=/story/button--secondary',
      'http://localhost:6006/?path=/story/button--outline'
    ];

    for (const storyUrl of buttonStories) {
      await page.goto(storyUrl);
      
      // 각 스토리에서 버튼이 보이는지 확인
      await expect(page.locator('button')).toBeVisible();
    }
  });

  test('should test component loading states', async ({ page }) => {
    // Storybook 로딩 상태 테스트
    await page.goto('http://localhost:6006');
    
    // 스토리가 로드될 때까지 기다림
    await page.waitForSelector('#storybook-panel-root');
    
    // 사이드바가 로드되었는지 확인
    await expect(page.locator('[data-testid="sidebar"]')).toBeVisible();
  });
}); 