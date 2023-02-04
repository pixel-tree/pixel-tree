interface CardProps {
  username: string | null
  showIcons: string | null
  theme: string | null
  includeAllCommits: string | null
  countPrivate: string | null
}

export const Card = ({
  username,
  showIcons,
  theme,
  includeAllCommits,
  countPrivate
}: CardProps) => {
  return (
        <div
  style={{
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(80.89deg, #17141E 36.54%, #122818 96.35%)',
    fontSize: 60,
    letterSpacing: -2,
    fontWeight: 700,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#f5f5f5',
    borderWidth: 2
  }}
  >
  <div
    style={{
      color: '#f5f5f5',
      fontFamily: 'Inter Latin',
      fontSize: 32,
      letterSpacing: -2
    }}
  >
    {username}
  </div>
  <div>
  </div>
</div>
  )
}
