// Definimos un tipo básico para los artículos para tener autocompletado y seguridad de tipos
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
  
  // Función asíncrona para obtener los artículos de la home
  export async function getHomeArticles(): Promise<Article[]> {
    const API_URL = 'https://api.diariouno.com.ar/2.0/public/articles/page?page=1&size=5&id=10&selectors=authors';
    try {
      const response = await fetch(API_URL, {
        // Revalidar cada 10 minutos para mantener el contenido fresco
        next: { revalidate: 600 },
      });
  
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
  
      const data = await response.json();
      
      // Extraemos los artículos de la estructura de datos anidada
      const articles = data?.["10"]?.newsArticles ?? [];
      return articles;
  
    } catch (error) {
      console.error("Error al obtener los artículos:", error);
      return []; // Devuelve un array vacío en caso de error
    }
  }