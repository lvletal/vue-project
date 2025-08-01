<template>
  <div class="main-page">
    <!-- Google Fonts - Carter One -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap" rel="stylesheet">
    
    <!-- Header -->
    <Header />
    
    <!-- Hero Banner Section -->
    <section 
      class="hero-banner"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseLeave"
    >
      <div class="banner-content">
        <button class="register-button">Register Now</button>
        <div class="carousel-dots">
          <span 
            v-for="(dot, index) in 3" 
            :key="index"
            class="dot" 
            :class="{ active: currentBannerIndex === index }"
            @click="setBannerIndex(index)"
          ></span>
        </div>
      </div>
      
      <!-- Banner Slides -->
      <div class="banner-slides" :style="{ transform: `translateX(-${currentBannerIndex * 100}%)` }">
        <div class="banner-slide" v-for="(banner, index) in banners" :key="index">
          <div class="banner-background" :style="{ background: banner.background }"></div>
          <div class="banner-overlay"></div>
        </div>
      </div>
    </section>

    <!-- Search Bar -->
    <section class="search-section">
      <div class="container">
        <div class="search-bar">
          <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.5 11.5L14 14M13 7.5C13 10.5376 10.5376 13 7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2C10.5376 2 13 4.46243 13 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input type="text" placeholder="Search for a game" class="search-input">
        </div>
      </div>
    </section>

    <!-- Category Cards -->
    <section class="category-cards">
      <div class="container">
        <SwiperCardList :items="categoryItems">
          <template #default="{ item }">
            <div class="category-card">
              <div class="card-content">
                <h3 class="card-title">{{ item.title }}</h3>
                <div class="card-count">
                  <svg class="user-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 6C7.65685 6 9 4.65685 9 3C9 1.34315 7.65685 0 6 0C4.34315 0 3 1.34315 3 3C3 4.65685 4.34315 6 6 6Z" fill="currentColor"/>
                    <path d="M12 12C12 9.79086 9.31371 8 6 8C2.68629 8 0 9.79086 0 12" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  <span class="count-number">{{ item.count }}</span>
                </div>
              </div>
            </div>
          </template>
        </SwiperCardList>
      </div>
    </section>

    <!-- Filter Buttons -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-buttons">
          <button class="filter-btn">
            <span class="filter-icon">❤️</span>
            <span class="filter-text">Favorite</span>
          </button>
          <button class="filter-btn">
            <span class="filter-icon">⭐</span>
            <span class="filter-text">Popping</span>
          </button>
          <button class="filter-btn">
            <span class="filter-icon">📍</span>
            <span class="filter-text">Native Dealer</span>
          </button>
          <button class="filter-btn">
            <span class="filter-icon">🔲</span>
            <span class="filter-text">Bonus Buy</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Game Sections -->
    <section class="game-sections">
      <div class="container">
        <!-- Slot Game Section -->
        <div class="game-section">
          <div class="section-header">
            <span class="section-subtitle">BEST SELLERS</span>
            <h2 class="section-title">SLOT GAME ></h2>
          </div>
          <SwiperCardList :items="slotGameItems">
            <template #default="{ item }">
              <div class="game-card">
                <div class="game-image">
                  <div class="image-placeholder">🎰</div>
                </div>
                <div class="game-info">
                  <h3 class="game-name">{{ item.name }}</h3>
                  <div class="game-stats">
                    <span class="rtp" :style="{ color: item.color }">RTP > {{ item.rtp }}</span>
                    <span class="views">👁️ {{ item.views }}</span>
                  </div>
                </div>
              </div>
            </template>
          </SwiperCardList>
        </div>

        <!-- Live Casino Section -->
        <div class="game-section">
          <div class="section-header">
            <span class="section-subtitle">BEST SELLERS</span>
            <h2 class="section-title">LIVE CASINO ></h2>
          </div>
          <SwiperCardList :items="liveCasinoItems">
            <template #default="{ item }">
              <div class="game-card">
                <div class="game-image">
                  <div class="image-placeholder">🎥</div>
                </div>
                <div class="game-info">
                  <h3 class="game-name">{{ item.name }}</h3>
                  <div class="game-stats">
                    <span class="rtp" :style="{ color: item.color }">RTP > {{ item.rtp }}</span>
                    <span class="views">👁️ {{ item.views }}</span>
                  </div>
                </div>
              </div>
            </template>
          </SwiperCardList>
        </div>

        <!-- Arcade Section -->
        <div class="game-section">
          <div class="section-header">
            <span class="section-subtitle">BEST SELLERS</span>
            <h2 class="section-title">ARCADE ></h2>
          </div>
          <SwiperCardList :items="arcadeItems">
            <template #default="{ item }">
              <div class="game-card">
                <div class="game-image">
                  <div class="image-placeholder">🎮</div>
                </div>
                <div class="game-info">
                  <h3 class="game-name">{{ item.name }}</h3>
                  <div class="game-stats">
                    <span class="exclusives">Exclusives</span>
                    <span class="views">👁️ {{ item.views }}</span>
                  </div>
                </div>
              </div>
            </template>
          </SwiperCardList>
        </div>

        <!-- Sports Section -->
        <div class="game-section">
          <div class="section-header">
            <span class="section-subtitle">BEST SELLERS</span>
            <h2 class="section-title">SPORTS ></h2>
          </div>
          <SwiperCardList :items="sportsItems">
            <template #default="{ item }">
              <div class="game-card">
                <div class="game-image">
                  <div class="image-placeholder">⚽</div>
                </div>
                <div class="game-info">
                  <h3 class="game-name">{{ item.name }}</h3>
                  <div class="game-stats">
                    <span class="rtp" :style="{ color: item.color }">RTP > {{ item.rtp }}</span>
                    <span class="views">👁️ {{ item.views }}</span>
                  </div>
                </div>
              </div>
            </template>
          </SwiperCardList>
        </div>
      </div>
    </section>

    <!-- Bottom Bar -->
    <section class="bottom-bar">
      <div class="container">
        <div class="balance-section">
          <span class="balance-label">T 23,950.00</span>
        </div>
        <div class="action-buttons">
          <button class="deposit-btn">Deposit</button>
          <button class="wallet-btn">Wallet</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue'
