import axios from "axios";

export const fetchPageData = async (slug: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/pages/${slug}.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
};
