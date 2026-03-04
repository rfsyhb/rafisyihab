type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export const items: ShowcaseItem[] = [
  {
    id: '1',
    title: 'Growthy',
    description:
      'Productivity app that helps manage tasks, projects, timer, notes, and get insights on your productivity',
    imageUrl: '/images/growthy.png',
    link: 'https://growthy-app.vercel.app',
  },
  {
    id: '2',
    title: 'DN Farm Helper',
    description: 'A helper app for farming in Dragon Nest',
    imageUrl: '/images/dnfarm.png',
    link: 'https://sensodeyn.vercel.app',
  },
  {
    id: '3',
    title: 'Focus',
    description:
      'A simple Pomodoro timer for personal use, with time block and task management features',
    imageUrl: '/images/focus.png',
    link: 'https://a-leap-of-faith.vercel.app',
  },
];