import SwiperCardList from '../components/SwiperCardList.vue'

// Banner state
const currentBannerIndex = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const dragDistance = ref(0)

// Banner data
const banners = ref([
  { background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)' },
  { background: 'linear-gradient(135deg, #2A1A1A 0%, #3A2A2A 100%)' },
  { background: 'linear-gradient(135deg, #1A2A1A 0%, #2A3A2A 100%)' }
])

// Banner methods
const setBannerIndex = (index: number) => {
  currentBannerIndex.value = index
}

const nextBanner = () => {
  currentBannerIndex.value = (currentBannerIndex.value + 1) % banners.value.length
}

const prevBanner = () => {
  currentBannerIndex.value = currentBannerIndex.value === 0 
    ? banners.value.length - 1 
    : currentBannerIndex.value - 1
}

// Touch handlers
const handleTouchStart = (e: TouchEvent) => {
  isDragging.value = true
  startX.value = e.touches[0].clientX
  currentX.value = e.touches[0].clientX
  dragDistance.value = 0
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return
  
  e.preventDefault()
  currentX.value = e.touches[0].clientX
  dragDistance.value = currentX.value - startX.value
}

const handleTouchEnd = () => {
  if (!isDragging.value) return
  
  const threshold = 50
  if (Math.abs(dragDistance.value) > threshold) {
    if (dragDistance.value > 0) {
      prevBanner()
    } else {
      nextBanner()
    }
  }
  
  isDragging.value = false
  dragDistance.value = 0
}

// Mouse handlers
const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  startX.value = e.clientX
  currentX.value = e.clientX
  dragDistance.value = 0
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return
  
  currentX.value = e.clientX
  dragDistance.value = currentX.value - startX.value
}

