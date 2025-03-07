import dynamic from "next/dynamic";

// Dynamically import sections
const Hero = dynamic(() => import("@/app/component/sections/herosection/HeroSection"));
const Box = dynamic(() => import("@/app/component/sections/boxinformation/boxinformation"));
const Trust = dynamic(() => import("@/app/component/sections/trustsection/trustsection"));
const Service = dynamic(() => import("@/app/component/sections/service/service"));
const Industry = dynamic(() => import("@/app/component/sections/industry/industry"));
const Technology = dynamic(() => import("@/app/component/sections/technology/technology"));
const Collaboration = dynamic(() => import("@/app/component/sections/collaboration/collaboration"));
const Client = dynamic(() => import("@/app/component/sections/client/client"));
const KnowledgeCenter = dynamic(() => import("@/app/component/sections/knowledgecenter/knowledgecenter"));
const Contactform = dynamic(() => import("@/app/component/sections/contactform/contactform"));

const components: Record<string, any> = {
  "Hero Sections": Hero, 
  "Box information": Box,
  "trust section": Trust,
  "services" : Service, 
  "industry": Industry,
  "technology": Technology, 
  "collaboration": Collaboration,
  "Client Speak": Client,
  "knowledge center": KnowledgeCenter,
  "Contact form": Contactform,
};

const SectionRenderer = ({ formatData }: { formatData: any[] }) => {
  return (
    <>
      {formatData.map((section, index) => {
        const sectionName = Object.keys(section)[0]; 
        const sectionData = section[sectionName];

        if (!components[sectionName]) {
          console.warn(`No component found for section: ${sectionName}`);
          return null;
        }

        const Component = components[sectionName];

        return <Component key={index} {...sectionData} />;
      })}
    </>
  );
};

export default SectionRenderer;
