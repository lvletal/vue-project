// Storybook Manager 설정
// 사이드바 헤더 클릭 시 가이드 페이지로 이동

// 사이드바 헤더 클릭 이벤트 리스너 추가
const addSidebarHeaderClickHandler = () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        // 사이드바 헤더 요소 찾기
        const sidebarHeader = document.querySelector('[data-testid="sidebar-header"]') || 
                             document.querySelector('.sidebar-header') ||
                             document.querySelector('[class*="sidebar-header"]') ||
                             document.querySelector('[class*="sidebar"] [class*="header"]');
        
        if (sidebarHeader && !sidebarHeader.hasAttribute('data-click-handler')) {
          sidebarHeader.setAttribute('data-click-handler', 'true');
          sidebarHeader.style.cursor = 'pointer';
          
          // 클릭 이벤트 추가
          sidebarHeader.addEventListener('click', () => {
            // Introduction 페이지로 이동
            const introLink = document.querySelector('a[href*="introduction"]') ||
                            document.querySelector('a[href*="Introduction"]') ||
                            document.querySelector('[data-item-id="introduction"] a') ||
                            document.querySelector('[data-item-id="introduction--docs"] a');
            
            if (introLink) {
              introLink.click();
            } else {
              // URL을 직접 변경하여 Introduction 페이지로 이동
              const currentUrl = window.location.href;
              const baseUrl = currentUrl.split('?')[0];
              window.location.href = baseUrl + '?path=/docs/introduction--docs';
            }
          });
        }
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

// DOM이 로드된 후 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addSidebarHeaderClickHandler);
} else {
  addSidebarHeaderClickHandler();
}

// Storybook이 완전히 로드된 후에도 실행
setTimeout(addSidebarHeaderClickHandler, 1000);
setTimeout(addSidebarHeaderClickHandler, 2000);
setTimeout(addSidebarHeaderClickHandler, 3000); 