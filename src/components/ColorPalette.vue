<template>
  <div class="color-palette">
    <h3 class="color-title">Color Palette</h3>
    
    <!-- Primary Colors -->
    <div class="color-section">
      <h4 class="section-title">Primary Colors</h4>
      <div class="color-grid primary-grid">
        <div class="color-item">
          <div class="color-swatch primary-blue"></div>
          <div class="color-info">
            <span class="color-name">Primary Blue</span>
            <span class="color-value">#2563EB</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch primary-dark"></div>
          <div class="color-info">
            <span class="color-name">Primary Dark</span>
            <span class="color-value">#1D4ED8</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch primary-light"></div>
          <div class="color-info">
            <span class="color-name">Primary Light</span>
            <span class="color-value">#3B82F6</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch primary-bg"></div>
          <div class="color-info">
            <span class="color-name">Primary Background</span>
            <span class="color-value">#EFF6FF</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Neutral Colors -->
    <div class="color-section">
      <h4 class="section-title">Neutral Colors</h4>
      <div class="color-grid neutral-grid">
        <div class="color-item">
          <div class="color-swatch gray-900"></div>
          <div class="color-info">
            <span class="color-name">Gray 900</span>
            <span class="color-value">#111827</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-800"></div>
          <div class="color-info">
            <span class="color-name">Gray 800</span>
            <span class="color-value">#1F2937</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-700"></div>
          <div class="color-info">
            <span class="color-name">Gray 700</span>
            <span class="color-value">#374151</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-600"></div>
          <div class="color-info">
            <span class="color-name">Gray 600</span>
            <span class="color-value">#4B5563</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-500"></div>
          <div class="color-info">
            <span class="color-name">Gray 500</span>
            <span class="color-value">#6B7280</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-400"></div>
          <div class="color-info">
            <span class="color-name">Gray 400</span>
            <span class="color-value">#9CA3AF</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-300"></div>
          <div class="color-info">
            <span class="color-name">Gray 300</span>
            <span class="color-value">#D1D5DB</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-200"></div>
          <div class="color-info">
            <span class="color-name">Gray 200</span>
            <span class="color-value">#E5E7EB</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-100"></div>
          <div class="color-info">
            <span class="color-name">Gray 100</span>
            <span class="color-value">#F3F4F6</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch gray-50"></div>
          <div class="color-info">
            <span class="color-name">Gray 50</span>
            <span class="color-value">#F9FAFB</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch white-color"></div>
          <div class="color-info">
            <span class="color-name">White</span>
            <span class="color-value">#FFFFFF</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Semantic Colors -->
    <div class="color-section">
      <h4 class="section-title">Semantic Colors</h4>
      <div class="color-grid semantic-grid">
        <div class="color-item">
          <div class="color-swatch success-color"></div>
          <div class="color-info">
            <span class="color-name">Success</span>
            <span class="color-value">#16A34A</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch error-color"></div>
          <div class="color-info">
            <span class="color-name">Error</span>
            <span class="color-value">#DC2626</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch warning-color"></div>
          <div class="color-info">
            <span class="color-name">Warning</span>
            <span class="color-value">#CA8A04</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch info-color"></div>
          <div class="color-info">
            <span class="color-name">Info</span>
            <span class="color-value">#2563EB</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Usage Examples -->
    <div class="color-section">
      <h4 class="section-title">Usage Examples</h4>
      <div class="examples-grid">
        <div class="example-card">
          <h5 class="example-title">Text Colors</h5>
          <div class="example-content">
            <p class="text-primary">Primary text (Gray 900)</p>
            <p class="text-secondary">Secondary text (Gray 700)</p>
            <p class="text-muted">Muted text (Gray 500)</p>
            <p class="text-link">Link text (Primary Blue)</p>
          </div>
        </div>
        <div class="example-card">
          <h5 class="example-title">Background Colors</h5>
          <div class="example-content">
            <div class="bg-example bg-white">White background</div>
            <div class="bg-example bg-light">Light gray background</div>
            <div class="bg-example bg-primary-light">Primary background</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ColorPalette 컴포넌트
 * 
 * 디자인 시스템의 컬러 팔레트를 시각적으로 보여줍니다.
 * Primary, Neutral, Semantic 컬러들을 포함합니다.
 * 
 * @example
 * ```vue
 * <ColorPalette />
 * ```
 */
</script>

<style scoped>
.color-palette {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
}

.color-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.color-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.75rem;
}

.color-grid {
  display: grid;
  gap: 1rem;
}

.primary-grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .primary-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.neutral-grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .neutral-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.semantic-grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .semantic-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.examples-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .examples-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.color-item {
  display: flex;
  flex-direction: column;
}

.color-swatch {
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Primary Colors */
.primary-blue {
  background-color: #2563eb;
}

.primary-dark {
  background-color: #1d4ed8;
}

.primary-light {
  background-color: #3b82f6;
}

.primary-bg {
  background-color: #eff6ff;
  border: 1px solid #e5e7eb;
}

/* Neutral Colors */
.gray-900 {
  background-color: #111827;
}

.gray-800 {
  background-color: #1f2937;
}

.gray-700 {
  background-color: #374151;
}

.gray-600 {
  background-color: #4b5563;
}

.gray-500 {
  background-color: #6b7280;
}

.gray-400 {
  background-color: #9ca3af;
}

.gray-300 {
  background-color: #d1d5db;
}

.gray-200 {
  background-color: #e5e7eb;
}

.gray-100 {
  background-color: #f3f4f6;
}

.gray-50 {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
}

.white-color {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
}

/* Semantic Colors */
.success-color {
  background-color: #16a34a;
}

.error-color {
  background-color: #dc2626;
}

.warning-color {
  background-color: #ca8a04;
}

.info-color {
  background-color: #2563eb;
}

.color-info {
  display: flex;
  flex-direction: column;
}

.color-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.color-value {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
}

.example-card {
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.example-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.example-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.text-primary {
  color: #111827;
}

.text-secondary {
  color: #374151;
}

.text-muted {
  color: #6b7280;
}

.text-link {
  color: #2563eb;
}

.bg-example {
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
}

.bg-white {
  background-color: #ffffff;
}

.bg-light {
  background-color: #f9fafb;
}

.bg-primary-light {
  background-color: #eff6ff;
}
</style> 