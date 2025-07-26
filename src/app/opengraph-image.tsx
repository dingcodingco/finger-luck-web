import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'FingerLuck - 누가 행운의 주인공일까?'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #6366F1, #8B5CF6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 'bold', marginBottom: 20 }}>FingerLuck</div>
        <div style={{ fontSize: 48 }}>누가 행운의 주인공일까?</div>
      </div>
    ),
    {
      ...size,
    }
  )
}