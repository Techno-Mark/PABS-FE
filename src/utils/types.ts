export interface HeroSectionProps {
  headingText: string;
  subetext: string;
  ctaText: string;
}

export interface BoxInfoItem {
  icon: string;
  text: string;
}

export interface BoxInformationProps {
  title: string;
  subTitle: string;
  data: BoxInfoItem[];
}