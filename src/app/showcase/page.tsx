import { items } from '@/libs/showcaseItems';
import Image from 'next/image';
import Link from 'next/link';

export default async function ShowcasePage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id: selectedId } = await searchParams;
  const showcaseItems = items;

  return (
    <div className="font-mono flex flex-col md:flex-row justify-center items-center w-full p-1 md:p-8 bg-foreground text-background md:gap-2">
      <aside className="mt-10 md:mt-0 flex min-w-26 gap-2 md:gap-0 md:flex-col justify-center md:h-full">
        {showcaseItems.map((item) => (
          <Link
            key={item.id}
            href={`/showcase?id=${item.id}`}
            className={`${item.id === selectedId ? 'font-bold' : ''} hover:underline`}
          >
            {item.id === selectedId && <span>&gt; </span>}
            {item.title}
          </Link>
        ))}
      </aside>
      <main className="flex-1 w-full flex border border-text rounded-2xl p-2 shadow-lg">
        {selectedId ? (
          <div className="flex flex-col md:flex-row h-full w-full gap-2 md:gap-0">
            <div className="order-2 md:order-1 flex flex-col gap-1 flex-1">
              {/* Title */}
              <div className="flex flex-row items-center gap-2">
                <Link
                  href={
                    showcaseItems.find((item) => item.id === selectedId)!.link
                  }
                  className="text-blue-500 hover:underline text-lg md:text-2xl w-fit"
                  target="_blank"
                >
                  {showcaseItems.find((item) => item.id === selectedId)!.title}
                </Link>
                <span className="text-background text-xs md:text-sm opacity-70">
                  web status:{' '}
                  {showcaseItems.find((item) => item.id === selectedId)!.status}
                </span>
              </div>
              {/* Description */}
              <p className="text-sm md:text-base">
                {
                  showcaseItems.find((item) => item.id === selectedId)!
                    .description
                }
              </p>
              {/* Urgency */}
              <div className="p-1 border border-text rounded-md bg-background/10 relative">
                <div className="absolute top-0 right-0 -translate-y-2/3 -translate-x-1/4 bg-foreground text-background text-xs px-1 rounded border">
                  <span>urgency</span>
                </div>
                <p className="text-xs md:text-sm">
                  {
                    showcaseItems.find((item) => item.id === selectedId)!
                      .urgency
                  }
                </p>
              </div>
              {/* Tech Stack */}
              <div className="flex gap-1 flex-wrap">
                {showcaseItems
                  .find((item) => item.id === selectedId)!
                  .stack.map((tech, index, arr) => (
                    <span
                      key={tech}
                      className="bg-foreground text-background text-xs md:text-sm opacity-70"
                    >
                      {tech}
                      {index < arr.length - 1 ? ',' : ''}
                    </span>
                  ))}
              </div>
              {/* Github Url (Repository) */}
              {showcaseItems.find((item) => item.id === selectedId)!
                .githubUrl && (
                <Link
                  href={
                    showcaseItems.find((item) => item.id === selectedId)!
                      .githubUrl!
                  }
                  className="text-blue-500 hover:underline text-sm md:text-base w-fit"
                  target="_blank"
                >
                  View on GitHub
                </Link>
              )}
            </div>
            {/* Image */}
            <div className="order-1 md:order-2 md:w-1/2 shrink-0 flex justify-center items-center">
              <Image
                src={
                  showcaseItems.find((item) => item.id === selectedId)!.imageUrl
                }
                alt="Showcase Image"
                width={400}
                height={300}
                className="object-contain max-h-full w-auto"
                loading="eager"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center w-full">
            <p className="opacity-60">Please select an item from the list.</p>
          </div>
        )}
      </main>
    </div>
  );
}
