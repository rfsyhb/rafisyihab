type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  urgency: string;
  imageUrl: string;
  link: string;
  stack: string[];
  status: 'live' | 'archived' | 'wip';
  githubUrl?: string;
};

export const items: ShowcaseItem[] = [
  {
    id: '1',
    title: 'Growthy',
    description:
      'Productivity app to helps manage tasks, projects, goals, timer, and take notes. It also gives insights based on the user data.',
    urgency:
      'Managing productivity often requires switching between multiple apps for tasks, projects, goals, timers, and notes. This fragmented workflow makes it harder to stay organized and maintain focus. In addition, most tools only store user data but do not analyze it to provide meaningful insights about work habits. Therefore, a unified system that both manages productivity activities and generates insights from user behavior can help people better understand and improve how they work.',
    imageUrl: '/images/growthy.png',
    link: 'https://growthy-app.vercel.app',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'TanStack Query',
      'Zod',
      'React Hook Form',
      'Zustand',
    ],
    status: 'live',
  },
  {
    id: '2',
    title: 'DnFarm',
    description:
      'A helper app for farming in Dragon Nest Classic; profit tracking and item price database.',
    urgency:
      'Tracking farming profit and maintaining an up-to-date item price database in spreadsheets quickly becomes tedious. Prices frequently change and updating tables manually requires constant editing, restructuring, and recalculating formulas. This makes the workflow inefficient and error-prone. Therefore, I built a small app to centralize item prices and automatically calculate farming profits.',
    imageUrl: '/images/dnfarm.png',
    link: 'https://sensodeyn.vercel.app',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'TanStack Query',
      'Zustand',
    ],
    status: 'live',
    githubUrl: 'https://github.com/rfsyhb/dnfarm',
  },
  {
    id: '3',
    title: 'Focus',
    description:
      'A simple Pomodoro timer and todo list for personal use.',
    urgency:
      'Traditional Pomodoro timers with rigid intervals can sometimes disrupt focus. Research suggests that humans naturally work best in certain blocks of time where focus and productivity peak, followed by periods that are better suited for rest or lighter activities. Using a timer alone without clear goals or a task list is often not enough to support consistent productivity. Therefore, a tool that combines time blocking with a structured todo system and self-monitoring can better maintain focus and create a sense of urgency.',
    imageUrl: '/images/focus.png',
    link: 'https://a-leap-of-faith.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    status: 'live',
    githubUrl: 'https://github.com/rfsyhb/nextlearn-focus',
  },
];
