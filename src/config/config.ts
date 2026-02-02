// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Keerthana v',
    title: 'BA ECONOMICS',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'I am a BA Economics student based in Bangalore, India, with a strong interest in public policy, development economics, and applied economic analysis.\n' +
      '\n' +
      'My academic work focuses on real-world economic issues such as employment, inflation, and income inequality, supported by coursework, presentations, and research-based assignments.\n' +
      '\n' +
      'I am building skills in economic research, policy evaluation, and basic data analysis, with a growing interest in evidence-based decision making.' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'Economics student exploring public policy and development.',
    location: 'Bangalore, India',
  },

 

 navigation: [
  { name: 'Home', url: '/' },
  { name: 'BA ECONOMICS', url: '/education' },
  { name: '9686567529t', url: '/contact' },
],

blogs: [], // TODO ADDED THIS
  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
 
education: [
  {
    institution: 'Christ University',
    degree: 'BA Economics',
    year: '2024 – Present',
    image: getAsset('images/education/placeholder.png'),
  },
],


contact: {
  email: 'vijaykeerthana@gmail.com',
},

};

export default siteConfig;
