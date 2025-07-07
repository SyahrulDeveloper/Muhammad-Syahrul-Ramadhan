export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
}

export interface Blog {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
}

export interface Certification {
    id: number;
    title: string;
    description: string;
    issuer: string;
    image: string;
    link: string;
}
