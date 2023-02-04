interface LangStats {
  totalStars: string
  totalCommits: string
  totalPRs: string
  totalIssues: string
  contributions: string
}

interface Lang {
  name: string
  langStats: LangStats
}

export const Langs: Lang[] = [
  {
    name: 'en',
    langStats: {
      totalStars: 'Total Stars',
      totalCommits: 'Total Commits',
      totalPRs: 'Total PRs',
      totalIssues: 'Total Issues',
      contributions: 'Contributions'
    }
  },
  {
    name: 'zh',
    langStats: {
      totalStars: '总 Star 数',
      totalCommits: '总提交数',
      totalPRs: '总 PR 数',
      totalIssues: '总 Issue 数',
      contributions: '贡献数'
    }
  },
  {
    name: 'es',
    langStats: {
      totalStars: 'Total de estrellas',
      totalCommits: 'Total de commits',
      totalPRs: 'Total de PRs',
      totalIssues: 'Total de issues',
      contributions: 'Contribuciones'
    }
  }
]
