import { Card } from '@/components/Card'
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
  const showIcons = searchParams.get('showIcons')
  const theme = searchParams.get('theme')
  const includeAllCommits = searchParams.get('includeAllCommits')
  const countPrivate = searchParams.get('countPrivate')

  const fontFile = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff')
  const fontData: ArrayBuffer = await fontFile.arrayBuffer()

  const svg = await satori(
    <Card username={username} showIcons={showIcons} theme={theme} includeAllCommits={includeAllCommits} countPrivate={countPrivate} />,
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
