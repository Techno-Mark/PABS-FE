import dynamic from "next/dynamic";
import { FC, ComponentType } from "react";
import {
  HeroSectionProps,
  BoxInformationProps,
  TrustSectionProps,
  KnowledgeCenterProps,
  ClientSpeakProps,
  ContactFormProps,
  ServicesProps,
  CollaborationProps,
  IndustryProps,
  TechnologyProps,
} from "../../../utils/types";

// ✅ Define a base interface for section props
interface SectionProps {
  [key: string]: unknown;
}

// ✅ Define a type for section components
type SectionComponent<T extends SectionProps = SectionProps> = FC<T>;

// ✅ Dynamically import sections with correct typing
const Hero = dynamic(() => import("@/app/component/sections/herosection/HeroSection")) as SectionComponent<HeroSectionProps>;
const Box = dynamic(() => import("@/app/component/sections/boxinformation/boxinformation")) as SectionComponent<BoxInformationProps>;
const Trust = dynamic(() => import("@/app/component/sections/trustsection/trustsection")) as SectionComponent<TrustSectionProps>;
const Service = dynamic(() => import("@/app/component/sections/service/service")) as SectionComponent<ServicesProps>;
const Industry = dynamic(() => import("@/app/component/sections/industry/industry")) as SectionComponent<IndustryProps>;
const Technology = dynamic(() => import("@/app/component/sections/technology/technology")) as SectionComponent<TechnologyProps>;
const Collaboration = dynamic(() => import("@/app/component/sections/collaboration/collaboration")) as SectionComponent<CollaborationProps>;
const Client = dynamic(() => import("@/app/component/sections/client/client")) as SectionComponent<ClientSpeakProps>;
const KnowledgeCenter = dynamic(() => import("@/app/component/sections/knowledgecenter/knowledgecenter")) as SectionComponent<KnowledgeCenterProps>;
const Contactform = dynamic(() => import("@/app/component/sections/contactform/contactform")) as SectionComponent<ContactFormProps>;

// ✅ Define component mapping with strict typing
const components: Record<string, ComponentType<SectionProps>> = {
  "Hero Sections": Hero as ComponentType<SectionProps>,
  "Box information": Box as ComponentType<SectionProps>,
  "trust section": Trust as ComponentType<SectionProps>,
  "services": Service as ComponentType<SectionProps>,
  "industry": Industry as ComponentType<SectionProps>,
  "technology": Technology as ComponentType<SectionProps>,
  "collaboration": Collaboration as ComponentType<SectionProps>,
  "Client Speak": Client as ComponentType<SectionProps>,
  "knowledge center": KnowledgeCenter as ComponentType<SectionProps>,
  "Contact form": Contactform as ComponentType<SectionProps>,
};

// ✅ Define Section Data Type
type SectionData = Record<string, SectionProps>;

// ✅ Define Props for SectionRenderer
interface SectionRendererProps {
  formatData: SectionData[];
}

const SectionRenderer: FC<SectionRendererProps> = ({ formatData }) => {
  return (
    <>
      {formatData.map((section, index) => {
        const sectionName = Object.keys(section)[0];
        const sectionData = section[sectionName];

        if (!sectionData || typeof sectionData !== "object") {
          console.warn(`Invalid section data for: ${sectionName}`);
          return null;
        }

        const Component = components[sectionName];

        if (!Component) {
          console.warn(`No component found for section: ${sectionName}`);
          return null;
        }

        return <Component key={index} {...(sectionData as SectionProps)} />;
      })}
    </>
  );
};

export default SectionRenderer;
