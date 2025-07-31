"use client";

import { useState, useMemo } from "react";

// Constantes para las opciones
const EMOJIS = ["❤️", "😡", "😂", "😮", "😢", "👍"];
const RELEVANCIA_OPTIONS = [
  { label: "Muy influyente", value: 4, id: "rel-muy" },
  { label: "Medianamente", value: 3, id: "rel-med" },
  { label: "Poco influyente", value: 2, id: "rel-poco" },
  { label: "Nada influyente", value: 1, id: "rel-nada" },
];
const FOCO_OPTIONS = [
  { label: "Persona", value: 2, id: "foco-persona" },
  { label: "Cosa", value: 1, id: "foco-cosa" },
];

const Punto2_Agenda = () => {
  // El manejo de estado es correcto
  const [foco, setFoco] = useState<number | null>(null);
  const [relevancia, setRelevancia] = useState<number | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [intensidad, setIntensidad] = useState<number>(0);

  const resultado = useMemo(() => {
    if (
      foco === null ||
      relevancia === null ||
      intensidad === 0 ||
      selectedEmoji === null
    ) {
      return { key: null, name: "" };
    }
    const ejeX = foco + relevancia;
    const ejeY = intensidad;
    if (ejeX >= 5 && ejeY >= 3) return { key: "lider", name: "¡Excelente!" };
    if (ejeX < 5 && ejeY >= 4) return { key: "apuesta", name: "¡Está buena!" };
    if (ejeX >= 5 && ejeY < 3)
      return { key: "contexto", name: "Aburrida pero zafa." };
    return { key: "baja", name: "Baja Prioridad" };
  }, [foco, relevancia, intensidad, selectedEmoji]);

  return (
    <section id="punto2" className="mb-16 scroll-mt-24">
      {/* Contenido estático superior (no necesita cambios) */}
      <div className="text-center mb-12">
        <p className="section-subtitle">PUNTO 2: EL MÉTODO</p>
        <h2 className="mt-2">
          Construir nuestra <span className="brand-text">Agenda</span>
        </h2>
        <p className="text-center text-lg text-text-secondary max-w-4xl mx-auto mt-4">
          Adoptamos un modelo analítico y deliberado para interpretar la
          realidad, jerarquizarla y construir una agenda con una intención
          clara: conectar profundamente con nuestro modelo de lector.
        </p>
      </div>

      <div className="mb-16 max-w-5xl mx-auto">
        <h3 className="text-center mb-8">
          A. El Origen de la Agenda:{" "}
          <span className="brand-text">Proactividad y Seguimiento</span>
        </h3>
        <p className="text-center text-text-secondary max-w-3xl mx-auto mb-10">
          Nuestra agenda se nutre de dos fuentes principales que debemos
          gestionar con sistema.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h4 className="font-bold text-xl mb-3 flex items-center">
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
                className="w-6 h-6 mr-3 text-text-secondary"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
              </svg>
              1. Fuentes Externas
            </h4>
            <p className="text-text-secondary">
              Mantenemos nuestros canales de siempre (sitios de organismos,
              portales, redes sociales, mails, etc.), pero con una escucha
              activa. No solo consumimos información, buscamos las historias que
              resuenen con los filtros de nuestro modelo.
            </p>
          </div>
          <div className="card p-6 border-2 border-yellow-400 shadow-lg shadow-yellow-400/10">
            <h4 className="font-bold text-xl mb-3 flex items-center">
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
                className="w-6 h-6 mr-3 text-yellow-500"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              2. Agenda de Seguimiento (Nuestra Mina de Oro)
            </h4>
            <p className="text-text-primary">
              Aquí es donde creamos valor único. Llevaremos un registro
              constante (en una pizarra, cuaderno o documento digital
              compartido) de:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
              <li>
                <strong className="text-yellow-600">Temas de Impacto:</strong>{" "}
                Las noticias que en su momento generaron una alta &quot;Fuerza
                Emocional&quot;. Debemos darles seguimiento periódico para
                encontrar nuevos capítulos relevantes y publicables.
              </li>
              <li>
                <strong className="text-yellow-600">Notas Enterradas:</strong>{" "}
                Las ideas, ángulos o personajes secundarios que quedaron
                enterrados en notas anteriores o actuales.
              </li>
              <li>
                <strong className="text-yellow-600">Notas Satélite:</strong> Son
                las notas que se desprenden de una noticia principal. Generan
                interés en los lectores humanos y suelen funcionar bien para los
                algoritmos.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-center mb-8">
          B. La Fórmula FRF{" "}
          <span className="brand-text">(Foco, Relevancia, Fuerza)</span>: El
          Filtro para Evaluar Noticias
        </h3>
        <p className="text-center text-text-secondary max-w-3xl mx-auto mb-12">
          <span className="font-bold">Antes de encar una nota,</span> cada tema
          potencial debe pasar por este filtro de tres fases para determinar su
          verdadero valor para nuestra portada.
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="card p-6">
            <h4 className="text-2xl font-bold mb-4">
              <span className="text-gray-400">Fase 1:</span> FOCO{" "}
              <span className="text-lg font-normal text-text-secondary">
                (La Relevancia Base)
              </span>
            </h4>
            <div className="grid md:grid-cols-1 gap-4">
              <div>
                <h5 className="font-bold text-lg text-brand">Protagonista:</h5>
                <p className="text-text-secondary ml-4">
                  Priorizá la historia según su protagonista.
                </p>
                <p className="text-text-secondary ml-4">
                  <strong className="text-text-primary">Prioridad 1:</strong>{" "}
                  Persona. La gente conecta con gente. Buscá siempre el rostro
                  humano delante o detrás del hecho.
                </p>
                <p className="text-text-secondary ml-4">
                  <strong className="text-text-primary">Prioridad 2:</strong>{" "}
                  Cosa. Una institución, ley, empresa u objeto.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-lg text-brand">Distancia:</h5>
                <p className="text-text-secondary ml-4">
                  Priorizá la cercanía. El impacto local es el rey de nuestra
                  portada.
                </p>
                <p className="text-text-secondary ml-4">
                  <strong className="text-text-primary">Jerarquía:</strong> Gran
                  Mendoza &gt; Mendoza &gt; Cuyo &gt; Argentina &gt; Mundo.
                </p>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <h4 className="text-2xl font-bold mb-4">
              <span className="text-gray-400">Fase 2:</span> RELEVANCIA{" "}
              <span className="text-lg font-normal text-text-secondary">
                (El Universo de Influencia)
              </span>
            </h4>
            <p className="text-text-secondary mb-2">
              Una vez definido el Foco, medimos la magnitud del impacto de la
              noticia. Aplicá el mismo criterio tanto si el protagonista es una
              persona como si es un hecho o una institución.
            </p>
            <h5 className="font-bold text-lg text-brand">
              Nivel de Influencia:
            </h5>
            <p className="text-text-secondary ml-4">
              Clasificá el tema según el impacto social, político, económico o
              cultural que produce.
            </p>
            <p className="text-text-secondary ml-4">
              <strong className="text-text-primary">Jerarquía:</strong> Muy
              influyente &gt; Medianamente influyente &gt; Poco influyente &gt;
              Nada influyente.
            </p>
          </div>
          <div className="card p-6">
            <h4 className="text-2xl font-bold mb-4">
              <span className="text-gray-400">Fase 3:</span> FUERZA{" "}
              <span className="text-lg font-normal text-text-secondary">
                (El Veredicto Emocional)
              </span>
            </h4>
            <p className="text-text-secondary mb-4">
              Este es nuestro gran diferenciador y el factor decisivo. La
              Intensidad Emocional anula cualquier otra jerarquía y determina el
              valor final de una noticia. Una noticia con Fuerza 5 es un ancla
              de portada indiscutible.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border">
              <h5 className="font-bold text-lg mb-4 text-center text-brand">
                El Proceso
              </h5>
              <p className="text-text-secondary mb-2">
                <strong className="text-text-primary">
                  Elegí una Emoción Dominante:
                </strong>{" "}
                Se selecciona la emoción principal que la noticia podría generar
                en nuestro lector.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center my-4">
                <div>
                  <span className="text-3xl mb-1">❤️</span>
                  <span className="text-xs font-bold block">AMOR</span>
                </div>
                <div>
                  <span className="text-3xl mb-1">😡</span>
                  <span className="text-xs font-bold block">INDIGNACIÓN</span>
                </div>
                <div>
                  <span className="text-3xl mb-1">😂</span>
                  <span className="text-xs font-bold block">HUMOR</span>
                </div>
                <div>
                  <span className="text-3xl mb-1">😮</span>
                  <span className="text-xs font-bold block">SORPRESA</span>
                </div>
                <div>
                  <span className="text-3xl mb-1">😢</span>
                  <span className="text-xs font-bold block">TRISTEZA</span>
                </div>
                <div>
                  <span className="text-3xl mb-1">👍</span>
                  <span className="text-xs font-bold block">UTILIDAD</span>
                </div>
              </div>
              <p className="text-text-secondary">
                <strong className="text-text-primary">
                  Asignale una Intensidad:
                </strong>{" "}
                Se puntúa la fuerza de esa emoción en una escala del 1 (leve) al
                5 (máxima).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="calculadora-frf" className="card p-6 md:p-8 mt-16">
        <h3 className="text-center mb-2">Herramienta Interactiva:</h3>
        <h4 className="text-2xl font-bold text-center mb-8 brand-text">
          Calculadora de Valor Periodístico
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div id="frf-form" className="space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-3">1. Foco</h4>
              <p className="text-sm text-text-secondary mb-2">Protagonista:</p>
              <div className="flex gap-4">
                {FOCO_OPTIONS.map((opt) => (
                  <div className="flex-1" key={opt.id}>
                    <input
                      type="radio"
                      name="protagonista"
                      id={opt.id}
                      value={opt.value}
                      onChange={(e) => setFoco(Number(e.target.value))}
                      className="hidden"
                    />
                    <label htmlFor={opt.id} className="value-selector-label">
                      {opt.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3">2. Relevancia</h4>
              <p className="text-sm text-text-secondary mb-2">
                Nivel de Influencia:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {RELEVANCIA_OPTIONS.map((opt) => (
                  <div key={opt.id}>
                    <input
                      type="radio"
                      name="relevancia"
                      id={opt.id}
                      value={opt.value}
                      onChange={(e) => setRelevancia(Number(e.target.value))}
                      className="hidden"
                    />
                    <label htmlFor={opt.id} className="value-selector-label">
                      {opt.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3">3. Fuerza</h4>
              <p className="text-sm text-text-secondary mb-2">
                Emoción Dominante:
              </p>
              <div
                id="emocion-selector"
                className="flex justify-around bg-gray-50 p-2 rounded-lg border"
              >
                {EMOJIS.map((emoji) => (
                  <span
                    key={emoji}
                    onClick={() => setSelectedEmoji(emoji)}
                    className={`emoji-btn text-3xl ${
                      selectedEmoji === emoji ? "selected" : ""
                    }`}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <p className="text-sm text-text-secondary mt-4 mb-2">
                Intensidad de la Emoción (1-5):
              </p>
              <div
                id="intensidad-selector"
                className="flex justify-around items-center bg-gray-50 p-3 rounded-lg border"
              >
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <span
                    key={starValue}
                    onClick={() => setIntensidad(starValue)}
                    className={`intensity-star text-4xl ${
                      intensidad >= starValue ? "selected" : ""
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2"
              aria-hidden="true"
            ></div>
            <div
              className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2"
              aria-hidden="true"
            ></div>
            <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-text-secondary text-sm">
              Eje X: Relevancia Base &rarr;
            </p>
            <p className="absolute -left-8 top-1/2 -translate-y-1/2 text-text-secondary text-sm -rotate-90 whitespace-nowrap">
              Eje Y: Fuerza Emocional &rarr;
            </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
              <div
                className={`quadrant quadrant-apuesta rounded-lg p-4 flex flex-col justify-center items-center text-center ${
                  resultado.key === "apuesta" ? "highlighted" : ""
                }`}
              >
                <h5 className="font-bold text-yellow-600">¡Está buena!</h5>
                <p className="text-xs text-text-secondary mt-1">
                  Esta nota no tiene mucha relevancia, pero su carga emocional
                  arrolladora la compensa.
                </p>
              </div>
              <div
                className={`quadrant quadrant-lider rounded-lg p-4 flex flex-col justify-center items-center text-center ${
                  resultado.key === "lider" ? "highlighted" : ""
                }`}
              >
                <h5 className="font-bold text-red-600">¡Excelente!</h5>
                <p className="text-xs text-text-secondary mt-1">
                  Esta nota tiene alta relevancia y alta emoción. Es del tipo de
                  nota ideal.
                </p>
              </div>
              <div
                className={`quadrant quadrant-baja rounded-lg p-4 flex flex-col justify-center items-center text-center ${
                  resultado.key === "baja" ? "highlighted" : ""
                }`}
              >
                <h5 className="font-bold text-gray-500">Baja Prioridad</h5>
                <p className="text-xs text-text-secondary mt-1">
                  Noticias de bajo impacto y baja relevancia para nuestra
                  portada.
                </p>
              </div>
              <div
                className={`quadrant quadrant-contexto rounded-lg p-4 flex flex-col justify-center items-center text-center ${
                  resultado.key === "contexto" ? "highlighted" : ""
                }`}
              >
                <h5 className="font-bold text-blue-600">Aburrida pero zafa.</h5>
                <p className="text-xs text-text-secondary mt-1">
                  Esta nota es relevante, pero su bajo impacto emocional la hace
                  aburrida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {resultado.key && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <p className="text-lg">
              Tu nota se clasifica como:{" "}
              <strong className="text-text-primary">{resultado.name}</strong>
            </p>
          </div>
        )}
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
};

export default Punto2_Agenda;
