import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    company: 'Faculty of Technical Sciences, University of Novi Sad',
    role: 'Fullstack Developer — Academic Projects',
    period: '2023 — Present',
    location: 'Novi Sad, Serbia',
    current: true,
    bullets: [
      'Built fullstack applications as part of coursework and team projects, spanning frontend (Angular, React) and backend (Java, C#, Go, Python) technologies across multiple languages and paradigms.',
      'Contributed to a Service-Oriented Architecture project (SOA Team 36), implementing a Go microservice backed by a Neo4j graph database and containerized with Docker.',
      'Developed an AI/ML image classification pipeline in Python for the ORI (Foundations of Computational Intelligence) course, handling data preprocessing, model training, and evaluation.',
      'Collaborated on a fullstack food delivery application — Angular SPA on the frontend, C# .NET REST API on the backend — with full separation of concerns across two repositories.',
    ],
  },
];
