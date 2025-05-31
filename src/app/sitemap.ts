
import { MetadataRoute } from "next";

export default async function sitemap() : Promise<MetadataRoute.Sitemap> {
  return [
	{
	  url: "https://riendysadv.com/",
	  lastModified: new Date().toISOString(),
	},
    {
	  url: "https://riendysadv.com/About",
	  lastModified: new Date().toISOString(),
	},
    {
	  url: "https://riendysadv.com/Blog",
	  lastModified: new Date().toISOString(),
	},
    {
	  url: "https://riendysadv.com/Contact",
	  lastModified: new Date().toISOString(),
	},
    {
	  url: "https://riendysadv.com/Gallery",
	  lastModified: new Date().toISOString(),
	},
    {
	  url: "https://riendysadv.com/Product",
	  lastModified: new Date().toISOString(),
	},
  ];
}