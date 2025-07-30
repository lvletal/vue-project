<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- 헤더 -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          🛠️ Vue + Tailwind + Storybook 환경설정 가이드
        </h1>
        <p class="text-lg text-gray-600">
          IT를 모르는 분도 이해할 수 있도록 쉽게 설명드립니다
        </p>
      </div>

      <!-- 목차 -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-bold mb-4">📋 목차</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="(section, index) in sections" 
            :key="index"
            @click="scrollToSection(section.id)"
            class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div class="flex items-center space-x-3">
              <span class="text-2xl">{{ section.icon }}</span>
              <div>
                <h3 class="font-medium text-gray-800">{{ section.title }}</h3>
                <p class="text-sm text-gray-600">{{ section.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 1. 개발 환경이란? -->
      <section :id="sections[0].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">1. 개발 환경이란?</h2>
        <p class="text-gray-700">
          웹사이트를 만들기 위해 필요한 도구와 프로그램들이 모여 있는 작업 공간입니다.<br>
          마치 집을 짓기 위한 공구상자와 작업장이 준비된 것과 비슷합니다.
        </p>
      </section>

      <!-- 2. 각 도구의 역할 -->
      <section :id="sections[1].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">2. 각 도구의 역할</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li><b>Vue</b>: 웹사이트를 부품(컴포넌트) 단위로 만들 수 있게 해주는 도구입니다.</li>
          <li><b>Tailwind</b>: 미리 만들어진 스타일 조각을 조합해서 빠르게 디자인할 수 있게 해줍니다.</li>
          <li><b>Storybook</b>: 만든 부품들을 따로따로 테스트하고, 한눈에 볼 수 있게 해줍니다.</li>
          <li><b>MCP</b>: AI와 연결해서 개발을 더 쉽게 도와주는 시스템입니다.</li>
        </ul>
      </section>

      <!-- 3. 폴더 구조 설명 -->
      <section :id="sections[2].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">3. 폴더 구조 설명</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li><b>src/</b>: 실제 웹사이트 코드가 들어가는 곳 (부품, 페이지 등)</li>
          <li><b>public/</b>: 이미지, 아이콘 등 정적 파일</li>
          <li><b>node_modules/</b>: 설치된 도구들이 저장되는 곳 (자동 생성)</li>
          <li><b>package.json</b>: 프로젝트 정보와 사용하는 도구 목록</li>
        </ul>
      </section>

      <!-- 4. 개발 순서 -->
      <section :id="sections[3].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">4. 개발 순서</h2>
        <ol class="list-decimal pl-6 text-gray-700 space-y-2">
          <li>필요한 부품(컴포넌트) 설계</li>
          <li>Vue로 부품 만들기</li>
          <li>Tailwind로 디자인 적용</li>
          <li>Storybook에서 부품 테스트</li>
          <li>여러 부품을 조립해서 페이지 완성</li>
        </ol>
      </section>

      <!-- 5. 자주 겪는 문제와 해결법 -->
      <section :id="sections[4].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">5. 자주 겪는 문제와 해결법</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li><b>포트 충돌</b>: 이미 사용 중인 포트가 있으면 자동으로 다른 포트로 실행됩니다.</li>
          <li><b>스타일 적용 오류</b>: Tailwind 설정이나 CSS 파일에 문제가 있을 수 있습니다. 설정 파일과 CSS 지시어를 확인하고, 서버를 재시작해보세요.</li>
          <li><b>의존성 문제</b>: 필요한 도구가 설치되지 않았을 때는 <b>npm install</b>을 실행하세요.</li>
        </ul>
      </section>

      <!-- 6. 학습 팁 -->
      <section :id="sections[5].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">6. 학습 팁</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li>처음엔 간단한 부품부터 만들어보세요.</li>
          <li>실제로 만들어보면서 익히는 것이 가장 좋습니다.</li>
          <li>공식 문서나 커뮤니티를 적극 활용하세요.</li>
        </ul>
      </section>

      <!-- 7. 포트(Port)란? -->
      <section :id="sections[6].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">7. 포트(Port)란?</h2>
        <p class="text-gray-700 mb-4">
          <b>포트</b>는 한 컴퓨터 안에서 여러 프로그램이 서로 구분해서 통신할 수 있게 해주는 "문 번호"입니다.<br>
          마치 아파트의 각 집(호수)처럼, 각 프로그램이 자신만의 문(포트 번호)을 사용합니다.
        </p>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>개발 서버를 실행하면</b> 보통 <b>3000번 포트</b>를 사용합니다.<br>
            만약 3000번이 이미 사용 중이면, 3001, 3002처럼 다른 빈 포트를 자동으로 찾아서 사용합니다.
          </li>
          <li>
            <b>브라우저 주소창에</b> <code class="bg-gray-100 px-2 py-1 rounded">http://localhost:3003</code>처럼 입력하면,<br>
            내 컴퓨터의 3003번 포트에서 실행 중인 웹사이트를 볼 수 있습니다.
          </li>
          <li>
            <b>확인할 수 있는 포트</b>란, 내가 만든 웹사이트가 현재 어느 포트(문 번호)에서 열려 있는지 의미합니다.<br>
            예를 들어, <b>3003번 포트</b>에서 열렸다면 <code class="bg-gray-100 px-2 py-1 rounded">http://localhost:3003</code>으로 접속하면 됩니다.
          </li>
        </ul>
      </section>

      <!-- 8. MCP와 Figma 연결하기 -->
      <section :id="sections[7].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">8. MCP와 Figma 연결하기</h2>
        <p class="text-gray-700 mb-4">
          <b>MCP</b>와 <b>Figma</b>를 연결하면, 디자이너가 만든 디자인을 개발자가 쉽게 코드로 변환할 수 있습니다.<br>
          마치 디자인 도면을 보고 집을 짓는 것처럼, Figma의 디자인을 보고 Vue 컴포넌트를 만들 수 있습니다.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 text-blue-600">🔗 연결 과정</h3>
        <ol class="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
          <li>
            <b>Figma 플러그인 설치</b><br>
            Figma에서 "MCP" 또는 "AI Assistant" 플러그인을 찾아서 설치합니다.
          </li>
          <li>
            <b>MCP 서버 설정</b><br>
            개발 환경에서 MCP 서버를 실행하고, Figma 플러그인에서 서버 주소를 입력합니다.
          </li>
          <li>
            <b>디자인 선택</b><br>
            Figma에서 코드로 변환하고 싶은 디자인 요소(버튼, 카드, 레이아웃 등)를 선택합니다.
          </li>
          <li>
            <b>코드 생성</b><br>
            AI가 선택된 디자인을 분석해서 Vue 컴포넌트와 Tailwind CSS 코드를 자동으로 생성합니다.
          </li>
        </ol>

        <h3 class="text-xl font-semibold mb-3 text-green-600">✨ 연결의 장점</h3>
        <ul class="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li><b>시간 절약</b>: 디자인을 보고 수동으로 코드를 작성하는 시간을 크게 줄일 수 있습니다.</li>
          <li><b>정확성 향상</b>: AI가 정확한 색상, 크기, 간격을 계산해서 코드로 변환합니다.</li>
          <li><b>일관성 유지</b>: 디자인 시스템의 일관성을 코드에서도 유지할 수 있습니다.</li>
          <li><b>협업 개선</b>: 디자이너와 개발자 간의 소통이 더욱 원활해집니다.</li>
        </ul>

        <h3 class="text-xl font-semibold mb-3 text-orange-600">⚠️ 주의사항</h3>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li>생성된 코드는 기본적인 구조만 제공하므로, 추가적인 수정과 개선이 필요할 수 있습니다.</li>
          <li>복잡한 애니메이션이나 인터랙션은 별도로 구현해야 할 수 있습니다.</li>
          <li>Figma 파일의 권한 설정을 확인하여 플러그인이 디자인에 접근할 수 있도록 해야 합니다.</li>
        </ul>
      </section>

      <!-- 9. 웹사이트 개발과 배포 -->
      <section :id="sections[8].id" class="mb-10">
        <h2 class="text-2xl font-bold mb-2">9. 웹사이트 개발과 배포</h2>
        <p class="text-gray-700 mb-4">
          개발한 웹사이트를 실제로 인터넷에 올려서 누구나 접속할 수 있게 만드는 과정입니다.<br>
          마치 집을 완성한 후에 주소를 알려서 사람들이 찾아올 수 있게 하는 것과 같습니다.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 text-blue-600">🌐 웹사이트 개발 과정</h3>
        <ol class="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
          <li>
            <b>기획 및 설계</b><br>
            웹사이트의 목적, 대상 사용자, 필요한 기능들을 정리합니다.
          </li>
          <li>
            <b>디자인</b><br>
            Figma 등으로 웹사이트의 모습을 디자인합니다.
          </li>
          <li>
            <b>개발</b><br>
            Vue, Tailwind 등을 사용해서 실제 웹사이트를 만듭니다.
          </li>
          <li>
            <b>테스트</b><br>
            Storybook과 실제 브라우저에서 웹사이트가 제대로 작동하는지 확인합니다.
          </li>
          <li>
            <b>배포</b><br>
            완성된 웹사이트를 인터넷에 올려서 누구나 접속할 수 있게 합니다.
          </li>
        </ol>

        <h3 class="text-xl font-semibold mb-3 text-green-600">🚀 배포 방법</h3>
        <ul class="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>
            <b>Vercel</b>: 가장 간단한 배포 방법으로, GitHub와 연결하면 자동으로 배포됩니다.<br>
            <code class="bg-gray-100 px-2 py-1 rounded">npm run build</code> 명령어로 빌드 후 배포
          </li>
          <li>
            <b>Netlify</b>: 무료 호스팅 서비스로, 드래그 앤 드롭으로도 배포 가능합니다.
          </li>
          <li>
            <b>GitHub Pages</b>: GitHub에서 제공하는 무료 호스팅 서비스입니다.
          </li>
          <li>
            <b>Firebase Hosting</b>: Google에서 제공하는 호스팅 서비스로, 빠른 속도를 제공합니다.
          </li>
        </ul>

        <h3 class="text-xl font-semibold mb-3 text-purple-600">📱 반응형 웹사이트</h3>
        <p class="text-gray-700 mb-4">
          <b>반응형 웹사이트</b>는 컴퓨터, 태블릿, 스마트폰 등 다양한 기기에서 잘 보이는 웹사이트입니다.
        </p>
        <ul class="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li><b>Tailwind CSS</b>의 반응형 클래스를 사용하면 쉽게 만들 수 있습니다.</li>
          <li><b>모바일 우선</b>으로 디자인하고, 큰 화면에 맞춰 확장하는 것이 좋습니다.</li>
          <li><b>터치 친화적</b>인 버튼 크기와 간격을 고려해야 합니다.</li>
          <li><b>빠른 로딩 속도</b>를 위해 이미지 최적화가 중요합니다.</li>
        </ul>

        <h3 class="text-xl font-semibold mb-3 text-orange-600">🔧 웹사이트 최적화</h3>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li><b>이미지 최적화</b>: 적절한 크기와 포맷으로 압축하여 로딩 속도를 개선합니다.</li>
          <li><b>코드 분할</b>: 필요한 부분만 로드하여 초기 로딩 시간을 단축합니다.</li>
          <li><b>캐싱</b>: 자주 사용되는 파일들을 브라우저에 저장하여 재방문 시 빠르게 로드합니다.</li>
          <li><b>SEO 최적화</b>: 검색 엔진에서 잘 찾을 수 있도록 메타 태그와 구조를 개선합니다.</li>
        </ul>
      </section>




    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sections = [
  {
    id: 'env',
    icon: '🛠️',
    title: '개발 환경이란?',
    description: '웹 개발을 위한 작업 공간의 개념'
  },
  {
    id: 'tools',
    icon: '🧩',
    title: '각 도구의 역할',
    description: 'Vue, Tailwind, Storybook, MCP의 역할'
  },
  {
    id: 'structure',
    icon: '📁',
    title: '폴더 구조 설명',
    description: '프로젝트 폴더와 파일의 역할'
  },
  {
    id: 'workflow',
    icon: '🚦',
    title: '개발 순서',
    description: '실제 개발이 진행되는 단계'
  },
  {
    id: 'troubleshoot',
    icon: '🩹',
    title: '자주 겪는 문제와 해결법',
    description: '초보자가 자주 만나는 문제와 해결 방법'
  },
  {
    id: 'tips',
    icon: '💡',
    title: '학습 팁',
    description: '효과적으로 배우는 방법'
  },
  {
    id: 'port',
    icon: '🚪',
    title: '포트(Port)란?',
    description: '포트의 개념과 확인 방법'
  },
  {
    id: 'mcp-figma',
    icon: '🎨',
    title: 'MCP와 Figma 연결하기',
    description: '디자인을 코드로 변환하는 방법'
  },
  {
    id: 'website',
    icon: '🌐',
    title: '웹사이트 개발과 배포',
    description: '웹사이트 제작부터 배포까지'
  }
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* 추가 스타일이 필요하면 여기에 작성 */
</style> 