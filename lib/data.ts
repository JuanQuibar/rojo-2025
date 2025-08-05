import { unstable_noStore as noStore } from "next/cache";
export interface Article {
  id: string;
  title: string;
  homeTitle?: string;
  thumbnails?: {
    files?: {
      url?: string;
    }[];
  }[];
}

export async function getHomeArticles(): Promise<Article[]> {
  noStore();
  const API_URL =
    "https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=5&id=10&selectors=authors";
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      throw new Error("La respuesta de la red no fue exitosa");
    }

    const data = await response.json();

    const articles = data?.["10"]?.newsArticles ?? [];
    return articles;
  } catch (error) {
    console.error("Error al obtener los artículos:", error);
    return [];
  }
}
