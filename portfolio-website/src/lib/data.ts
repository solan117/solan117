import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Karan Solanki',
  title: 'Full-Stack Developer',
  subtitle: 'Problem Solver • Tech Enthusiast • Performance Optimizer',
  description: 'Building scalable web applications with React, JavaScript, Node.js & AWS. 4+ years of experience creating impact.',
  about: `I'm a Full-Stack SaaS Engineer who loves turning complex problems into elegant, 
    scalable web applications. I build with React, JavaScript, Node.js, and AWS, crafting both 
    frontend magic and robust backend systems. Currently, I'm creating impact at Blue Wave Labs 
    on the VerifyWise project, optimizing real-time workflows and building features that scale.`,
  
  skills: [
    // Frontend Development
    { name: 'React 18', category: 'Frontend', level: 95 },
    { name: 'JavaScript ES6+', category: 'Frontend', level: 90 },
    { name: 'TypeScript', category: 'Frontend', level: 85 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
    { name: 'Material UI', category: 'Frontend', level: 85 },
    { name: 'Vite', category: 'Frontend', level: 80 },
    { name: 'React Router', category: 'Frontend', level: 85 },
    { name: 'Shadcn UI', category: 'Frontend', level: 80 },
    
    // Backend Development
    { name: 'Node.js', category: 'Backend', level: 90 },
    { name: 'Express.js', category: 'Backend', level: 85 },
    { name: 'MongoDB', category: 'Backend', level: 80 },
    { name: 'PostgreSQL', category: 'Backend', level: 75 },
    { name: 'DynamoDB', category: 'Backend', level: 70 },
    { name: 'MySQL', category: 'Backend', level: 75 },
    
    // Cloud & DevOps
    { name: 'AWS', category: 'Cloud', level: 80 },
    { name: 'Vercel', category: 'Cloud', level: 85 },
    { name: 'Docker', category: 'Cloud', level: 75 },
    { name: 'Cloudinary', category: 'Cloud', level: 80 },
    { name: 'Sentry', category: 'Cloud', level: 70 },
    
    // Tools & Others
    { name: 'Redux', category: 'Tools', level: 85 },
    { name: 'TanStack Query', category: 'Tools', level: 80 },
    { name: 'Clerk', category: 'Tools', level: 75 },
    { name: 'Axios', category: 'Tools', level: 85 },
    { name: 'Jest', category: 'Tools', level: 75 },
    { name: 'React Testing Library', category: 'Tools', level: 70 },
  ],
  
  projects: [
    {
      id: 'food-recipe-app',
      title: 'Food Recipe App',
      description: 'A modern web app to explore delicious recipes with beautiful images, ingredient details, and cooking instructions. Built with React and powered by the Spoonacular API for comprehensive recipe data.',
      image: 'https://via.placeholder.com/400x250/2563eb/ffffff?text=Food+Recipe+App',
      technologies: ['React', 'Spoonacular API', 'CSS Modules'],
      githubUrl: 'https://github.com/solan117/food-app',
      liveUrl: 'https://food-app-phi-three.vercel.app/',
      features: [
        'Smart Recipe Search - Find recipes by ingredients, cuisine, or dietary preferences',
        'Responsive Design - Optimized for all devices and screen sizes',
        'High-Quality Images - Beautiful food photography for every recipe',
        'Detailed Instructions - Step-by-step cooking guidance',
        'Recipe Categories - Browse by cuisine type and dietary restrictions'
      ]
    },
    {
      id: 'klimate-weather-app',
      title: 'Klimate - Weather App',
      description: 'A sleek weather application built with React and TypeScript, featuring real-time weather updates, forecasts, and interactive data visualizations. Includes dark mode support and location-based weather detection.',
      image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Klimate+Weather+App',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeatherMap'],
      githubUrl: 'https://github.com/solan117/weather_app',
      liveUrl: 'https://weatherapp-psi-three.vercel.app/',
      features: [
        'Real-Time Weather Data - Current conditions and accurate forecasts',
        'Interactive Charts - Visual representation of weather trends using Recharts',
        'Dark/Light Mode - Toggle between themes for better user experience',
        'Favorite Locations - Save and quickly access frequently checked cities',
        '5-Day Forecasts - Extended weather predictions with hourly breakdowns',
        'Auto Location Detection - Geolocation API for instant local weather'
      ]
    },
    {
      id: 'job-portal-app',
      title: 'Job Portal Web Application',
      description: 'A comprehensive full-stack job portal that connects recruiters with job seekers through a modern, intuitive platform. Features secure authentication, real-time notifications, and advanced filtering capabilities.',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Job+Portal+App',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Clerk'],
      githubUrl: 'https://github.com/solan117/Job-Board',
      liveUrl: 'https://job-board-client-amber.vercel.app/',
      features: [
        'Job Posting Management - Create, edit, and manage job listings',
        'Candidate Filtering - Advanced search and filtering tools',
        'Application Tracking - Monitor application status and candidate progress',
        'Automated Notifications - Email updates for new applications',
        'Smart Job Search - Filter by location, salary, experience level',
        'Resume Upload - Secure document storage with Cloudinary',
        'Real-Time Updates - Live notifications and status changes',
        'Secure Authentication - Powered by Clerk with role-based access'
      ]
    }
  ],
  
  experience: [
    {
      company: 'Blue Wave Labs',
      position: 'Full-Stack Developer',
      duration: 'Aug 2025 - Current',
      description: 'Working on the VerifyWise project, optimizing real-time workflows and building scalable features.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB']
    },
    {
      company: 'The Adaptavist Group',
      position: 'Associate Developer',
      duration: 'Oct 2021 - Nov 2024',
      description: 'Developed and maintained enterprise applications, collaborated with cross-functional teams.',
      technologies: ['JavaScript', 'React', 'Java', 'Atlassian Stack']
    },
    {
      company: 'Arshon Silicon Technology',
      position: 'Software Developer',
      duration: 'Apr 2021 - Sep 2021',
      description: 'Built web applications and worked on various client projects.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      company: 'Concentrix Technologies',
      position: 'Technical Support Advisor',
      duration: 'Dec 2020 - Mar 2021',
      description: 'Provided technical support and troubleshooting for various software products.',
      technologies: ['Technical Support', 'Troubleshooting', 'Customer Service']
    }
  ],
  
  contact: {
    email: 'solankikaran090@gmail.com',
    linkedin: 'https://www.linkedin.com/in/solan117',
    github: 'https://github.com/solan117',
    portfolio: 'https://bluewavelabs.ca/'
  }
};