import SectionRenderer from "@/app/component/SectionRenderer";
import { fetchPageData } from "../../../utils/api";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const pageData = await fetchPageData(params.slug);

  if (!pageData || !pageData.formatData) {
    return <div>Error loading page data</div>;
  }

  return <SectionRenderer formatData={pageData.formatData} />;
}
