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
    <div className="flex flex-col md:flex-row justify-center items-center w-full p-8 bg-foreground text-background">
      <aside className="flex gap-2 md:gap-0 md:flex-col justify-center h-full">
        {showcaseItems.map((item) => (
          <Link
            key={item.id}
            href={`/showcase?id=${item.id}`}
          >
            {item.title}
          </Link>
        ))}
      </aside>
      <main className="flex-1 h-full">
        {selectedId ? (
          <div className="flex justify-center flex-col h-full">
            <Link
              href={showcaseItems.find((item) => item.id === selectedId)!.link}
              className="text-blue-500 hover:underline text-lg"
              target="_blank"
            >
              {showcaseItems.find((item) => item.id === selectedId)!.title}
            </Link>
            <p>
              {
                showcaseItems.find((item) => item.id === selectedId)!
                  .description
              }
            </p>
            <div className="relative w-full h-[500px]">
              <Image
                src={
                  showcaseItems.find((item) => item.id === selectedId)!.imageUrl
                }
                alt="Showcase Image"
                fill
                className="object-contain object-top" // atau object-contain
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p className="opacity-50">Please select an item from the list.</p>
          </div>
        )}
      </main>
    </div>
  );
}
