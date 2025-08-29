import {
  ExpressjsIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
  DatabaseIcon,
  Mongodb,
  Postgresql,
  Prisma,
  Turborepo
} from '../utils/icons'

export const projects = [
  {
    priority: 1,
    title: 'turbo-tsconfig-gen',
    shortDescription: 'Published npm CLI tool that automates TypeScript configuration in Turborepo monorepos. Used by developers worldwide.',
    livePreview: 'https://www.npmjs.com/package/turbo-tsconfig-gen',
    type: 'Open Source ',
    siteAge: 'Published package',
  },
  {
    priority: 2,
    title: 'Canvas',
    shortDescription: 'Real-time collaborative drawing platform where multiple users can draw together in shared rooms, similar to Excalidraw.',
    livePreview: 'https://github.com/Dipxssi/canvas',
    type: 'Full-Stack App',
    siteAge: 'Active project',
  },
  {
    priority: 3,
    title: 'Payway',
    shortDescription: 'Full-stack digital wallet platform with secure payment processing, user authentication, and transaction management.',
    livePreview: 'https://github.com/Dipxssi/payway',
    type: 'Full-Stack App ',
    siteAge: 'Complete build',
  },
]


// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript and modern ORMs like Prisma.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
  {
    icon: DatabaseIcon,
    title : 'Database Development',
    shortDescription : 'Designing and implementing scalable databases with MongoDB and SQL solutions.'
  }
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
    {
    name: 'PostgreSQL',
    icon: Postgresql,
  },
  {
    name: 'MongoDB',
    icon: Mongodb,
  },
  {
    name: 'Turborepo',
    icon: Turborepo,
  },
  {
    name: 'Prisma',
    icon: Prisma,
  },
]


   export const themes = [
  {
    name: 'Light',
    colors: ['#ffffff', '#000000', '#ffffff', '#000000', '#000000'], 
  },
  {
    name: 'Dark', 
    colors: ['#000000', '#ffffff', '#000000', '#ffffff', '#ffffff'], 
  }
]


