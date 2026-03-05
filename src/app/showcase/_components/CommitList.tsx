type Commit = {
  sha: string
  commit: { message: string; author: { date: string } }
}

export default async function CommitList({ repoPath }: { repoPath: string }) {
  const res = await fetch(`https://api.github.com/repos/${repoPath}/commits`, {
    next: { revalidate: 3600 }, // cache 1 jam
  })
  const commits: Commit[] = await res.json()

  return (
    <ul className="text-xs opacity-70 h-14 overflow-y-auto flex flex-col">
      {commits.map((c) => (
        <li key={c.sha}>
          <span className="opacity-50">{c.sha.slice(0, 7)}</span>{' '}
          {c.commit.message.split('\n')[0]}
        </li>
      ))}
    </ul>
  )
}