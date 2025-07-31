"use client";

import Image from "next/image";
import type { Article } from "@/lib/data";

// Definimos la interfaz aquí también para que el componente sea autocontenido
// Si ya la tienes en un archivo global (ej: @/lib/types), puedes importarla.
// export interface Article {
//   homeTitle?: string | null;
//   title: string;
//   thumbnails?: {
//     files: { url: string }[];
//   }[];
// }

// SUB-COMPONENTE para las tarjetas de la API
export default function ApiTitleCard({ article }: { article: Article }) {
  const getImageUrl = (art: Article): string => {
    const placeholder = "/logo.png"; // Recomiendo tener un placeholder en /public
    if (!art?.thumbnails?.[0]?.files) return placeholder;
    // Lógica para encontrar la URL correcta de la imagen
    return (
      art.thumbnails[0].files[1]?.url ||
      art.thumbnails[0].files[2]?.url ||
      placeholder
    );
  };

  const title =
    (article.homeTitle?.trim() ? article.homeTitle : article.title) ||
    "Título no disponible";

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="relative aspect-video bg-gray-200 flex items-center justify-center w-full overflow-hidden">
        <Image
          src={getImageUrl(article)}
          alt={`Imagen para "${title}"`}
          width={800}
          height={450}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h5 className="text-[1.2rem] leading-[1.4] font-bold text-text-primary">
          {title}
        </h5>
        <p className="font-mono text-sm text-text-secondary text-right mb-2">
          {title.length} caracteres
        </p>
      </div>
    </div>
  );
}
