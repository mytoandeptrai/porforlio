import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Jacob - Frontend Engineer Portfolio'
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
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            display: 'flex',
            fontSize: 14,
            color: '#00ff00',
            fontFamily: 'monospace',
          }}
        >
          {'{} <> [] => // function() return;'}
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              marginBottom: 20,
              letterSpacing: '-2px',
            }}
          >
            JACOB
          </h1>

          {/* Title */}
          <div
            style={{
              fontSize: 36,
              color: '#00ff00',
              marginBottom: 40,
              fontFamily: 'monospace',
            }}
          >
            {'> Frontend Engineer'}
          </div>

          {/* Tech stack */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              fontSize: 24,
              color: '#888',
            }}
          >
            <span style={{ color: '#61DAFB' }}>React</span>
            <span style={{ color: '#fff' }}>•</span>
            <span style={{ color: '#000' }}>Next.js</span>
            <span style={{ color: '#fff' }}>•</span>
            <span style={{ color: '#3178C6' }}>TypeScript</span>
            <span style={{ color: '#fff' }}>•</span>
            <span style={{ color: '#F7DF1E' }}>Blockchain</span>
          </div>

          {/* Years */}
          <div
            style={{
              marginTop: 30,
              fontSize: 20,
              color: '#666',
              fontFamily: 'monospace',
            }}
          >
            4.5+ years of experience
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 18,
            color: '#555',
            fontFamily: 'monospace',
          }}
        >
          mytoandeptrai.online
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
