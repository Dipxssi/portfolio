import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AI & FULL-STACK ENGINEER'

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
          background: '#000000',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}>
        <h1 style={{ fontSize: 32, color: 'white', margin: 0 }}>
          Dipsha Das | AI & Full-Stack Engineer
        </h1>
        <h2 style={{ fontSize: 40, color: 'white', marginTop: 30 }}>
          Building agents. Shipping full-stack.
        </h2>
      </div>
    ),
    {
      ...size,
    },
  )
}
