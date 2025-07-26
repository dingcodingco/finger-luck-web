# FingerLuck Landing Page

FingerLuck 앱의 공식 랜딩 페이지입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Deployment**: Vercel

## 주요 기능

- 반응형 디자인 (모바일 우선)
- 다크모드 지원
- 한국어/영어 전환 (개인정보 처리방침)
- SEO 최적화
- 부드러운 스크롤 애니메이션
- 스크린샷 갤러리 with 라이트박스

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm start
```

## 환경 변수

`.env.example` 파일을 참고하여 `.env.local` 파일을 생성하세요:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://fingerluck.app
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/fingerluck
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.fingerluck
```

## 배포

이 프로젝트는 Vercel에 최적화되어 있습니다:

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 환경 변수 설정
4. 배포

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   ├── privacy/
│   │   └── page.tsx        # 개인정보 처리방침
│   └── opengraph-image.tsx # OG 이미지 생성
├── components/
│   ├── Header.tsx          # 네비게이션 헤더
│   ├── HeroSection.tsx     # 히어로 섹션
│   ├── FeaturesSection.tsx # 기능 소개
│   ├── UseCasesSection.tsx # 사용 사례
│   ├── ScreenshotsSection.tsx # 스크린샷 갤러리
│   ├── CTASection.tsx      # 다운로드 유도
│   ├── Footer.tsx          # 푸터
│   └── JsonLd.tsx          # SEO 구조화 데이터
└── i18n/
    ├── request.ts          # i18n 설정
    └── messages/
        ├── ko.json         # 한국어 번역
        └── en.json         # 영어 번역
```

## 라이선스

© 2025 FingerLuck. All rights reserved.