const handleMouseUp = () => {
  if (!isDragging.value) return
  
  const threshold = 50
  if (Math.abs(dragDistance.value) > threshold) {
    if (dragDistance.value > 0) {
      prevBanner()
    } else {
      nextBanner()
    }
  }
  
  isDragging.value = false
  dragDistance.value = 0
}

const handleMouseLeave = () => {
  if (isDragging.value) {
    isDragging.value = false
    dragDistance.value = 0
  }
}

// Auto-play banner
let autoPlayInterval: number | null = null

const startAutoPlay = () => {
  autoPlayInterval = window.setInterval(() => {
    nextBanner()
  }, 5000) // Change banner every 5 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// Slot Game Items
const slotGameItems = ref([
  { 
    id: 1, 
    name: 'Fortune Tiger', 
    rtp: '266.3%', 
    views: '302', 
    color: '#10B981',
    isSelected: false 
  },
  { 
    id: 2, 
    name: 'Sweet Bonanza', 
    rtp: '96.4%', 
    views: '15.2K', 
    color: '#3B82F6',
    isSelected: false 
  },
  { 
    id: 3, 
    name: 'Gates of Olympus', 
    rtp: '96.3%', 
    views: '18.7K', 
    color: '#EF4444',
    isSelected: false 
  },
  { 
    id: 4, 
    name: 'Book of Dead', 
    rtp: '96.2%', 
    views: '9.8K', 
    color: '#10B981',
    isSelected: false 
  },
  { 
    id: 5, 
    name: 'Starburst', 
    rtp: '96.1%', 
    views: '11.3K', 
    color: '#3B82F6',
    isSelected: false 
  }
])

// Live Casino Items
const liveCasinoItems = ref([
  { 
    id: 6, 
    name: 'Live Blackjack', 
    rtp: '99.5%', 
    views: '8.2K', 
    color: '#10B981',
    isSelected: false 
  },
  { 
    id: 7, 
    name: 'Live Roulette', 
    rtp: '97.3%', 
    views: '12.1K', 
    color: '#3B82F6',
    isSelected: false 
  },
  { 
    id: 8, 
    name: 'Live Baccarat', 
    rtp: '98.9%', 
    views: '6.7K', 
    color: '#EF4444',
    isSelected: false 
  },
  { 
    id: 9, 
    name: 'Live Poker', 
    rtp: '97.8%', 
    views: '4.3K', 
    color: '#10B981',
    isSelected: false 
  },
  { 
    id: 10, 
    name: 'Live Craps', 
    rtp: '98.5%', 
    views: '2.9K', 
    color: '#3B82F6',
    isSelected: false 
  }
])

// Arcade Items
const arcadeItems = ref([
  { 
    id: 11, 
    name: 'Plinko', 
    rtp: '95.2%', 
    views: '202', 
    color: '#10B981',
    isSelected: false 
  },
  { 
    id: 12, 
    name: 'Crash', 
    rtp: '96.8%', 
    views: '156', 
    color: '#3B82F6',
    isSelected: false 
  },
  { 
    id: 13, 
    name: 'Dice', 
    rtp: '97.1%', 
    views: '89', 
    color: '#EF4444',
    isSelected: false 
  },
  { 
    id: 14, 
    name: 'Mines', 
    rtp: '96.5%', 
    views: '134', 
    color: '#10B981',
    isSelected: false 
  },
  { 
    id: 15, 
    name: 'Tower', 
    rtp: '95.9%', 
    views: '67', 
    color: '#3B82F6',
    isSelected: false 
  }
])

// Sports Items
const sportsItems = ref([
  { 
    id: 16, 
    name: 'Football', 
    rtp: '94.5%', 
    views: '45.2K', 
    color: '#10B981',
    isSelected: false 
  },
  { 
    id: 17, 
    name: 'Basketball', 
    rtp: '93.8%', 
    views: '38.7K', 
    color: '#3B82F6',
    isSelected: false 
  },
  { 
    id: 18, 
    name: 'Tennis', 
    rtp: '95.1%', 
    views: '22.4K', 
    color: '#EF4444',
    isSelected: false 
  },
  { 
    id: 19, 
    name: 'Baseball', 
    rtp: '94.2%', 
    views: '18.9K', 
    color: '#10B981',
    isSelected: false 
  },
  { 
    id: 20, 
    name: 'Hockey', 
    rtp: '93.5%', 
    views: '12.6K', 
    color: '#3B82F6',
    isSelected: false 
  }
])

// Category Items for SwiperCardList
const categoryItems = ref([
  { title: 'POPULAR LIVE', count: '675' },
  { title: 'ARCADE', count: '432' },
  { title: 'BACCA RAT', count: '298' },
  { title: 'MEGAWAYS', count: '543' },
  { title: 'ROULETTE', count: '321' }
])

onMounted(() => {
  console.log('Main page mounted')
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.main-page {
  min-height: 100vh;
  background: var(--color-secondary-dark80, #0F0F0F);
  color: var(--color-neut-10-ff, #FFFFFF);
  padding-bottom: 80px; /* Bottom bar height */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-12, 12px);
}

/* Hero Banner Section */
.hero-banner {
  background: linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%);
  height: 200px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0 var(--spacing-12, 12px) var(--spacing-16, 16px);
  overflow: hidden;
  cursor: grab;
  user-select: none;
}

.hero-banner:active {
  cursor: grabbing;
}

.banner-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  z-index: 2;
}

.banner-slides {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%;
  display: flex;
  transition: transform 0.3s ease;
}

.banner-slide {
  width: 33.333%;
  height: 100%;
  position: relative;
}

.banner-background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.register-button {
  background: var(--color-neut-10-ff, #FFFFFF);
  color: var(--color-secondary-dark80, #0F0F0F);
  border: none;
  padding: var(--spacing-8, 8px) var(--spacing-16, 16px);
  border-radius: var(--border-radius-20, 20px);
  font-size: var(--font-size-body-12, 12px);
  font-weight: var(--font-weight-sb, 600);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  z-index: 3;
}

.register-button:hover {
  background: var(--color-neut-30-ee, #EEEEEE);
  transform: translateY(-1px);
}

.carousel-dots {
  display: flex;
  gap: var(--spacing-4, 4px);
  position: relative;
  z-index: 3;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-neut-60-aa, #AAAAAA);
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.dot.active {
  background: var(--color-neut-10-ff, #FFFFFF);
}

.dot:hover {
  background: var(--color-neut-50-cc, #CCCCCC);
}

/* Search Section */
.search-section {
  padding: var(--spacing-16, 16px) 0;
  background: var(--color-secondary-dark80, #0F0F0F);
}

.search-bar {
  display: flex;
  align-items: center;
  background: var(--color-secondary-dark70, #1A1A1A);
  border-radius: var(--border-radius-10, 10px);
  padding: var(--spacing-12, 12px) var(--spacing-16, 16px);
  gap: var(--spacing-8, 8px);
}

.search-icon {
  color: var(--color-neut-70-99, #999999);
  flex-shrink: 0;
}

.search-input {
  background: transparent;
  border: none;
  color: var(--color-neut-10-ff, #FFFFFF);
  font-size: var(--font-size-body-14, 14px);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
  width: 100%;
  outline: none;
}

.search-input::placeholder {
  color: var(--color-neut-70-99, #999999);
}

/* Category Cards */
.category-cards {
  padding: var(--spacing-16, 16px) 0;
  background: var(--color-secondary-dark80, #0F0F0F);
}

.category-card {
  background: var(--color-secondary-dark70, #1A1A1A);
  border-radius: var(--border-radius-10, 10px);
  padding: var(--spacing-16, 16px);
  text-align: center;
  transition: transform 0.2s ease;
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.category-card:hover {
  transform: translateY(-2px);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.card-title {
  font-size: 18px;
  font-weight: var(--font-weight-sb, 600);
  color: var(--color-neut-10-ff, #FFFFFF);
  font-family: 'Carter One', sans-serif;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-0, 0);
  line-height: 1.2;
  text-align: center;
}

.card-count {
  display: flex;
  align-items: center;
  gap: var(--spacing-4, 4px);
  align-self: flex-end;
  margin-top: auto;
}

.count-number {
  font-size: 10px;
  font-weight: var(--font-weight-r, 400);
  color: var(--color-neut-10-ff, #FFFFFF);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
  margin-left: 4px;
}

.user-icon {
  color: var(--color-neut-70-99, #999999);
}

/* Filter Section */
.filter-section {
  padding: var(--spacing-16, 16px) 0;
  background: var(--color-secondary-dark80, #0F0F0F);
  border-bottom: 1px solid var(--color-secondary-dark60, #232323);
}

.filter-buttons {
  display: flex;
  gap: var(--spacing-8, 8px);
  overflow-x: auto;
  padding-bottom: var(--spacing-4, 4px);
}

.filter-btn {
  background: var(--color-secondary-dark70, #1A1A1A);
  border: none;
  border-radius: var(--border-radius-10, 10px);
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px);
  color: var(--color-neut-10-ff, #FFFFFF);
  font-size: var(--font-size-body-12, 12px);
  font-weight: var(--font-weight-sb, 600);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: var(--spacing-4, 4px);
}

.filter-btn:hover {
  background: var(--color-secondary-dark60, #232323);
}

.filter-icon {
  font-size: 14px;
}

/* Game Sections */
.game-sections {
  padding: var(--spacing-24, 24px) 0;
  background: var(--color-secondary-dark80, #0F0F0F);
}

.game-section {
  margin-bottom: var(--spacing-32, 32px);
}

.game-section:last-child {
  margin-bottom: 0;
}

.section-header {
  margin-bottom: var(--spacing-16, 16px);
}

.section-subtitle {
  font-size: var(--font-size-body-10, 10px);
  font-weight: var(--font-weight-lt, 400);
  color: var(--color-neut-70-99, #999999);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
  text-transform: uppercase;
  letter-spacing: var(--large, 15%);
  display: block;
  margin-bottom: var(--spacing-4, 4px);
}

.section-title {
  font-size: var(--font-size-head-20, 20px);
  font-weight: var(--font-weight-eb, 700);
  color: var(--color-neut-10-ff, #FFFFFF);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: var(--small, -2%);
}

/* Bottom Bar */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-secondary-dark70, #1A1A1A);
  border-top: 1px solid var(--color-secondary-dark60, #232323);
  padding: var(--spacing-12, 12px) 0;
  z-index: 100;
}

.bottom-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance-section {
  display: flex;
  align-items: center;
}

.balance-label {
  font-size: var(--font-size-body-14, 14px);
  font-weight: var(--font-weight-eb, 700);
  color: var(--color-neut-10-ff, #FFFFFF);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
}

.action-buttons {
  display: flex;
  gap: var(--spacing-8, 8px);
}

.deposit-btn {
  background: var(--color-neut-10-ff, #FFFFFF);
  color: var(--color-secondary-dark80, #0F0F0F);
  border: none;
  border-radius: var(--border-radius-6, 4px);
  padding: var(--spacing-8, 8px) var(--spacing-16, 16px);
  font-size: var(--font-size-body-12, 12px);
  font-weight: var(--font-weight-sb, 600);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
}

.deposit-btn:hover {
  background: var(--color-neut-30-ee, #EEEEEE);
}

.wallet-btn {
  background: var(--color-secondary-dark60, #232323);
  color: var(--color-neut-10-ff, #FFFFFF);
  border: none;
  border-radius: var(--border-radius-6, 4px);
  padding: var(--spacing-8, 8px) var(--spacing-16, 16px);
  font-size: var(--font-size-body-12, 12px);
  font-weight: var(--font-weight-sb, 600);
  font-family: var(--font-family-fustat, 'Inter'), sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wallet-btn:hover {
  background: var(--color-secondary-dark50, #333333);
}

        /* Game Card Styles */
        .game-card {
          background: var(--color-secondary-dark70, #1A1A1A);
          border-radius: var(--border-radius-10, 10px);
          padding: var(--spacing-12, 12px);
          width: 130px;
          height: 130px; /* Changed from 160px to 130px */
          display: flex;
          flex-direction: column;
          gap: var(--spacing-8, 8px);
          transition: transform 0.2s ease;
        }
        
        .game-card:hover {
          transform: translateY(-2px);
        }
        
        .game-image {
          width: 100%;
          height: 80px;
          border-radius: var(--border-radius-6, 4px);
          background: var(--color-secondary-dark60, #232323);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .image-placeholder {
          font-size: 32px;
          color: var(--color-neut-70-99, #999999);
        }
        
        .game-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4, 4px);
        }
        
        .game-name {
          font-size: var(--font-size-body-12, 12px);
          font-weight: var(--font-weight-sb, 600);
          color: var(--color-neut-10-ff, #FFFFFF);
          font-family: var(--font-family-fustat, 'Inter'), sans-serif;
          margin: 0;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .game-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: var(--font-size-body-10, 10px);
          font-weight: var(--font-weight-lt, 400);
          color: var(--color-neut-70-99, #999999);
          font-family: var(--font-family-fustat, 'Inter'), sans-serif;
        }
        
        .rtp {
          font-weight: var(--font-weight-sb, 600);
        }
        
        .exclusives {
          color: var(--color-primary-base, #60A5FA);
          font-weight: var(--font-weight-sb, 600);
        }
        
        .views {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-banner {
            height: 160px;
            padding: 0 var(--spacing-12, 12px) var(--spacing-12, 12px);
          }
          
          .register-button {
            padding: var(--spacing-6, 6px) var(--spacing-12, 12px);
            font-size: var(--font-size-body-10, 10px);
          }
          
          .card-title {
            font-size: var(--font-size-body-10, 10px);
          }
          
          .count-number {
            font-size: var(--font-size-body-12, 12px);
          }
          
          .section-title {
            font-size: var(--font-size-head-16, 16px);
          }
          
          .filter-buttons {
            gap: var(--spacing-6, 6px);
          }
          
          .filter-btn {
            padding: var(--spacing-6, 6px) var(--spacing-8, 8px);
            font-size: var(--font-size-body-10, 10px);
          }
          
          .game-card {
            width: 120px;
            height: 150px;
            padding: var(--spacing-8, 8px);
          }
          
          .game-image {
            height: 70px;
          }
          
          .image-placeholder {
            font-size: 28px;
          }
          
          .game-name {
            font-size: var(--font-size-body-10, 10px);
          }
          
          .game-stats {
            font-size: var(--font-size-body-10, 10px);
          }
          
          .bottom-bar {
            padding: var(--spacing-8, 8px) 0;
          }
          
          .deposit-btn,
          .wallet-btn {
            padding: var(--spacing-6, 6px) var(--spacing-12, 12px);
            font-size: var(--font-size-body-10, 10px);
          }
        }
        
        @media (max-width: 480px) {
          .hero-banner {
            height: 140px;
          }
          
          .card-title {
            font-size: var(--font-size-body-10, 10px);
            margin-bottom: var(--spacing-4, 4px);
          }
          
          .count-number {
            font-size: var(--font-size-body-10, 10px);
          }
          
          .section-title {
            font-size: var(--font-size-head-14, 14px);
          }
          
          .filter-buttons {
            gap: var(--spacing-4, 4px);
          }
          
          .filter-btn {
            padding: var(--spacing-4, 4px) var(--spacing-6, 6px);
            font-size: var(--font-size-body-10, 10px);
          }
          
          .filter-icon {
            font-size: 12px;
          }
          
          .game-card {
            width: 110px;
            height: 140px;
            padding: var(--spacing-6, 6px);
          }
          
          .game-image {
            height: 60px;
          }
          
          .image-placeholder {
            font-size: 24px;
          }
          
          .game-name {
            font-size: var(--font-size-body-10, 10px);
          }
          
          .game-stats {
            font-size: var(--font-size-body-10, 10px);
          }
        }
</style> 