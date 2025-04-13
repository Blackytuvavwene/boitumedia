// Education timeline
export interface TimelineItem {
    icon: string;
    title: string;
    date: string;
    side: 'left' | 'right';
    content: string;
  }
  
export type TimelineItems = TimelineItem[];

// Projects
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    long_description: string;
    challenges: string;
    results: string;
    live_link: string;
    github_link: string;
    screenshots: Screenshot[];
    date_created?: Date;
    date_updated?: Date;
    user_created?: string | null;
    user_updated?: string | null;
}

export type Projects = Project[];

// screenshot type
export interface Screenshot {
    id: number;
    image: string;
    description: string;
    alt_text?: string;
    is_primary?: boolean;
    date_created?: Date;
    date_updated?: Date;
}

// technologies
export interface Technology {
    name: string;
    icon: string;
}

export type Technologies = Technology[];

// testimonial type
export interface Testimonial {
    id: number;
    name: string;
    position: string;
    image?: string;
    quote: string;
}

export type Testimonials = Testimonial[];

// contact info
export interface ContactInfo {
    icon: string;
    title: string;
    details: string[];
}

export type ContactInfos = ContactInfo[];

// faq type
export interface FAQ {
    question: string;
    answer: string;
}

export type FAQs = FAQ[];

// home services
export interface Service {
    icon: string;
    title: string;
    description: string;
    ariaLabel: string;
    seoTags?: string[];
}

export type Services = Service[];

// project types
export interface ProjectType {
    id: number;
    name: string;
    icon: string;
}

export type ProjectTypes = ProjectType[];

// pricing plans
export interface PricingPlan {
    id: number;
    name: string;
    description: string;
    price?: {
        monthly: number;
        yearly: number;
    } | number | null;
    features: string[];
    popular: boolean;
    cta: string;
}

export type PricingPlans = PricingPlan[];
