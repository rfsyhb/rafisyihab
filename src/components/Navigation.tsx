'use client';
import { House, Images } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Home', href: '/', icon: House },
    { name: 'Showcase', href: '/showcase', icon: Images },
  ];
  const isCurrent = (href: string) => pathname === href;
  return (
    <section className="fixed top-2 left-0 w-full flex justify-center z-50">
      <nav>
        <ul className="flex flex-row gap-2 rounded-full bg-background/80 px-3 shadow-lg backdrop-blur">
          {navigationItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center"
            >
              <button
                className={`px-2 py-1 rounded-full hover:bg-foreground/10 text-sm cursor-pointer${
                  isCurrent(item.href) ? ' bg-foreground/10' : ''
                }`}
              >
                <item.icon />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
