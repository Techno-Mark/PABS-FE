import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";
import Head from "next/head";

const SECTIONS: Record<string, any> = {
  "Hero Sections": dynamic(() => import("@/components/sections/herosection/HeroSection")),
  "Box information": dynamic(() => import("@/components/sections/boxinformation/boxinformation")),
};


export default function DynamicPage({ pageData }: { pageData: any }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{pageData.metaTitle || "Default Title"}</title>
        <meta name="description" content={pageData.metaDescription || "Default description"} />
        <meta name="keywords" content={pageData.metaKeywords || "default, keywords"} />
      </Head>

      {pageData.formatData?.map((sectionObj: any, index: number) => {
        const sectionName = Object.keys(sectionObj)[0];
        const SectionComponent = SECTIONS[sectionName] || null;
        return SectionComponent ? <SectionComponent key={index} {...sectionObj[sectionName]} /> : null;
      })}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug || "home";
  const apiUrl = `http://localhost:3000/pages/${slug}.json`;

  try {
    const { data } = await axios.get(apiUrl);
    return {
      props: { pageData: data },
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return { notFound: true };
  }
};
