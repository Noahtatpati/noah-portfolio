export type Screenshot = {
  title: string;
  caption: string;
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  status: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: { title: string; description: string }[];
  screenshots: Screenshot[];
  technologies: { category: string; items: string[] }[];
  techList: string[];
  challenges: { problem: string; solution: string }[];
  lessons: string[];
  image: string;
  github?: string;
  demo?: string;
};

export const resume = {
  name: 'Noah Mohandas Tatpati',
  email: 'nmtatpati@gmail.com',
  phone: '+91-9482804733',
  location: 'Hubballi, Karnataka, India',
  linkedin: 'https://linkedin.com/in/noahtatpati',
  github: 'https://github.com/Noahtatpati',
  summary:
    'BCA student with hands-on experience developing AI-assisted applications and experimenting with prompt design, conversational AI, and Generative AI tools. Project experience includes customer support, meeting summarization, and AI-powered content creation. Seeking paid roles involving AI prompting, response evaluation, AI training, or conversational AI.',
  education: [
    {
      program: 'Bachelors of Computer Application',
      institution: 'KLE Tech University',
      timeline: 'Expected 2028',
      details: 'Semester I: 7.31 SGPA • Semester II: 7.50 SGPA'
    }
  ],
  skills: {
    aiTools: ['ChatGPT', 'Claude', 'Gemini', 'OpenCode'],
    prompting: ['Prompt Writing', 'Instruction Design', 'Prompt Iteration'],
    aiApplications: ['Generative AI', 'Chatbots', 'AI Assistants'],
    programming: ['Python', 'JavaScript', 'SQL'],
    developmentTools: ['VS Code', 'Git', 'GitHub', 'Jenkins']
  },
  experience: [
    {
      role: 'Data Science Intern at Elevance Skills',
      timeline: 'Sep 2026 – Oct 2026',
      highlights: ['Completed a one-month Data Science internship.', 'Worked on data analysis and data science tasks.']
    },
    {
      role: 'Artificial Intelligence Intern at Bireena Infotech',
      timeline: 'Mar 2026 – Jul 2026',
      link: 'https://github.com/BireenaInfotech/Bireena-Medico',
      highlights: ['Contributed to Bireena Medico, an AI-powered healthcare project.', 'Four-month internship.', 'Worked on AI and prompting contributions.']
    },
    {
      role: 'Artificial Intelligence Intern at AICTE / Edunet Foundation',
      timeline: 'May 2026 – Jun 2026',
      highlights: ['Completed a six-week AI internship program.', 'Program delivered with AICTE and implemented by Edunet Foundation.']
    },
    {
      role: 'AI Internship / Project-Based Learning at Unlox',
      timeline: 'Dec 2025 – Feb 2026',
      link: 'https://github.com/Noahtatpati/formix',
      highlights: ['Worked on an AI Gym Assistant.', 'Focused on prompt design and AI interaction workflows.']
    }
  ],
  achievements: [
    'PromptWars Virtual – Challenge 1: Submitted a Generative AI solution; received a certificate of appreciation.',
    'Google Cloud Gen AI Academy APAC: Completed the program.',
    'IBM Bobathon: Completed the three-hour "The Legacy Fix" project challenge.',
    'AI for All: Completed AI Aware and AI Appreciate.',
    'Forage Job Simulations: HPE Software Engineering, Walmart Global Tech Advanced Software Engineering, Electronic Arts Software Engineering, Skyscanner Software Engineering, Deloitte Technology, and Data Science.',
    'Economic Times Hackathon 2026 – Participant'
  ],
  leadership: [
    'Collaborated with multidisciplinary teams during internships, hackathons, and AI projects.',
    'Demonstrated initiative by continuously building AI projects and participating in industry-focused learning programs.'
  ]
};

