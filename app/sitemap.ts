import type { MetadataRoute } from "next";

const BASE_URL = "https://reciproque.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
    },
    {
      url: `${BASE_URL}/assistance-informatique`,
    },
    {
      url: `${BASE_URL}/reseaux-informatique`,
    },
    {
      url: `${BASE_URL}/software-development`,
    },
    {
      url: `${BASE_URL}/privacy`,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
    },
  ];
}
