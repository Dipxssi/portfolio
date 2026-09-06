import {
  ExpressjsIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TypescriptIcon,
  DatabaseIcon,
  Mongodb,
  Postgresql,
  Prisma,
  Turborepo,
  PythonIcon,
  LlmIcon,
  AgenticAiIcon,
} from '../utils/icons'

export const projects = [
  {
    priority: 1,
    title: 'NanoTerminal',
    shortDescription:
      'Autonomous terminal agent with Gemini tool calling, adaptive dual-loop memory (MemCon + Lychee), safety guardrails, and Harbor / Terminal-Bench evaluation.',
    livePreview: 'https://github.com/Dipxssi/Nanoterminal',
    type: 'Agentic AI Agent',
    siteAge: 'Active project',
  },
  {
    priority: 2,
    title: 'AI Interviewer',
    shortDescription:
      'Mercor-style live voice interview MVP: resume/GitHub intake, cascaded ASR -> Groq interviewer -> TTS, barge-in, and a session state machine over WebSockets.',
    livePreview: 'https://github.com/Dipxssi/AI-interviwer',
    type: 'Voice AI MVP',
    siteAge: 'Active project',
  },
  {
    priority: 3,
    title: 'Canvas',
    shortDescription:
      'Real-time collaborative drawing platform where multiple users can draw together in shared rooms, similar to Excalidraw.',
    livePreview: 'https://github.com/Dipxssi/canvas',
    type: 'Full-Stack App',
    siteAge: 'Active project',
  },
]

export const experienceData = [
  {
    company: 'DigiNow Solutions',
    arrangement: 'Internship · Remote · 1 yr',
    roles: [
      {
        title: 'Full Stack Intern',
        period: 'Jul 2026 – Present',
        bullets: [
          'Building and shipping full-stack features across frontend and backend',
          'Integrated LLMs into the product to power intelligent workflows and features',
          'Collaborating remotely on product work end-to-end',
        ],
      },
      {
        title: 'Web Development Intern',
        period: 'Oct 2025 – Jun 2026',
        location: 'Kenya',
        bullets: [
          'Developed and maintained web interfaces and application features',
          'Worked with modern web stacks in a remote internship setting',
        ],
      },
    ],
  },
]

// Service Data
export const serviceData = [
  {
    icon: AgenticAiIcon,
    title: 'Agentic AI Systems',
    shortDescription:
      'Designing tool-calling agents with memory, safety guardrails, and evaluation pipelines.',
  },
  {
    icon: ReactIcon,
    title: 'Full-Stack Product Engineering',
    shortDescription:
      'Shipping end-to-end products with React, Next.js, and Node.js from UI to API.',
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
    shortDescription:
      'Ensuring robust and maintainable code with TypeScript and modern ORMs like Prisma.',
  },
  {
    icon: LlmIcon,
    title: 'LLM Integration',
    shortDescription:
      'Integrating Gemini, Groq, and voice pipelines into real products with structured outputs.',
  },
  {
    icon: DatabaseIcon,
    title: 'Database Development',
    shortDescription:
      'Designing and implementing scalable databases with MongoDB and SQL solutions.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'Python',
    icon: PythonIcon,
  },
  {
    name: 'Gemini / LLMs',
    icon: LlmIcon,
  },
  {
    name: 'Agentic AI',
    icon: AgenticAiIcon,
  },
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
  },
]
