import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://reciproque.eu",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}