"use client";

import { useState, useEffect } from "react";
import { getHomeArticles, type Article } from "@/lib/data";
import ApiTitleCard from "./api-title-card";
import InteractiveTitleCard from "./interactive-card";

export default function Punto3_Titulacion() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHomeArticles()
      .then((data) => {
        if (data.length > 0) setArticles(data);
        else setError("No se recibieron artículos de la API.");
      })
      .catch((err) => {
        setError(err.message || "Ocurrió un error desconocido.");
      })
      .finally(() => setLoading(false));
  }, []);

  const titulosEjemplo = [
    {
      poor: "Alfredo Cornejo criticó la falta de celeridad judicial y adelantó cambios en el sistema penal",
      better: "Crítica y advertencia de Cornejo contra los jueces perezosos",
    },
    {
      poor: "Un hombre murió tras ser atropellado en un accidente ocurrido sobre Acceso Este y Tirasso",
      better:
        "Detuvieron al conductor de una Hilux que mató a un peatón en Acceso Este y Tirasso: alcoholemia negativa",
    },
    {
      poor: "Decidieron cambiar la fecha de la Fiesta de la Cosecha para el jueves 6 de marzo",
      better:
        "Bajo amenaza de tormentas, postergaron los recitales de la Fiesta de la Cosecha",
    },
    {
      poor: "Se intoxicaron con monóxido de carbono y un joven les salvó la vida al ventilar loa casa",
      better: "Un joven salvó a cinco personas a punto de morir por monóxido",
    },
    {
      poor: "Un médico cardiólogo admitió que abusó a dos pacientes y fue condenado a 4 años y medio de cárcel",
      better:
        "Cuatro años para el cardiólogo que toqueteó a dos muchachos en el consultorio de guardia",
    },
    {
      poor: "El IPV dio nuevas soluciones para que deudores paguen cuotas acordes a sus ingresos",
      better:
        "Nuevos beneficios para los que se atrasaron en las cuotas de la casa del IPV",
    },
    {
      poor: "Confirmaron 1,5 millones de evacuados en Chile por alerta de tsunami y desocuparon cinco cárceles",
      better:
        "En Chile evacuaron a 1,5 millones de personas por el tsunami surgido en Rusia",
    },
    {
      poor: "La Suprema Corte presentó un proyecto de ley para simplificar el trámite de litigar sin gastos",
      better:
        "La Corte presentó un proyecto para bajar a un minuto el trámite de litigio sin costo",
    },
    {
      poor: "El devenir político de las hermanas de Cornejo y Petri que podrían recalar en la Legislatura",
      better:
        "Las hermanas Petri y Cornejo se aseguraron los primeros puestos en la boleta de octubre",
    },
  ];

  return (
    <section id="punto3" className="mb-16 scroll-mt-24">
      <div className="text-center mb-12">
        <p className="section-subtitle">PUNTO 3: EL MÉTODO</p>
        <h2 className="mt-2">
          Dominar el arte de la{" "}
          <span className="brand-text">Titulación Estratégica</span>
        </h2>
        <p className="text-center text-lg text-text-secondary max-w-4xl mx-auto mt-4">
          El título y la foto son el 90% de la batalla por la atención de
          nuestro lector. Por eso, dejamos de tratarlo como un resumen para
          convertirlo en el origen de la historia.{" "}
          <span className="font-bold">
            Los dos títulos de cada nota (portada e interior) se escriben antes
            de redactar la nota y la foto se elige antes de redactar la nota.
          </span>{" "}
          Este es el núcleo de nuestro nuevo flujo de trabajo.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 mb-16">
        <div className="card p-8">
          <h3 className="mb-4 brand-text">A. El Sistema de Doble Título</h3>
          <p className="text-text-secondary mb-6">
            Para cada artículo, debés crear dos títulos obligatoriamente desde
            el inicio:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h4 className="font-bold text-xl mb-2">
                1. Título de Portada (El Ancla Emocional)
              </h4>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Diseñado para:</strong>{" "}
                  Nuestro lector fiel.
                </li>
                <li>
                  <strong className="text-text-primary">Objetivo:</strong>{" "}
                  Construir el relato de la home, generar una reacción emocional
                  y ser el principal motor de clics.
                </li>
                <li>
                  <strong className="text-text-primary">Evaluación:</strong> Su
                  efectividad se mide en la &apos;Planilla para Titular&apos;,
                  donde se asegura que cumpla su estrategia emocional.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h4 className="font-bold text-xl mb-2">
                2. Título de Artículo (El Título SEO / H1)
              </h4>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Diseñado para:</strong>{" "}
                  El lector que llega de buscadores y para los algoritmos de
                  Google.
                </li>
                <li>
                  <strong className="text-text-primary">Objetivo:</strong> Ser
                  claro, descriptivo, responder a una intención de búsqueda y
                  estar optimizado con palabras clave.
                </li>
                <li>
                  <strong className="text-text-primary">Aclaración:</strong>{" "}
                  Todo lo anterior no significa que el título sea aburrido o con
                  poca carga emocional.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h3 className="mb-4 brand-text">
          B. Estrategias Emocionales para el Título de Portada
        </h3>
        <p className="text-text-secondary mb-6">
          Elegí una estrategia clara según la emoción que querés despertar en
          nuestro lector:
        </p>
        <div className="space-y-4">
          <div className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-center font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-brand mr-2"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
              <span>IMPACTO (Afirmación Contundente)</span>
            </div>
            <div className="pl-6 text-text-secondary">
              <p>
                Para generar sorpresa o indignación. Usá datos fuertes y
                directos
              </p>
              <p className="mt-2">
                <em>
                  Ejemplo: Mataron a un hombre en Palmares y se sospecha que fue
                  un vecino cansado de la música fuerte
                </em>
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-center font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-brand mr-2"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
              <span>INTRIGA (Promesa de Revelación)</span>
            </div>
            <div className="pl-6 text-text-secondary">
              <p>
                Para generar curiosidad y la necesidad de saber más. Planteá una
                pregunta o un misterio relevante.
              </p>
              <p className="mt-2">
                <em>
                  Ejemplo: La dura condena que recibió el hombre que mató a su
                  vecino en Palmares por la música.
                </em>
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-center font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-brand mr-2"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
              <span>CONEXIÓN HUMANA (Empatía)</span>
            </div>
            <div className="pl-6 text-text-secondary">
              <p>
                Para generar ternura, orgullo, compasión o inspiración a través
                de historias personales.
              </p>
              <p className="mt-2">
                <em>
                  Ejemplo: Cristine Lambetta, la mujer que cambió el glamour de
                  París por la sonrisa de los niños de Lavalle.
                </em>
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-center font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-brand mr-2"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
              <span>UTILIDAD (Beneficio Directo)</span>
            </div>
            <div className="pl-6 text-text-secondary">
              <p>
                {
                  'Para generar interés práctico y accionable. Respondé a la pregunta "¿qué gano yo con esto?".'
                }
              </p>
              <p className="mt-2">
                <em>
                  Ejemplo: Plan canje de televisores: cómo recibir un smart
                  nuevo a cambio de tu televisor actual y cuánto te ahorrás.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="mb-4 brand-text">
          C. Reglas Fundamentales de Titulación
        </h3>
        <p className="text-text-secondary mb-6">
          La creatividad necesita límites para ser efectiva. Estas son nuestras
          reglas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 border-l-4 border-success">
            <h4 className="font-bold text-xl mb-3 text-green-600">
              Reglas para una &quot;Intriga Elegante&quot;
            </h4>
            <ul className="styled-list">
              <li>
                <strong className="text-text-primary">
                  Prometé, no engañes:
                </strong>{" "}
                El contenido debe cumplir sobradamente la promesa del título.
              </li>
              <li>
                <strong className="text-text-primary">Aportá contexto:</strong>{" "}
                La intriga no debe ser tan vaga que resulte confusa.
              </li>
              <li>
                <strong className="text-text-primary">
                  El misterio debe ser valioso:
                </strong>{" "}
                La revelación debe justificar el clic.
              </li>
            </ul>
          </div>
          <div className="card p-6 border-l-4 border-danger">
            <h4 className="font-bold text-xl mb-3 text-red-600">
              Lo que NUNCA debés incluir
            </h4>
            <ul className="styled-list">
              <li>
                Clichés y frases hechas (&quot;polémica en las redes&quot;).
              </li>
              <li>Verbos en futuro sobre eventos no confirmados.</li>
              <li>Ambigüedad engañosa (Clickbait barato).</li>
              <li>Adjetivación forzada como recurso para generar emoción.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="mb-4 brand-text">D. Ejemplos de Titulación</h3>
        <p className="text-text-secondary mb-6">
          {
            'La siguiente tabla muestra ejemplos concretos de cómo transformar un título funcional pero "pobre" en uno "mejor", con más impacto o intriga.'
          }
        </p>

        {/* Tabla de Ejemplos con Tailwind CSS */}
        <div className="w-full overflow-hidden border border-border rounded-lg">
          {/* Cabecera de la tabla */}
          <div className="grid grid-cols-2 bg-gray-50 font-semibold text-left">
            <div className="p-3 border-b border-border">Pobre</div>
            <div className="p-3 border-b border-border">Mejor</div>
          </div>

          {/* Cuerpo de la tabla */}
          <div>
            {titulosEjemplo.map((example, index) => (
              <div
                key={index}
                className="grid grid-cols-2 text-sm md:text-base text-text-secondary hover:bg-gray-50 transition-colors"
              >
                <div className="p-3 border-r border-border">{example.poor}</div>
                <div className="p-3 font-medium text-text-primary">
                  {example.better}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 brand-text">
          E. Secuencia de Trabajo: Tu Checklist para Titular
        </h3>
        <p className="text-text-secondary mb-6">
          Este es el proceso mental y práctico que debés seguir para cada
          título:
        </p>
        <ol className="list-decimal list-inside space-y-4 text-text-secondary card p-8">
          <li>
            Leé en voz alta los títulos y mirá las fotos que ya están en la
            planilla o en la portada . Sentí el ritmo y el tono del
            &quot;relato&quot; actual.
          </li>
          <li>
            Escribí tu{" "}
            <strong className="text-text-primary">Título de Portada</strong> en
            la plantilla y pegá la foto, aplicando la estrategia emocional que
            mejor se ajuste.
          </li>
          <li>
            Sometelo a este filtro de preguntas:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>¿Se entiende a la perfección? Si no, reescribilo.</li>
              <li>
                ¿Genera la emoción buscada? Si es tibio, reescribilo buscando
                más potencia.
              </li>
              <li>
                ¿&quot;Pega&quot; con el resto de los títulos? ¿Aporta al relato
                general o lo desentona?
              </li>
              <li>
                ¿Es relevante? (Pregunta respondida en la Fase de Agenda).
              </li>
            </ul>
          </li>
          <li>
            Una vez aprobado el Título de Portada, redactá el{" "}
            <strong className="text-text-primary">
              Título de Artículo (SEO/H1)
            </strong>
            .
          </li>
          <li>Escribí la bajada y la volanta con criterio SEO.</li>
          <li>
            Con los dos títulos y los subtítulos definidos, redactá la nota.
          </li>
          <li>
            Al finalizar, generá el resumen SEO con IA (se detalla en el
            siguiente punto).
          </li>
        </ol>
      </div>

      <div id="planilla-titulacion" className="p-0 md:p-0 mt-12">
        <h3 className="text-center mb-2">Herramienta de Trabajo:</h3>
        <h4 className="text-2xl font-bold text-center mb-8 brand-text">
          Planilla de Titulación Interactiva
        </h4>
        <div className="space-y-6 max-w-[500px] mx-auto">
          {loading && (
            <div className="text-center text-text-secondary p-8">
              Cargando noticias recientes...
            </div>
          )}
          {error && <div className="text-center text-danger p-8">{error}</div>}
          {!loading && !error && (
            <>
              {articles[0] && <ApiTitleCard article={articles[0]} />}
              {articles[1] && <ApiTitleCard article={articles[1]} />}
              <InteractiveTitleCard />
              {articles[2] && <ApiTitleCard article={articles[2]} />}
              {articles[3] && <ApiTitleCard article={articles[3]} />}
            </>
          )}
        </div>
      </div>

      <div className="text-center mt-16">
        <a
          href="#portada"
          className="inline-flex items-center text-brand font-medium hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 mr-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="16 12 12 8 8 12"></polyline>
            <line x1="12" y1="16" x2="12" y2="8"></line>
          </svg>
          Volver al inicio
        </a>
      </div>
    </section>
  );
}
