import { test, expect } from '@playwright/test';

test.describe('MyPage Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    // MyPage로 직접 이동
    await page.goto('http://localhost:3000/my-page');
  });

  test('should display profile card with correct layout', async ({ page }) => {
    // 프로필 카드 확인 - 정확한 높이 140px
    const profileCard = page.locator('div[style*="linear-gradient"]');
    await expect(profileCard).toBeVisible();

    // 사용자 이름 확인
    await expect(page.locator('text=Cindyy')).toBeVisible();
    
    // 이메일 확인
    await expect(page.locator('text=ci******@gmail.com')).toBeVisible();
    
    // Friends Invite 버튼 확인
    await expect(page.locator('text=Friends Invite')).toBeVisible();
  });

  test('should display left column cards correctly', async ({ page }) => {
    // 좌측 컬럼 확인
    const leftColumn = page.locator('.grid.grid-cols-1.lg\\:grid-cols-2 > div').first();
    await expect(leftColumn).toBeVisible();
    
    // Referrer 카드 확인
    const referrerCard = page.locator('text=Referrer').first();
    await expect(referrerCard).toBeVisible();
    
    // 숫자 23 확인
    await expect(page.locator('text=23')).toBeVisible();
    
    // +3 배지 확인
    await expect(page.locator('text=+3')).toBeVisible();
    
    // Wallets 카드 확인
    const walletsCard = page.locator('text=Wallets');
    await expect(walletsCard).toBeVisible();
    
    // More 버튼 확인
    const moreButtons = page.locator('text=More');
    await expect(moreButtons).toHaveCount(2); // Referrer와 Wallets에 각각 More 버튼
  });

  test('should display right column progress card correctly', async ({ page }) => {
    // 우측 컬럼 확인
    const rightColumn = page.locator('.grid.grid-cols-1.lg\\:grid-cols-2 > div').nth(1);
    await expect(rightColumn).toBeVisible();
    
    // Level A 아이콘 확인 - 새로운 크기 56x56px
    const levelIcon = page.locator('text=A').first();
    await expect(levelIcon).toBeVisible();
    
    // Level A 텍스트 확인 - 새로운 크기
    await expect(page.locator('text=Level A')).toBeVisible();
    
    // 등급별 혜택보기 버튼 확인
    await expect(page.locator('text=① 등급별 혜택보기')).toBeVisible();
    
    // USDT 금액 확인 (별도 섹션) - 새로운 크기
    await expect(page.locator('text=USDT4,600')).toBeVisible();
    await expect(page.locator('text=/6,000')).toBeVisible();
    
    // 진행률 텍스트 확인
    await expect(page.locator('text=Achieve Valid Bet Amount!')).toBeVisible();
  });

  test('should display progress bar with correct styling', async ({ page }) => {
    // 진행률 바 확인 - 새로운 높이 16px
    const progressBar = page.locator('.relative.h-4');
    await expect(progressBar).toBeVisible();
    
    // 진행률 채우기 확인
    const progressFill = page.locator('.absolute.h-4.bg-blue-500');
    await expect(progressFill).toBeVisible();
    
    // 진행률 핸들 확인 - 새로운 크기 20x20px
    const progressHandle = page.locator('.w-5.h-5.bg-white');
    await expect(progressHandle).toBeVisible();
  });

  test('should display benefits list correctly', async ({ page }) => {
    // 혜택 목록 확인 - 새로운 아이콘 크기 28x28px
    await expect(page.locator('text=1% Comp')).toBeVisible();
    await expect(page.locator('text=Level Up Bonus 10USDT')).toBeVisible();
    await expect(page.locator('text=2% Comp On Your Balance')).toBeVisible();
    
    // 체크 아이콘들 확인 - 새로운 크기
    const checkIcons = page.locator('.w-7.h-7.bg-blue-500');
    await expect(checkIcons).toHaveCount(3);
  });

  test('should display bottom navigation with border in single column', async ({ page }) => {
    // 하단 네비게이션 컨테이너 확인 - 새로운 간격값
    const bottomNav = page.locator('.mt-8.pt-8.border-t');
    await expect(bottomNav).toBeVisible();
    
    // 하단 보더 확인
    const border = page.locator('.border-t.border-\\[\\#232323\\]');
    await expect(border).toBeVisible();
    
    // 1열 배치된 버튼들 확인
    const bettingHistory = page.locator('text=betting history');
    await expect(bettingHistory).toBeVisible();
    
    const signOut = page.locator('text=sign out');
    await expect(signOut).toBeVisible();
    
    // flex-col로 1열 배치 확인 - 새로운 간격값
    const buttonContainer = page.locator('.flex.flex-col.space-y-3');
    await expect(buttonContainer).toBeVisible();
  });

  test('should have correct page title', async ({ page }) => {
    // 페이지 제목 확인 - MyPage의 h1만 선택
    const myPageTitle = page.locator('h1:has-text("My Page")');
    await expect(myPageTitle).toBeVisible();
  });

  test('should have two column layout on desktop', async ({ page }) => {
    // 2컬럼 레이아웃 확인
    const grid = page.locator('.grid.grid-cols-1.lg\\:grid-cols-2');
    await expect(grid).toBeVisible();
    
    // 좌우 컬럼 확인
    const columns = page.locator('.grid.grid-cols-1.lg\\:grid-cols-2 > div');
    await expect(columns).toHaveCount(2);
  });

  test('should have correct card heights', async ({ page }) => {
    // 프로필 카드 높이 확인 (144px)
    const profileCard = page.locator('.h-36');
    await expect(profileCard).toBeVisible();
    
    // Stats 카드 높이 확인 (112px)
    const statsCards = page.locator('.h-28');
    await expect(statsCards).toHaveCount(2);
    
    // Progress 카드 높이 확인 (384px)
    const progressCard = page.locator('.h-96');
    await expect(progressCard).toBeVisible();
  });

  test('should have correct border radius', async ({ page }) => {
    // 정확한 border radius 확인 (rounded-xl = 12px)
    const cards = page.locator('.rounded-xl');
    await expect(cards).toHaveCount(4); // 프로필, 리퍼러, 지갑, 진행률 카드
  });

  test('should be responsive on mobile', async ({ page }) => {
    // 모바일 뷰포트로 설정
    await page.setViewportSize({ width: 375, height: 667 });
    
    // 모바일에서 2컬럼 그리드 레이아웃 확인
    const gridLayout = page.locator('main > div.grid.grid-cols-1.lg\\:grid-cols-2');
    await expect(gridLayout).toBeVisible();
    
    // 하단 네비게이션도 확인 - 새로운 간격값
    const bottomNav = page.locator('.mt-8.pt-8.border-t');
    await expect(bottomNav).toBeVisible();
  });
}); 