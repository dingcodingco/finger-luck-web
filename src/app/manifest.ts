import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FingerLuck - 누가 행운의 주인공일까?',
    short_name: 'FingerLuck',
    description: '여러 명이 동시에 화면을 터치하여 행운의 주인공을 공평하게 선택하는 재미있는 모바일 앱',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366F1',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}