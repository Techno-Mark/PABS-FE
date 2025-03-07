import SectionRenderer from "@/app/component/SectionRenderer";
import { fetchPageData } from "../../../utils/api";

interface PageProps {
  params: Promise<{ slug: string }>; // Fix: params is a Promise
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // Fix: Await params before using it

  const pageData = await fetchPageData(slug);

  if (!pageData || !pageData.formatData) {
    return <div>Error loading page data</div>;
  }

  return <SectionRenderer formatData={pageData.formatData} />;
}
