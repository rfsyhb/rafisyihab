import Link from 'next/link';

export default function Home() {
  const linkItems = [
    { name: 'GitHub', href: 'https://github.com/rfsyhb' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rfsyhb/' },
  ];

  return (
    <div className="font-mono bg-foreground text-background flex-1 items-center justify-center flex">
      <section className="border border-dashed p-6 max-w-120 flex flex-col gap-4">
        <header>
          <p className="text-xs uppercase tracking-[0.25rem] opacity-60">
            Profile
          </p>
          <h1 className="text-xl">Rafi Syihab</h1>
          <p className="text-sm opacity-70">Early-career fullstack developer</p>
        </header>

        <section className="text-sm">
          <p>
            Fresh graduate in Informatics Engineering from the University of
            Palangka Raya; Still trying to leave the average category.
          </p>
        </section>

        <nav aria-label="Social links">
          <p className="opacity-60">Elsewhere</p>
          <ul className="flex gap-4">
            {linkItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  );
}

