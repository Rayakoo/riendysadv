import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
  rules:[
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/admin", "/private"]
    }
  ],
  sitemap: "https://riendysadv.com/sitemap.xml",
}   
}