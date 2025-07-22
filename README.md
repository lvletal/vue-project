# Vue + Storybook + Tailwind CSS 프로젝트

Vue 3, TypeScript, Storybook, Tailwind CSS를 사용한 컴포넌트 기반 개발 환경입니다.

## 🚀 기술 스택

- **Vue 3** - Progressive JavaScript Framework
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 개발 서버 및 빌드 도구
- **Storybook** - 컴포넌트 개발 및 문서화
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Vue Router** - 클라이언트 사이드 라우팅
- **Pinia** - 상태 관리

## 📦 설치 및 실행

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
- **URL**: http://localhost:3000

### Storybook 실행
```bash
npm run storybook
```
- **URL**: http://localhost:6006

### 빌드
```bash
npm run build
```

### Storybook 빌드
```bash
npm run build-storybook
```

## 📁 프로젝트 구조

```
vue-project/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Button.vue      # 버튼 컴포넌트
│   │   ├── Card.vue        # 카드 컴포넌트
│   │   ├── ColorPalette.vue # 색상 팔레트 컴포넌트
│   │   ├── Swiper.vue      # 캐러셀 컴포넌트
│   │   ├── Chat.vue        # 채팅 컴포넌트
│   │   └── Avatar.vue      # 아바타 컴포넌트
│   ├── views/              # 페이지 컴포넌트
│   │   ├── HomeView.vue    # 홈 페이지
│   │   ├── ResponsivePage.vue # 반응형 페이지
│   │   ├── TokenStudio.vue # 토큰 스튜디오 페이지
│   │   └── PlusUsdtLanding.vue # PLUSUSDT 랜딩 페이지
│   ├── services/           # 서비스 레이어
│   │   └── figmaService.ts # Figma API 서비스
│   ├── router/             # 라우터 설정
│   │   └── index.ts
│   ├── stories/            # Storybook 스토리
│   │   ├── Button.stories.ts
│   │   ├── Card.stories.ts
│   │   ├── ColorPalette.stories.ts
│   │   ├── Swiper.stories.ts
│   │   ├── Chat.stories.ts
│   │   └── Avatar.stories.ts
│   ├── App.vue             # 메인 앱 컴포넌트
│   ├── main.ts             # 앱 진입점
│   └── style.css           # 전역 스타일 (Tailwind CSS)
├── .storybook/             # Storybook 설정
├── public/                 # 정적 파일
└── package.json
```

## 🎨 컴포넌트

### Button 컴포넌트
- **Variants**: primary, secondary, outline
- **Sizes**: sm, md, lg
- **States**: enabled, disabled

### Card 컴포넌트
- **Variants**: default, elevated, outlined
- **Slots**: header, default, footer

### ColorPalette 컴포넌트
- **Features**: 색상 팔레트 표시 및 선택
- **Props**: colors, selectedColor, onColorSelect

### Swiper 컴포넌트
- **Features**: 이미지 캐러셀/슬라이더
- **Props**: slides, autoplay, navigation

### Chat 컴포넌트
- **Features**: 실시간 채팅 인터페이스
- **Props**: messages, onSendMessage

### Avatar 컴포넌트
- **Features**: 사용자 아바타 표시 및 커스터마이징
- **Props**: src, alt, size, style

## 📚 Storybook 사용법

1. **컴포넌트 탐색**: 사이드바에서 원하는 컴포넌트 선택
2. **Props 조정**: Controls 패널에서 실시간으로 props 변경
3. **문서 확인**: Docs 탭에서 컴포넌트 사용법 및 API 확인
4. **상호작용 테스트**: Actions 패널에서 이벤트 확인

## 🎨 Token Studio (Figma 연동)

### 주요 기능
- **Figma API 연동**: Figma 파일에서 디자인 토큰 자동 추출
- **실시간 동기화**: Figma 변경사항을 실시간으로 반영
- **토큰 관리**: 색상, 타이포그래피, 간격 토큰 편집
- **라이브 미리보기**: 토큰 변경사항을 즉시 확인
- **JSON 내보내기**: 디자인 토큰을 JSON 형태로 내보내기

