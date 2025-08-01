<template>
  <header class="header">
    <div class="header-container">
      <!-- Left Side - Logo and Brand -->
      <div class="brand-section">
        <div class="logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <!-- Cat head shape -->
            <path d="M14 3C10.6863 3 8 5.68629 8 9C8 12.3137 10.6863 15 14 15C17.3137 15 20 12.3137 20 9C20 5.68629 17.3137 3 14 3Z" fill="url(#catGradient)"/>
            <!-- Cat ears -->
            <path d="M10.5 7L9 3L12.25 5.25L10.5 7Z" fill="url(#catGradient)"/>
            <path d="M17.5 7L19 3L15.75 5.25L17.5 7Z" fill="url(#catGradient)"/>
            <!-- Cat eyes (closed) -->
            <line x1="11" y1="11" x2="13" y2="11" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="15" y1="11" x2="17" y2="11" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Cat whiskers -->
            <line x1="8" y1="10" x2="6" y2="9" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round"/>
            <line x1="8" y1="12" x2="6" y2="13" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round"/>
            <line x1="20" y1="10" x2="22" y2="9" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round"/>
            <line x1="20" y1="12" x2="22" y2="13" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round"/>
            <!-- Gradient definitions -->
            <defs>
              <linearGradient id="catGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FF6B9D;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FF4D8D;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="brand-name">TOONBET</h1>
      </div>

      <!-- Right Side - Actions -->
      <div class="actions-section">
        <button class="sign-in-btn">Sign In/Up</button>
        <button class="menu-btn">
          <div class="grid-icon">
            <div class="grid-row">
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
            </div>
            <div class="grid-row">
              <div class="grid-cell"></div>
              <div class="grid-cell"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { setCSSVariables, getColorToken, getFontSizeToken, getFontWeightToken, getSpacingToken, getBorderRadiusToken, getSizingToken } from '../utils/tokenUtils'

onMounted(() => {
  setCSSVariables()
})
</script>

<style scoped>
.header {
  background: #000000;
  height: 64px;
  border-bottom: 1px solid #232323;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo {
  display: flex;
  align-items: center;
}

.brand-name {
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  letter-spacing: 0.2px;
}

.actions-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sign-in-btn {
  background: transparent;
  border: 1px solid #60A5FA;
  color: #60A5FA;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.sign-in-btn:hover {
  background: rgba(73, 228, 255, 0.1);
  border-color: var(--color-primary-light10, #6be9ff);
  color: var(--color-primary-light10, #6be9ff);
}

.menu-btn {
  background: #1A1A1A;
  border: none;
  border-radius: 4px;
  padding: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-btn:hover {
  background: #2A2A2A;
}

.grid-icon {
  width: 16px;
  height: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.grid-row {
  display: flex;
  gap: 2px;
}

.grid-cell {
  width: 4px;
  height: 4px;
  background: #FFFFFF;
  border-radius: 1px;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .header-container {
    padding: 0 16px;
  }
  
  .brand-name {
    font-size: 16px;
  }
  
  .sign-in-btn {
    padding: 5px 10px;
    font-size: 12px;
  }
}
</style> 