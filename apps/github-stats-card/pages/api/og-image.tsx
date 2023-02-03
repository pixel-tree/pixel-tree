import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: "edge";
}

export const handler = (req: NextRequest) => {
  const { searchParams } = req.nextUrl

  const username = searchParams.get('username')
  // const show_icons = searchParams.get('show_icons')
  // const theme = searchParams.get('theme')
  // const include_all_commits = searchParams.get('include_all_commits')
  // const count_private = searchParams.get('count_private')

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}
      >
        <div style={{
          display: 'flex'
        }} >{username} has 100 stars</div>
      </div>
    ),
    {
      width: 600,
      height: 600
    }
  )
}

export default handler
