import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchPageData = async (slug: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pages/${slug}.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
};
