import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: ''
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WhyUseStorybook: Story = {
  render: () => ({
    template: `
      <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h1 class="text-5xl font-bold text-gray-900 mb-6">
              📚 Storybook 가이드
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Storybook을 사용해야 하는 이유와 장단점에 대한 상세한 설명
            </p>
          </div>

          <!-- Vue + MCP + Token Studio + Storybook Integration -->
          <div class="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span class="text-purple-600 mr-3">🚀</span>
              Vue + MCP + 토큰스튜디오 + Storybook 통합의 장점
            </h2>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div class="border-l-4 border-purple-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">🎨 디자인-개발 워크플로우 최적화</h3>
                  <p class="text-gray-600">Figma에서 MCP를 통해 디자인을 바로 코드로 변환하고, Storybook에서 실시간으로 확인하여 디자인과 개발 간의 간극을 최소화합니다.</p>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">🎯 토큰 기반 디자인 시스템</h3>
                  <p class="text-gray-600">토큰스튜디오로 생성된 디자인 토큰을 Vue 컴포넌트에 적용하고, Storybook에서 일관된 디자인 시스템을 시각적으로 관리할 수 있습니다.</p>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">⚡ 빠른 프로토타이핑</h3>
                  <p class="text-gray-600">Figma 디자인을 MCP로 즉시 코드화하고, Storybook에서 다양한 상태와 변형을 빠르게 테스트하여 개발 속도를 크게 향상시킵니다.</p>
                </div>
              </div>
              
              <div class="space-y-6">
                <div class="border-l-4 border-purple-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">🎪 컴포넌트 갤러리 구축</h3>
                  <p class="text-gray-600">토큰스튜디오의 디자인 토큰과 Vue 컴포넌트를 Storybook에서 체계적으로 관리하여 완전한 컴포넌트 라이브러리를 구축합니다.</p>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">👥 팀 협업 강화</h3>
                  <p class="text-gray-600">디자이너는 Figma에서 작업하고, 개발자는 MCP로 코드를 받아 Storybook에서 검증하여 원활한 협업이 가능합니다.</p>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">🔧 유지보수성 향상</h3>
                  <p class="text-gray-600">토큰 기반 접근으로 디자인 변경 시 토큰만 수정하면 모든 컴포넌트에 자동으로 반영되어 유지보수가 쉬워집니다.</p>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">📱 반응형 디자인 검증</h3>
                  <p class="text-gray-600">Storybook의 다양한 뷰포트 설정으로 토큰 기반 반응형 디자인을 모든 디바이스에서 쉽게 테스트할 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Storybook 사용법 가이드 -->
          <div class="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 class="text-3xl font-bold text-green-600 mb-8 flex items-center">
              <span class="mr-3">📖</span>
              Storybook 사용법 가이드
            </h2>
            
            <div class="space-y-8">
              <!-- 기본 사용법 -->
              <div class="border-l-4 border-green-500 pl-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">🎯 기본 사용법</h3>
                <div class="space-y-4">
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-green-900 mb-2">1. Storybook 실행하기</h4>
                    <div class="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                      npm run storybook
                    </div>
                    <p class="text-green-800 mt-2">브라우저에서 http://localhost:6006 으로 접속하여 Storybook을 확인할 수 있습니다.</p>
                  </div>
                  
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-green-900 mb-2">2. 컴포넌트 탐색하기</h4>
                    <p class="text-green-800">왼쪽 사이드바에서 원하는 컴포넌트를 선택하고, 다양한 스토리를 확인할 수 있습니다.</p>
                  </div>
                  
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-green-900 mb-2">3. Controls 패널 사용하기</h4>
                    <p class="text-green-800">오른쪽 Controls 패널에서 컴포넌트의 props를 실시간으로 조정하여 다양한 상태를 테스트할 수 있습니다.</p>
                  </div>
                </div>
              </div>

              <!-- 고급 기능 -->
              <div class="border-l-4 border-blue-500 pl-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">🚀 고급 기능 활용</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-blue-900 mb-2">📱 반응형 테스트</h4>
                      <p class="text-blue-800">Viewport 애드온을 사용하여 다양한 디바이스 크기에서 컴포넌트가 어떻게 보이는지 확인하세요.</p>
                    </div>
                    
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-blue-900 mb-2">♿ 접근성 검사</h4>
                      <p class="text-blue-800">Accessibility 애드온으로 WCAG 가이드라인 준수 여부를 자동으로 검사할 수 있습니다.</p>
                    </div>
                    
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-blue-900 mb-2">📝 문서화</h4>
                      <p class="text-blue-800">Docs 탭에서 컴포넌트의 사용법, props 설명, 예제 코드를 확인할 수 있습니다.</p>
                    </div>
                  </div>
                  
                  <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-blue-900 mb-2">🔍 검색 기능</h4>
                      <p class="text-blue-800">상단 검색바를 사용하여 원하는 컴포넌트나 스토리를 빠르게 찾을 수 있습니다.</p>
                    </div>
                    
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-blue-900 mb-2">🎨 테마 변경</h4>
                      <p class="text-blue-800">다크/라이트 모드 전환으로 다양한 테마에서 컴포넌트의 모습을 확인하세요.</p>
                    </div>
                    
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-blue-900 mb-2">📊 성능 분석</h4>
                      <p class="text-blue-800">Performance 애드온으로 컴포넌트의 렌더링 성능을 측정하고 최적화할 수 있습니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Docs 사용법 가이드 -->
              <div class="border-l-4 border-teal-500 pl-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">📚 Docs 사용법 가이드</h3>
                <div class="space-y-6">
                  <!-- Docs 기본 개념 -->
                  <div class="bg-teal-50 p-6 rounded-lg">
                    <h4 class="text-xl font-bold text-teal-900 mb-4">🎯 Docs란?</h4>
                    <p class="text-teal-800 mb-4">Docs는 Storybook에서 컴포넌트의 문서를 자동으로 생성하고 관리하는 기능입니다. 컴포넌트의 사용법, props, 예제를 체계적으로 정리할 수 있습니다.</p>
                    <div class="grid md:grid-cols-3 gap-4">
                      <div class="bg-white p-3 rounded border border-teal-200">
                        <h5 class="font-semibold text-teal-900 mb-2">📖 자동 문서화</h5>
                        <p class="text-teal-700 text-sm">컴포넌트 코드에서 props와 설명을 자동으로 추출</p>
                      </div>
                      <div class="bg-white p-3 rounded border border-teal-200">
                        <h5 class="font-semibold text-teal-900 mb-2">🎨 인터랙티브 예제</h5>
                        <p class="text-teal-700 text-sm">실제 컴포넌트를 Docs에서 직접 조작 가능</p>
                      </div>
                      <div class="bg-white p-3 rounded border border-teal-200">
                        <h5 class="font-semibold text-teal-900 mb-2">🔗 코드 복사</h5>
                        <p class="text-teal-700 text-sm">사용 예제 코드를 바로 복사하여 사용</p>
                      </div>
                    </div>
                  </div>

                  <!-- Docs 접근 방법 -->
                  <div class="bg-teal-50 p-6 rounded-lg">
                    <h4 class="text-xl font-bold text-teal-900 mb-4">🔍 Docs 접근 방법</h4>
                    <div class="grid md:grid-cols-2 gap-6">
                      <div class="space-y-3">
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">1. 사이드바에서 Docs 탭 클릭</h5>
                          <p class="text-teal-700 text-sm">컴포넌트를 선택한 후 상단의 "Docs" 탭을 클릭하세요.</p>
                        </div>
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">2. 단축키 사용</h5>
                          <p class="text-teal-700 text-sm">키보드에서 <code class="bg-teal-100 px-1 rounded">D</code> 키를 눌러 Docs 패널을 토글할 수 있습니다.</p>
                        </div>
                      </div>
                      <div class="space-y-3">
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">3. URL 직접 접근</h5>
                          <p class="text-teal-700 text-sm">컴포넌트 URL에 <code class="bg-teal-100 px-1 rounded">?viewMode=docs</code>를 추가하여 바로 Docs 페이지로 이동</p>
                        </div>
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">4. 전체 Docs 페이지</h5>
                          <p class="text-teal-700 text-sm">사이드바 하단의 "Docs" 섹션에서 모든 컴포넌트의 문서를 한 번에 확인</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Docs 구성 요소 -->
                  <div class="bg-teal-50 p-6 rounded-lg">
                    <h4 class="text-xl font-bold text-teal-900 mb-4">📋 Docs 구성 요소</h4>
                    <div class="grid md:grid-cols-2 gap-6">
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">📖 Description</h5>
                          <p class="text-teal-700 text-sm">컴포넌트의 목적과 사용법에 대한 설명</p>
                        </div>
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">⚙️ Props Table</h5>
                          <p class="text-teal-700 text-sm">모든 props의 타입, 기본값, 설명을 표 형태로 표시</p>
                        </div>
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">🎨 Controls</h5>
                          <p class="text-teal-700 text-sm">실시간으로 props 값을 조정하여 컴포넌트 테스트</p>
                        </div>
                      </div>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">💻 Code Examples</h5>
                          <p class="text-teal-700 text-sm">실제 사용 예제 코드와 복사 기능</p>
                        </div>
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">📱 Canvas</h5>
                          <p class="text-teal-700 text-sm">실제 컴포넌트가 렌더링되는 미리보기 영역</p>
                        </div>
                        <div class="bg-white p-4 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-2">🔗 Related</h5>
                          <p class="text-teal-700 text-sm">관련된 다른 컴포넌트나 문서 링크</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Docs 활용 팁 -->
                  <div class="bg-teal-50 p-6 rounded-lg">
                    <h4 class="text-xl font-bold text-teal-900 mb-4">💡 Docs 활용 팁</h4>
                    <div class="grid md:grid-cols-2 gap-6">
                      <div class="space-y-3">
                        <div class="bg-white p-3 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-1">📝 상세한 설명 작성</h5>
                          <p class="text-teal-700 text-sm">컴포넌트의 목적과 사용 시나리오를 명확히 설명하세요.</p>
                        </div>
                        <div class="bg-white p-3 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-1">🎯 실제 사용 예제</h5>
                          <p class="text-teal-700 text-sm">일반적인 사용 패턴과 엣지 케이스를 모두 포함하세요.</p>
                        </div>
                        <div class="bg-white p-3 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-1">♿ 접근성 정보</h5>
                          <p class="text-teal-700 text-sm">키보드 네비게이션, 스크린 리더 지원 등 접근성 정보를 추가하세요.</p>
                        </div>
                      </div>
                      <div class="space-y-3">
                        <div class="bg-white p-3 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-1">🔄 정기적 업데이트</h5>
                          <p class="text-teal-700 text-sm">컴포넌트 변경 시 Docs도 함께 업데이트하여 동기화를 유지하세요.</p>
                        </div>
                        <div class="bg-white p-3 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-1">👥 팀 공유</h5>
                          <p class="text-teal-700 text-sm">Docs를 팀원들과 공유하여 컴포넌트 사용법을 표준화하세요.</p>
                        </div>
                        <div class="bg-white p-3 rounded border border-teal-200">
                          <h5 class="font-semibold text-teal-900 mb-1">🔍 검색 최적화</h5>
                          <p class="text-teal-700 text-sm">키워드를 적절히 사용하여 Docs 검색이 용이하도록 하세요.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 실무 활용 팁 -->
              <div class="border-l-4 border-purple-500 pl-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">💡 실무 활용 팁</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <div class="bg-purple-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-purple-900 mb-2">👥 팀 협업</h4>
                      <ul class="text-purple-800 space-y-1 text-sm">
                        <li>• 디자이너와 함께 컴포넌트 검토</li>
                        <li>• QA 팀이 다양한 상태 테스트</li>
                        <li>• 기획자가 Controls로 원하는 설정 찾기</li>
                      </ul>
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-purple-900 mb-2">🔧 개발 워크플로우</h4>
                      <ul class="text-purple-800 space-y-1 text-sm">
                        <li>• 새 컴포넌트 개발 시 먼저 스토리 작성</li>
                        <li>• TDD 방식으로 컴포넌트 테스트</li>
                        <li>• 변경사항을 스토리에서 먼저 확인</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="space-y-4">
                    <div class="bg-purple-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-purple-900 mb-2">📚 문서화 전략</h4>
                      <ul class="text-purple-800 space-y-1 text-sm">
                        <li>• 모든 props에 대한 상세 설명</li>
                        <li>• 실제 사용 예제 포함</li>
                        <li>• 접근성 고려사항 명시</li>
                      </ul>
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-purple-900 mb-2">🚀 배포 및 공유</h4>
                      <ul class="text-purple-800 space-y-1 text-sm">
                        <li>• 정적 사이트로 배포하여 팀원들과 공유</li>
                        <li>• CI/CD 파이프라인에 통합</li>
                        <li>• 버전 관리와 함께 릴리즈</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 단축키 가이드 -->
              <div class="border-l-4 border-orange-500 pl-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">⌨️ 유용한 단축키</h3>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-orange-50 p-4 rounded-lg">
                    <div class="font-mono bg-orange-200 px-2 py-1 rounded text-sm mb-2">F</div>
                    <p class="text-orange-800 text-sm">전체화면 모드 토글</p>
                  </div>
                  <div class="bg-orange-50 p-4 rounded-lg">
                    <div class="font-mono bg-orange-200 px-2 py-1 rounded text-sm mb-2">A</div>
                    <p class="text-orange-800 text-sm">Accessibility 패널 토글</p>
                  </div>
                  <div class="bg-orange-50 p-4 rounded-lg">
                    <div class="font-mono bg-orange-200 px-2 py-1 rounded text-sm mb-2">D</div>
                    <p class="text-orange-800 text-sm">Docs 패널 토글</p>
                  </div>
                  <div class="bg-orange-50 p-4 rounded-lg">
                    <div class="font-mono bg-orange-200 px-2 py-1 rounded text-sm mb-2">C</div>
                    <p class="text-orange-800 text-sm">Controls 패널 토글</p>
                  </div>
                  <div class="bg-orange-50 p-4 rounded-lg">
                    <div class="font-mono bg-orange-200 px-2 py-1 rounded text-sm mb-2">S</div>
                    <p class="text-orange-800 text-sm">사이드바 토글</p>
                  </div>
                  <div class="bg-orange-50 p-4 rounded-lg">
                    <div class="font-mono bg-orange-200 px-2 py-1 rounded text-sm mb-2">/</div>
                    <p class="text-orange-800 text-sm">검색창 포커스</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Why Use Storybook Section -->
          <div class="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 class="text-3xl font-bold text-blue-600 mb-8 flex items-center">
              <span class="mr-3">🎯</span>
              Storybook을 사용해야 하는 이유
            </h2>
            
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Left Column -->
              <div class="space-y-6">
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">🔧 개발 효율성 향상</h3>
                  <p class="text-gray-600">컴포넌트를 독립적으로 개발하여 더 빠르고 효율적인 개발이 가능합니다.</p>
                </div>
                
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">👥 팀 협업 개선</h3>
                  <p class="text-gray-600">디자이너, 개발자, QA 간의 소통이 원활해지고 일관된 결과물을 만들 수 있습니다.</p>
                </div>
                
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">📖 문서화 자동화</h3>
                  <p class="text-gray-600">컴포넌트 사용법과 예제가 자동으로 문서화되어 유지보수가 쉬워집니다.</p>
                </div>
                
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">🎛️ Controls를 통한 실시간 조작</h3>
                  <p class="text-gray-600">기획자나 디자이너가 Controls 패널을 통해 컴포넌트를 실시간으로 수정해보고, 원하는 설정의 코드를 바로 전달받을 수 있습니다.</p>
                </div>
              </div>
              
              <!-- Right Column -->
              <div class="space-y-6">
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">🧪 품질 향상</h3>
                  <p class="text-gray-600">다양한 상태와 엣지 케이스를 쉽게 테스트하여 버그를 사전에 방지합니다.</p>
                </div>
                
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">♻️ 재사용성 증대</h3>
                  <p class="text-gray-600">컴포넌트 라이브러리를 구축하여 코드 재사용성을 크게 향상시킵니다.</p>
                </div>
                
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">👁️ 시각적 테스팅</h3>
                  <p class="text-gray-600">시각적 회귀 테스트와 접근성 테스트를 통해 품질을 보장합니다.</p>
                </div>
                
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="font-semibold text-gray-900 mb-2">🎨 일관된 디자인 시스템</h3>
                  <p class="text-gray-600">컴포넌트 라이브러리를 통해 일관된 디자인 시스템을 구축하고 유지할 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- When to Use Section -->
          <div class="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span class="text-indigo-600 mr-3">🎯</span>
              언제 Storybook을 사용해야 할까요?
            </h2>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center p-6 bg-indigo-50 rounded-xl">
                <div class="text-4xl mb-4">🏢</div>
                <h3 class="text-lg font-semibold text-indigo-900 mb-2">대규모 팀</h3>
                <p class="text-indigo-700">여러 개발자, 디자이너가 협업하는 프로젝트</p>
              </div>
              
              <div class="text-center p-6 bg-indigo-50 rounded-xl">
                <div class="text-4xl mb-4">🎨</div>
                <h3 class="text-lg font-semibold text-indigo-900 mb-2">복잡한 UI</h3>
                <p class="text-indigo-700">다양한 상태와 변형이 많은 컴포넌트</p>
              </div>
              
              <div class="text-center p-6 bg-indigo-50 rounded-xl">
                <div class="text-4xl mb-4">📱</div>
                <h3 class="text-lg font-semibold text-indigo-900 mb-2">재사용성 중요</h3>
                <p class="text-indigo-700">컴포넌트 라이브러리 구축이 필요한 프로젝트</p>
              </div>
            </div>
          </div>

          <!-- Best Practices -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span class="text-yellow-600 mr-3">💡</span>
              Storybook 사용 모범 사례
            </h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                  <span class="text-yellow-800 font-bold">1</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">의미있는 스토리 이름 사용</h3>
                  <p class="text-gray-600">컴포넌트의 상태나 변형을 명확히 표현하는 이름을 사용하세요.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                  <span class="text-yellow-800 font-bold">2</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Props 문서화</h3>
                  <p class="text-gray-600">모든 props에 대한 설명과 예제를 포함하세요.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                  <span class="text-yellow-800 font-bold">3</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">접근성 고려</h3>
                  <p class="text-gray-600">접근성 애드온을 사용하여 WCAG 가이드라인을 준수하세요.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                  <span class="text-yellow-800 font-bold">4</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">정기적인 업데이트</h3>
                  <p class="text-gray-600">컴포넌트 변경 시 스토리도 함께 업데이트하여 동기화를 유지하세요.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                  <span class="text-yellow-800 font-bold">5</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">팀 교육</h3>
                  <p class="text-gray-600">팀원들이 Storybook의 가치와 사용법을 이해하도록 교육하세요.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Storybook을 사용해야 하는 이유와 장단점, 모범 사례에 대한 상세한 가이드입니다.'
      }
    }
  }
}; 