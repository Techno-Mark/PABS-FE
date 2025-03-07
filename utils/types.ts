export interface SectionProps {
    [key: string]: unknown;
}

export interface sliders {
    headingText: string;
    subtext: string;
    imageUrl: string;
    ctaText: string;
    ctaUrl: string;
}
export interface HeroSectionProps extends SectionProps {
    headingText: string;
    subtext: string;
    ctaText: string;
    sliderData: sliders[];
}
export interface BoxInfoItem {
    title: string;
    number: string;
}
export interface BoxInformationProps extends SectionProps {
    title: string;
    subTitle: string;
    data: BoxInfoItem[];
}
export interface TrustSectionProps extends SectionProps {
    title: string;
    subTitle: string;
    icons: { icon: string }[];
}
export interface ServicesProps extends SectionProps {
    title: string;
    card: ServiceCard[];
}
export interface ServiceCard {
    heading: string;
    points: string;
    imageUrl: string;
}
export interface IndustryProps extends SectionProps {
    title: string;
    subTitle: string;
    data: IndustryCard[];
}
export interface IndustryCard {
    heading: string;
    text: string;
    imageUrl: string;
    ctaUrl: string;
}
export interface TechnologyProps extends SectionProps {
    title: string;
    subTitle: string;
    icons: { icon: string }[];
}

export interface CollaborationProps extends SectionProps {
    title: string;
    subTitle: string;
    imageurl: string;
    ctaUrl: string;
}

export interface ContactFormProps extends SectionProps {
    title: string;
    subtitle: string;
    desc: string;
}

export interface ClientTestimonial {
    name: string;
    designation: string;
    testimonial: string;
    subtext: string;
    videourl: string;
}

export interface ClientSpeakProps extends SectionProps {
    title: string;
    data: ClientTestimonial[];
}

export interface KnowledgeItem {
    category: string;
    text: string;
    imageurl: string;
}

export interface KnowledgeCenterProps extends SectionProps {
    title: string;
    data: KnowledgeItem[];
}
