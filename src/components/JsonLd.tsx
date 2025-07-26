export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "FingerLuck",
    "description": "여러 명이 동시에 화면을 터치하여 행운의 주인공을 공평하게 선택하는 재미있는 모바일 앱",
    "applicationCategory": "GameApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "256"
    },
    "author": {
      "@type": "Organization",
      "name": "FingerLuck Team"
    },
    "softwareVersion": "1.0.0",
    "screenshot": [
      "https://fingerluck.app/screenshots/home-screen.png",
      "https://fingerluck.app/screenshots/multi-touch-demo.png",
      "https://fingerluck.app/screenshots/animation-shark.png",
      "https://fingerluck.app/screenshots/settings-panel.png",
      "https://fingerluck.app/screenshots/dark-mode.png",
      "https://fingerluck.app/screenshots/winner-selection.png"
    ],
    "featureList": [
      "멀티 터치 인식 (최대 10명)",
      "6가지 애니메이션 효과",
      "당첨자 수 설정 가능",
      "다크모드 지원",
      "광고 없음",
      "개인정보 수집 없음"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}