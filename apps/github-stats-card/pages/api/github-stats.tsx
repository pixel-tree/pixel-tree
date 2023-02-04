import { NextRequest } from 'next/server'
import satori from 'satori'

export const config = {
  runtime: 'edge'
}

const height = 230
const width = 630

export const fetcher = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl
  const username = searchParams.get('username')

  if (!username && username !== null) {
    return new Response('Missing username', {
      status: 400
    })
  }
  const fontFile = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff')
  const fontData: ArrayBuffer = await fontFile.arrayBuffer()

  const card = <div
  style={{
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
    fontSize: 60,
    letterSpacing: -2,
    fontWeight: 700,
    textAlign: 'center'
  }}
  >
  <div
    style={{
      backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
      backgroundClip: 'text',
      color: 'transparent'
    }}
  >
    {username}
  </div>
</div>

  const svg = await satori(
    card,
    {
      width,
      height,
      fonts: [
        {
          name: 'Inter Latin',
          data: fontData,
          style: 'normal'
        }
      ]

    }
  )

  return new Response(svg, {
    headers: {
      'content-type': 'image/svg+xml'
    }
  })
}

export default fetcher
