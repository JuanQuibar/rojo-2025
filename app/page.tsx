import { getHomeArticles, type Article } from "@/lib/data";
import Portada from "@/components/portada";
import Punto1_Audiencia from "@/components/punto1_audiencia";
import Punto2_Agenda from "@/components/punto2_agenda";
import Punto3_Titulacion from "@/components/punto3_titulacion";
import Punto4_IA from "@/components/punto4_ia";
import Punto5_Cierre from "@/components/punto5_cierre";

export default async function HomePage() {
  const articles = await getHomeArticles();
  return (
    <>
      <Portada />

      <div className="divider max-w-4xl mx-auto"></div>

      <div className="container mx-auto px-6 py-12">
        <Punto1_Audiencia />
        <div className="divider max-w-4xl mx-auto"></div>
        <Punto2_Agenda />
        <div className="divider max-w-4xl mx-auto"></div>
        <Punto3_Titulacion articles={articles} />
        <div className="divider max-w-4xl mx-auto"></div>
        <Punto4_IA />
        <div className="divider max-w-4xl mx-auto"></div>
        <Punto5_Cierre />
      </div>
    </>
  );
}
