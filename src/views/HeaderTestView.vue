<template>
  <div class="header-test-page">
    <!-- TOONBET 헤더 -->
    <section class="test-section">
      <h2 class="section-title">TOONBET 헤더</h2>
      <Header />
      <div class="content-area">
        <p>TOONBET 브랜드 헤더입니다. 핑크색 고양이 로고, "Sign In/Up" 버튼, 3x3 그리드 메뉴 아이콘이 포함되어 있습니다.</p>
      </div>
    </section>

    <!-- 헤더 상세 설명 -->
    <section class="test-section">
      <h2 class="section-title">헤더 구성 요소</h2>
      <div class="content-area">
        <div class="feature-list">
          <div class="feature-item">
            <h3>🎨 브랜드 로고</h3>
            <p>핑크색 그라데이션 고양이 헤드 로고</p>
          </div>
          <div class="feature-item">
            <h3>📝 브랜드명</h3>
            <p>"TOONBET" 흰색 볼드 텍스트</p>
          </div>
          <div class="feature-item">
            <h3>🔵 Sign In/Up 버튼</h3>
            <p>연한 파란색 테두리의 투명 배경 버튼</p>
          </div>
          <div class="feature-item">
            <h3>☰ 메뉴 아이콘</h3>
            <p>3x3 그리드 패턴의 흰색 메뉴 아이콘</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 반응형 테스트 -->
    <section class="test-section">
      <h2 class="section-title">반응형 테스트</h2>
      <div class="content-area">
        <p>화면 크기를 조절하여 모바일에서의 헤더 동작을 확인해보세요.</p>
        <div class="responsive-info">
          <div class="info-item">
            <strong>데스크톱:</strong> 전체 요소 표시
          </div>
          <div class="info-item">
            <strong>모바일:</strong> 폰트 크기 및 패딩 조정
          </div>
        </div>
      </div>
    </section>

    <!-- 토큰 정보 -->
    <section class="test-section">
      <h2 class="section-title">사용된 디자인 토큰</h2>
      <div class="content-area">
        <div class="token-info">
          <div class="token-category">
            <h3>🎨 색상 토큰</h3>
            <ul>
              <li><strong>배경:</strong> #000000 (순수 검은색)</li>
              <li><strong>테두리:</strong> #232323 (어두운 회색)</li>
              <li><strong>브랜드명:</strong> #FFFFFF (흰색)</li>
              <li><strong>버튼 테두리:</strong> #60A5FA (연한 파란색)</li>
              <li><strong>메뉴 버튼:</strong> #1A1A1A (어두운 회색)</li>
            </ul>
          </div>
          <div class="token-category">
            <h3>📝 타이포그래피 토큰</h3>
            <ul>
              <li><strong>폰트 패밀리:</strong> Inter (시스템 폰트)</li>
              <li><strong>브랜드명 크기:</strong> 18px (데스크톱) / 16px (모바일)</li>
              <li><strong>버튼 텍스트:</strong> 13px (데스크톱) / 12px (모바일)</li>
              <li><strong>폰트 웨이트:</strong> 700 (브랜드명) / 500 (버튼)</li>
            </ul>
          </div>
          <div class="token-category">
            <h3>📏 간격 토큰</h3>
            <ul>
              <li><strong>브랜드 섹션 간격:</strong> 8px</li>
              <li><strong>액션 섹션 간격:</strong> 12px</li>
              <li><strong>버튼 패딩:</strong> 6px 12px (데스크톱) / 5px 10px (모바일)</li>
            </ul>
          </div>
          <div class="token-category">
            <h3>🔲 테두리 반경 토큰</h3>
            <ul>
              <li><strong>버튼:</strong> 4px</li>
              <li><strong>메뉴 버튼:</strong> 4px</li>
            </ul>
          </div>
          <div class="token-category">
            <h3>📐 크기 토큰</h3>
            <ul>
              <li><strong>로고:</strong> 28px</li>
              <li><strong>그리드 아이콘:</strong> 16px (2x2 패턴)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
</script>

<style scoped>
.header-test-page {
  background: #f5f5f5;
  min-height: 100vh;
}

.test-section {
  margin-bottom: 40px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  padding: 20px 24px 16px;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
  background: #fafafa;
}

.content-area {
  padding: 24px;
  background: white;
}

.content-area p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.feature-item {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.feature-item h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.feature-item p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

.responsive-info {
  margin-top: 16px;
}

.info-item {
  background: #e3f2fd;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #1976d2;
}

.info-item:last-child {
  margin-bottom: 0;
}

.token-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 16px;
}

.token-category {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.token-category h3 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.token-category ul {
  margin: 0;
  padding-left: 20px;
}

.token-category li {
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.token-category li:last-child {
  margin-bottom: 0;
}

.token-category strong {
  color: #333;
  font-weight: 600;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .test-section {
    margin-bottom: 20px;
    border-radius: 0;
  }
  
  .section-title {
    padding: 16px 20px 12px;
    font-size: 16px;
  }
  
  .content-area {
    padding: 20px;
  }
  
  .input-group {
    padding: 16px 20px 12px;
  }
}
</style> 