export const projects: Project[] = [
  {
    slug: 'trustnow',
    title: 'TrustNow',
    subtitle: 'National Digital Public Safety Intelligence Platform',
    description:
      'TrustNow is an AI-powered public safety platform designed to assist in detecting scams, counterfeit currency, fraud networks, and emerging digital threats through an integrated investigative interface.',
    category: 'Generative AI • Public Safety • Cybersecurity',
    status: 'Completed',
    overview:
      'TrustNow is a comprehensive public safety intelligence platform that consolidates multiple investigative tools into a single, unified interface. Built during the Economic Times Hackathon 2026, it addresses the growing challenge of digital fraud in India by providing citizens and investigators with AI-powered tools for scam detection, counterfeit currency verification, geographic threat monitoring, and fraud network analysis.',
    problem: 'Digital fraud investigations are fragmented across multiple tools. Citizens and investigators often need separate systems for scam detection, counterfeit analysis, fraud intelligence, and geographic threat monitoring. This slows investigations and makes information difficult to correlate.',
    solution: 'TrustNow centralizes multiple public safety capabilities into one platform. The application combines AI-assisted scam detection, counterfeit currency verification, geographic threat visualization, fraud network mapping, and intelligence briefings inside a unified dashboard.',
    keyFeatures: [
      { title: 'Today\'s Brief', description: 'An AI-curated dashboard showing ongoing incidents, recent intelligence, and priority alerts for quick situational awareness.' },
      { title: 'Threat Map', description: 'Live geographic visualization of threat locations across India, enabling investigators to identify regional patterns.' },
      { title: 'Scam Detector', description: 'Multi-input analyzer for phone numbers, websites, UPI IDs, emails, SMS, and calls using AI to detect scam indicators.' },
      { title: 'Counterfeit Scanner', description: 'Computer vision analysis of currency images that evaluates security features to detect counterfeit notes.' },
      { title: 'Fraud Network Intelligence', description: 'Relationship graph visualizing connections between people, organizations, accounts, and devices involved in investigations.' }
    ],
    screenshots: [
      { title: 'Today\'s Brief', caption: 'Provides an overview of ongoing incidents and important intelligence.', image: '/assets/images/trustnow/today-brief.png' },
      { title: 'Threat Map', caption: 'Displays live geographic threat locations across India.', image: '/assets/images/trustnow/threat-map.png' },
      { title: 'Scam Detector', caption: 'Allows users to analyze suspicious phone numbers, websites, UPI IDs, emails, SMS messages, and phone calls.', image: '/assets/images/trustnow/scam-detector.png' },
      { title: 'Counterfeit Currency Scanner', caption: 'Analyzes uploaded currency images and evaluates security features to detect counterfeit notes.', image: '/assets/images/trustnow/counterfeit-currency-scanner.png' },
      { title: 'Fraud Network Intelligence', caption: 'Visualizes relationships between people, organizations, accounts, and devices involved in investigations.', image: '/assets/images/trustnow/fraud-network.png' }
    ],
    technologies: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['FastAPI'] },
      { category: 'AI', items: ['OpenAI APIs', 'Prompt Engineering', 'Computer Vision'] },
      { category: 'Maps', items: ['Leaflet'] }
    ],
    techList: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'OpenAI APIs', 'Prompt Engineering', 'Computer Vision', 'Leaflet'],
    challenges: [
      { problem: 'Integrating multiple AI models for different detection tasks (scam, counterfeit, fraud) required managing different response formats and latency profiles.', solution: 'Built a unified AI orchestration layer that normalizes responses and handles timeouts gracefully, with fallback mechanisms for each detection module.' },
      { problem: 'Rendering real-time threat locations on a map while maintaining performance across thousands of data points.', solution: 'Used Leaflet with marker clustering and viewport-based rendering to keep the map responsive regardless of data volume.' }
    ],
    lessons: [
      'Designing for public safety requires careful consideration of false positive rates and confidence thresholds.',
      'A unified data model across different investigative modules made cross-referencing threats significantly easier.',
      'Hackathon time constraints forced prioritization of core detection accuracy over visual polish, which was the right call.'
    ],
    image: '/assets/images/trustnow/today-brief.png',
    github: 'https://github.com/Noahtatpati/TrustNow-National-Digital-Public-Safety-Intelligence-Platform'
  },
  {
    slug: 'cadence',
    title: 'Cadence',
    subtitle: 'AI Meeting Assistant',
    description:
      'Cadence is an AI-powered meeting assistant that organizes recordings, generates summaries, extracts action items, and enables searchable meeting history.',
    category: 'Generative AI • Productivity',
    status: 'Completed',
    overview:
      'Cadence solves the problem of lost meeting context by automatically processing recordings into structured, searchable knowledge. It handles transcription, AI-powered summarization, action item extraction, and provides a full-text search across all meeting history.',
    problem: 'Meeting recordings are difficult to search and reviewing long conversations wastes time. Important decisions are often forgotten.',
    solution: 'Cadence automates transcription, summarization, organization, and retrieval of meetings.',
    keyFeatures: [
      { title: 'Meeting Library', description: 'Central repository for all recordings with metadata, tags, and search.' },
      { title: 'AI Summaries', description: 'Automatic generation of meeting summaries with key discussion points.' },
      { title: 'Action Items', description: 'Extraction of tasks and decisions from meeting transcripts.' },
      { title: 'Full-Text Search', description: 'Search across all meeting content, summaries, and transcripts.' }
    ],
    screenshots: [
      { title: 'Dashboard', caption: 'Overview of meetings and storage.', image: '/assets/images/cadence/dashboard.png' },
      { title: 'Meetings', caption: 'Meeting library and upload workflow.', image: '/assets/images/cadence/meeting.png' },
      { title: 'Settings', caption: 'Application configuration and AI provider management.', image: '/assets/images/cadence/setting.png' }
    ],
    technologies: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['FastAPI'] },
      { category: 'AI', items: ['OpenAI'] },
      { category: 'Database', items: ['SQLite'] }
    ],
    techList: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'OpenAI', 'SQLite'],
    challenges: [
      { problem: 'Processing long audio recordings with accurate transcription required handling files that exceeded API context limits.', solution: 'Implemented chunked audio processing with overlapping segments to ensure no content was lost during transcription.' },
      { problem: 'Generating coherent summaries from segmented transcripts without losing narrative flow.', solution: 'Designed a hierarchical summarization pipeline that first summarizes chunks, then synthesizes them into a final summary.' }
    ],
    lessons: [
      'Async processing with progress indicators was essential for user trust during long transcription jobs.',
      'SQLite with full-text search was surprisingly capable for this use case and eliminated the need for an external search service.',
      'Allowing users to edit and correct AI-generated summaries improved accuracy over time through feedback loops.'
    ],
    image: '/assets/images/cadence/dashboard.png',
    github: 'https://github.com/Noahtatpati/cadence'
  },
  {
    slug: 'bireena-medico',
    title: 'Bireena Medico',
    subtitle: 'Healthcare Laboratory Management System',
    description:
      'A laboratory workflow platform developed during an AI internship to manage reports, patients, uploads, and diagnostics.',
    category: 'Healthcare • AI • Internship',
    status: 'Completed',
    overview:
      'Bireena Medico is a laboratory management platform built during an internship at Bireena Infotech. It streamlines the lifecycle of laboratory reports from upload to patient delivery, with role-based access for lab technicians and administrators.',
    problem: 'Laboratories often rely on disconnected tools for report management and patient workflows.',
    solution: 'A centralized platform for report management and laboratory operations.',
    keyFeatures: [
      { title: 'Dashboard', description: 'Real-time laboratory overview with pending reports, recent uploads, and patient activity.' },
      { title: 'Report Management', description: 'Create, edit, and manage patient reports with structured diagnostic data.' },
      { title: 'Upload Portal', description: 'Streamlined upload workflow for laboratory reports with validation.' }
    ],
    screenshots: [
      { title: 'Dashboard', caption: 'Laboratory overview.', image: '/assets/images/bireena/dashboard.png' },
      { title: 'Reports', caption: 'Patient report management.', image: '/assets/images/bireena/reports.png' },
      { title: 'Upload Report', caption: 'Uploading laboratory reports.', image: '/assets/images/bireena/upload-report.png' }
    ],
    technologies: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Supabase', 'MongoDB'] }
    ],
    techList: ['React', 'TypeScript', 'Supabase', 'MongoDB', 'Tailwind CSS'],
    challenges: [
      { problem: 'Laboratory staff needed to upload reports in bulk while maintaining patient-data associations.', solution: 'Built a batch upload flow with drag-and-drop and automatic metadata extraction from filenames.' },
      { problem: 'Different laboratories used different report formats, making standardization difficult.', solution: 'Created a flexible template system that administrators could configure per laboratory.' }
    ],
    lessons: [
      'Working with real healthcare data required careful attention to privacy and access control.',
      'Supabase\'s real-time updates were useful for the dashboard but required thoughtful data structuring to avoid excessive reads.',
      'User feedback from lab technicians directly shaped the upload workflow to minimize clicks per report.'
    ],
    image: '/assets/images/bireena/dashboard.png',
    github: 'https://github.com/BireenaInfotech/Bireena-Medico'
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