### 사용법
1. **Figma 연결**: `/token-studio` 페이지에서 "Connect Figma" 클릭
2. **토큰 동기화**: "Sync with Figma" 버튼으로 최신 토큰 가져오기
3. **토큰 편집**: 각 토큰 옆 편집 버튼으로 값 수정
4. **내보내기**: "Export Tokens" 버튼으로 JSON 파일 다운로드

### API 설정
실제 Figma API 사용을 위해서는:
- Figma Personal Access Token 필요
- Figma 파일 키 필요
- CORS 설정 필요

### 컴포넌트 구조
```
TokenStudio/
├── Header (연결 상태, 동기화 버튼)
├── Connection Status (Figma 연결 상태)
├── Token Categories (색상, 타이포그래피, 간격)
├── Live Preview (실시간 미리보기)
├── Token Editor (토큰 편집 폼)
└── Sync Status (동기화 상태)
```

## 🤝 협업 가이드

### 디자이너/기획자
- Storybook에서 컴포넌트의 다양한 상태 확인
- Controls 패널에서 원하는 조합 찾기
- 결정된 props 조합을 개발자에게 전달

### 개발자
- Storybook에서 컴포넌트 동작 확인
- 전달받은 props 조합을 실제 코드에 반영
- 새로운 컴포넌트 추가 시 스토리도 함께 작성

## 🛠️ 개발 팁

### 새 컴포넌트 추가
1. `src/components/`에 Vue 컴포넌트 생성
2. `src/stories/`에 스토리 파일 생성
3. JSDoc 주석으로 문서화
4. Storybook에서 확인

### Tailwind CSS 사용
- 유틸리티 클래스로 빠른 스타일링
- 컴포넌트별 커스텀 스타일은 computed 속성 활용
- 반응형 디자인은 Tailwind의 브레이크포인트 활용

## 📝 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run storybook` | Storybook 개발 서버 |
| `npm run build-storybook` | Storybook 빌드 |

## 🔧 설정 파일

- `vite.config.ts` - Vite 설정
- `tailwind.config.js` - Tailwind CSS 설정
- `postcss.config.js` - PostCSS 설정
- `tsconfig.json` - TypeScript 설정
- `.storybook/` - Storybook 설정

## 📄 라이선스

MIT License 

# Vercel 배포 안내

## 1. Vue 앱(Vite) 배포
1. `npm run build` 실행
2. Vercel에서 새 프로젝트 생성
3. Output Directory를 `dist`로 지정
4. 배포 후 Production URL로 접속

## 2. Storybook 배포
1. `npm run build-storybook` 실행
2. Vercel에서 새 프로젝트 생성 (또는 별도 배포)
3. Output Directory를 `storybook-static`으로 지정
4. 배포 후 Production URL로 접속

## 참고
- 두 프로젝트 모두 별도 URL로 외부에서 접근 가능
- SPA 라우팅을 위해 `vercel.json` 유지
- 환경변수 필요시 Vercel 대시보드에서 추가 

# 한 프로젝트에서 Vue와 Storybook 동시 배포 (Vercel)

## 빌드 및 배포 방법
1. `npm run build` 실행 (Vue 앱 빌드)
2. `npm run build-storybook` 실행 (Storybook 빌드)
3. Vercel Output Directory는 `dist`로 지정
4. `vercel.json`의 rewrite 규칙으로 `/storybook` 경로는 자동으로 `storybook-static` 폴더에서 서빙됨
5. 배포 후:
   - `/` : Vue 앱
   - `/storybook` : Storybook

## 주의
- 두 빌드 결과물이 모두 포함된 상태로 배포해야 함
- SPA 라우팅 및 Storybook 라우팅 모두 정상 동작 