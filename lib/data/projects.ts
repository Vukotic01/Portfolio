import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'food-delivery-app',
    title: 'Food Delivery Web App',
    shortDescription:
      'A fullstack food ordering platform with an Angular frontend and C# backend.',
    description:
      'A complete food delivery web application split into two separate repositories — a frontend built with Angular (TypeScript) and a backend built with C#. The app allows users to browse restaurants, add items to a cart, and place food orders. The backend handles business logic, order management, and data persistence via a REST API consumed by the Angular frontend.',
    problem:
      'Building a real-world ordering system that cleanly separates frontend and backend concerns, with a typed Angular UI communicating with a structured C# REST API.',
    solution:
      'Implemented an Angular SPA for the client with component-based architecture and a C# backend with RESTful endpoints handling orders, menus, and user data. The two repositories share a well-defined API contract, keeping concerns cleanly separated.',
    outcome:
      'A working fullstack food ordering application demonstrating strong separation of concerns between frontend and backend layers, with a complete user flow from browsing to order placement.',
    tech: ['Angular', 'TypeScript', 'C#', '.NET', 'REST API'],
    tags: ['Fullstack', 'Frontend', 'Backend'],
    githubUrl: 'https://github.com/FoodDeliveryWebApp',
    frontendUrl: 'https://github.com/FoodDeliveryWebApp/frontend',
    backendUrl: 'https://github.com/FoodDeliveryWebApp/backend',
    demoUrl: null,
    featured: true,
    gallery: [
      '/projects/food-delivery-app/signup.png',
      '/projects/food-delivery-app/restaurants.png',
      '/projects/food-delivery-app/many.png',
      '/projects/food-delivery-app/admin-dash.png',
    ],
  },
  {
    slug: 'dog-breed-classifier',
    title: 'Dog Breed Classifier',
    shortDescription:
      'AI-powered dog breed classification using machine learning in Python.',
    description:
      'An artificial intelligence project built in Python for classifying dog breeds from images. The project was developed as part of the ORI (Osnove Računarske Inteligencije — Foundations of Computational Intelligence) course at the Faculty of Technical Sciences. It uses machine learning techniques to train and evaluate a model capable of identifying dog breeds from visual input.',
    problem:
      'Applying machine learning concepts from an AI course to a real classification task — training a model to distinguish between dog breeds based on image data, without relying on pre-built cloud services.',
    solution:
      'Built a Python-based ML pipeline that preprocesses image data, trains a classification model, and evaluates its accuracy across multiple dog breeds. The entire pipeline — from data loading to evaluation — is implemented from fundamentals as part of the coursework requirements.',
    outcome:
      'A working image classification system that demonstrates practical application of AI/ML fundamentals, including model training, evaluation metrics, and image preprocessing techniques.',
    tech: ['Python', 'Machine Learning', 'AI', 'Image Classification'],
    tags: ['Backend'],
    githubUrl: 'https://github.com/Vukotic01/ORI-Projekat',
    demoUrl: null,
    featured: true,
  },
  {
    slug: 'go-followers',
    title: 'GO Followers — Social Graph Service',
    shortDescription:
      'A Go microservice with Neo4j and Docker for managing user-following relationships.',
    description:
      'A backend microservice written in Go that models and manages user-following relationships using a Neo4j graph database. Built as part of a Service-Oriented Architecture (SOA) team project (Team 36), the service is containerized with Docker and exposes an API for creating and querying follower/following connections between users — a pattern common in social platforms.',
    problem:
      'Efficiently modeling social graph data (who follows whom) in a way that scales well and allows fast relationship queries — something relational databases handle poorly at scale due to expensive recursive JOIN operations.',
    solution:
      'Chose Neo4j as a graph database to natively represent user nodes and follow edges. Wrapped the service in Go for performance and containerized it with Docker for easy deployment within the broader SOA architecture. The service exposes clean REST endpoints for follow, unfollow, and relationship queries.',
    outcome:
      'A production-style microservice that integrates cleanly into a larger SOA system, demonstrating knowledge of graph databases, Go backend development, Docker containerization, and service-oriented design principles.',
    tech: ['Go', 'Neo4j', 'Docker', 'Microservices', 'SOA'],
    tags: ['Backend'],
    githubUrl: 'https://github.com/SOA-TEAM-36/GO-Followers',
    demoUrl: null,
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
