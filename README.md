# Vue + Storybook + Tailwind + MCP 프로젝트

Vue 3, TypeScript, Storybook, Tailwind CSS, MCP(Model Context Protocol)를 사용한 컴포넌트 기반 개발 환경입니다.

## 🚀 기술 스택

- **Vue 3** - Progressive JavaScript Framework
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 개발 서버 및 빌드 도구
- **Storybook** - 컴포넌트 개발 및 문서화
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Vue Router** - 클라이언트 사이드 라우팅
- **MCP** - Model Context Protocol (Figma 연동)

## 📦 설치 및 실행

### 의존성 설치
```bash
npm install
```

### 자동 시작 (권장)
재부팅 후 자동으로 모든 서버를 시작하려면:
```bash
auto-start.bat
```

### 수동 시작
```bash
# MCP 서버들 시작
node MCP/figma-server.js &
node MCP/design-server.js &
node MCP/code-server.js &

# Vue 개발 서버 시작
npm run dev
```

### 개발 서버 실행
```bash
npm run dev
```
- **URL**: http://localhost:3000 (포트 고정)

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

## 🔧 MCP 설정

### MCP 서버 상태 확인
- **Figma MCP Server**: Figma 디자인 분석 및 변환
- **Design MCP Server**: 디자인 토큰 관리
- **Code MCP Server**: 코드 생성 및 최적화

### Figma 연동
1. MCP 서버들이 실행 중인지 확인
2. `/figma-import` 페이지에서 Figma URL 입력
3. 디자인을 Vue 컴포넌트로 자동 변환

### 설정 파일
- `prompt-config.json`: 프로젝트 설정 및 Figma 변환 프롬프트
- `vite.config.ts`: Vite 설정 (포트 3000 고정)
- `tailwind.config.js`: Tailwind CSS 설정

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
│   │   ├── MyPageView.vue  # My Page (Figma 연동)
│   │   ├── TokenStudio.vue # 토큰 스튜디오 페이지
│   │   └── FigmaImportView.vue # Figma 임포트 페이지
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
├── MCP/                    # MCP 서버들
│   ├── figma-server.js     # Figma MCP 서버
│   ├── design-server.js    # Design MCP 서버
│   └── code-server.js      # Code MCP 서버
├── .storybook/             # Storybook 설정
├── public/                 # 정적 파일
├── prompt-config.json      # 프로젝트 설정
├── auto-start.bat          # 자동 시작 스크립트
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

## 🎨 Figma 연동 (MCP)

### 주요 기능
- **Figma 디자인 분석**: Figma 링크를 통한 자동 디자인 분석
- **100% 정확한 변환**: 픽셀 퍼펙트 매칭으로 Vue 컴포넌트 생성
- **실시간 동기화**: Figma 변경사항을 실시간으로 반영
- **자동 컴포넌트 감지**: 아코디언, 스와이퍼, 탭 등 자동 감지
- **반응형 디자인**: 모바일/데스크톱 자동 대응

### 사용법
1. **MCP 서버 시작**: `auto-start.bat` 실행
2. **Figma 링크 입력**: `/figma-import` 페이지에서 Figma URL 입력
3. **자동 변환**: AI가 Figma 디자인을 분석하여 Vue 컴포넌트 생성
4. **실시간 미리보기**: 생성된 컴포넌트를 즉시 확인

### 변환 기준
- **색상 정확도**: 100% (HEX, RGB, HSL)
- **폰트 정확도**: 100% (패밀리, 크기, 두께, 행간)
- **간격 정확도**: 100% (px 단위)
- **레이아웃 정확도**: 100% (그리드, 정렬, 반응형)

## 🤝 협업 가이드

### 디자이너/기획자
- Figma에서 디자인 완성 후 링크 공유
- Storybook에서 컴포넌트의 다양한 상태 확인
- MCP를 통한 자동 코드 생성 활용

### 개발자
- MCP 서버 상태 확인 및 관리
- 생성된 코드 검토 및 최적화
- 새로운 컴포넌트 추가 시 스토리도 함께 작성

## 🛠️ 개발 팁

### 새 컴포넌트 추가
1. `src/components/`에 Vue 컴포넌트 생성
2. `src/stories/`에 스토리 파일 생성
3. JSDoc 주석으로 문서화
4. Storybook에서 확인

### Figma 연동 최적화
1. MCP 서버들이 정상 실행 중인지 확인
2. Figma 링크가 공개되어 있는지 확인
3. 디자인이 명확하고 구조화되어 있는지 확인

### Tailwind CSS 사용
- 유틸리티 클래스로 빠른 스타일링
- 컴포넌트별 커스텀 스타일은 computed 속성 활용
- 반응형 디자인은 Tailwind의 브레이크포인트 활용

## 📝 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (포트 3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run storybook` | Storybook 실행 |
| `auto-start.bat` | 모든 서버 자동 시작 |

## 🔄 재부팅 후 복구

재부팅 후 프로젝트를 다시 시작하려면:

1. **자동 시작**: `auto-start.bat` 실행
2. **수동 시작**: 
   ```bash
   # MCP 서버들 시작
   node MCP/figma-server.js &
   node MCP/design-server.js &
   node MCP/code-server.js &
   
   # Vue 개발 서버 시작
   npm run dev
   ```

## 📋 설정 파일

### prompt-config.json
- 프로젝트 기본 설정
- Figma 변환 프롬프트
- MCP 서버 상태
- 자동 시작 설정

### vite.config.ts
- 포트 3000 고정
- strictPort 옵션 활성화
- 빌드 최적화 설정

### tailwind.config.js
- 커스텀 색상 팔레트
- Figma 디자인 토큰 반영
- 반응형 브레이크포인트

## 🚨 문제 해결

### 포트 충돌
```bash
# 3000번 포트 사용 중인 프로세스 종료
netstat -ano | findstr :3000
taskkill /PID [PID번호] /F
```

### MCP 서버 오류
```bash
# 모든 Node.js 프로세스 종료 후 재시작
taskkill /f /im node.exe
auto-start.bat
```

### Tailwind CSS 오류
- `tailwind.config.js`에 필요한 색상이 정의되어 있는지 확인
- `bg-white`, `bg-black` 등 기본 색상 포함 확인 