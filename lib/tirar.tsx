'use client';

import { useState, useMemo } from 'react';

// Constantes para las opciones
const EMOJIS = ['❤️', '😡', '😂', '😮', '😢', '👍'];
const RELEVANCIA_OPTIONS = [
  { label: 'Muy influyente', value: 4, id: 'rel-muy' },
  { label: 'Medianamente', value: 3, id: 'rel-med' },
  { label: 'Poco influyente', value: 2, id: 'rel-poco' },
  { label: 'Nada influyente', value: 1, id: 'rel-nada' },
];
const FOCO_OPTIONS = [
    { label: 'Persona', value: 2, id: 'foco-persona' },
    { label: 'Cosa', value: 1, id: 'foco-cosa' },
];

const Punto2_Agenda = () => {
  // El manejo de estado es correcto y no necesita cambios
  const [foco, setFoco] = useState<number | null>(null);
  const [relevancia, setRelevancia] = useState<number | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [intensidad, setIntensidad] = useState<number>(0);

  const resultado = useMemo(() => {
    if (foco === null || relevancia === null || intensidad === 0 || selectedEmoji === null) {
      return { key: null, name: '' };
    }
    const ejeX = foco + relevancia;
    const ejeY = intensidad;
    if (ejeX >= 5 && ejeY >= 3) return { key: 'lider', name: '¡Excelente!' };
    if (ejeX < 5 && ejeY >= 4) return { key: 'apuesta', name: '¡Está buena!' };
    if (ejeX >= 5 && ejeY < 3) return { key: 'contexto', name: 'Aburrida pero zafa.' };
    return { key: 'baja', name: 'Baja Prioridad' };
  }, [foco, relevancia, intensidad, selectedEmoji]);

  return (
    <section id="punto2" className="mb-16 scroll-mt-24">
      <div className="text-center mb-12">
        <p className="section-subtitle">PUNTO 2: EL MÉTODO</p>
        <h2 className="mt-2">Construir nuestra <span className="brand-text">Agenda</span></h2>
        <p className="text-center text-lg text-text-secondary max-w-4xl mx-auto mt-4">Dejamos atrás la intuición como único motor de nuestra portada. Adoptamos un modelo analítico y deliberado para interpretar la realidad, jerarquizarla y construir una agenda con una intención clara: conectar profundamente con nuestro modelo de lector.</p>
      </div>

      <div className="mb-16 max-w-5xl mx-auto">
          {/* ... Contenido estático superior ... */}
      </div>

      {/* INICIO DE LA SECCIÓN ACTUALIZADA */}
      <div className="mb-16">
        <h3 className="text-center mb-8">B. La Fórmula FRF <span className="brand-text">(Foco, Relevancia, Fuerza)</span>: El Filtro para Evaluar Noticias</h3>
        <p className="text-center text-text-secondary max-w-3xl mx-auto mb-12"><span className='font-bold'>Antes de encarar una nota,</span> cada tema potencial debe pasar por este filtro de tres fases para determinar su verdadero valor para nuestra portada.</p>

        <div className="space-y-8 max-w-4xl mx-auto">
                <div className="card p-6">
                    <h4 className="text-2xl font-bold mb-4"><span className="text-gray-400">Fase 1:</span> FOCO <span className="text-lg font-normal text-text-secondary">(La Relevancia Base)</span></h4>
                    <div className="grid md:grid-cols-1 gap-4">
                        <div>
                            <h5 className="font-bold text-lg text-brand">Protagonista:</h5>
                            <p className="text-text-secondary ml-4">Priorizá la historia según su protagonista.</p>
                            <p className="text-text-secondary ml-4"><strong className="text-text-primary">Prioridad 1:</strong> Persona. La gente conecta con gente. Buscá siempre el rostro humano detrás del hecho.</p>
                            <p className="text-text-secondary ml-4"><strong className="text-text-primary">Prioridad 2:</strong> Cosa. Una institución, ley, empresa u objeto.</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg text-brand">Distancia:</h5>
                            <p className="text-text-secondary ml-4">Priorizá la cercanía. El impacto local es el rey de nuestra portada.</p>
                            <p className="text-text-secondary ml-4"><strong className="text-text-primary">Jerarquía:</strong> Gran Mendoza &gt; Mendoza &gt; Cuyo &gt; Argentina &gt; Mundo.</p>
                        </div>
                    </div>
                </div>
                <div className="card p-6">
                    <h4 className="text-2xl font-bold mb-4"><span className="text-gray-400">Fase 2:</span> RELEVANCIA <span className="text-lg font-normal text-text-secondary">(El Universo de Influencia)</span></h4>
                    <p className="text-text-secondary mb-2">Una vez definido el Foco, medimos la magnitud del impacto de la noticia. Aplicá el mismo criterio tanto si el protagonista es una persona como si es un hecho o una institución.</p>
                    <h5 className="font-bold text-lg text-brand">Nivel de Influencia:</h5>
                    <p className="text-text-secondary ml-4">Clasificá el tema según el impacto social, político, económico o cultural de las acciones o decisiones del protagonista.</p>
                    <p className="text-text-secondary ml-4"><strong className="text-text-primary">Jerarquía:</strong> Muy influyente &gt; Medianamente influyente &gt; Poco influyente &gt; Nada influyente.</p>
                </div>
                <div className="card p-6">
                    <h4 className="text-2xl font-bold mb-4"><span className="text-gray-400">Fase 3:</span> FUERZA <span className="text-lg font-normal text-text-secondary">(El Veredicto Emocional)</span></h4>
                    <p className="text-text-secondary mb-4">Este es nuestro gran diferenciador y el factor decisivo. La Intensidad Emocional anula cualquier otra jerarquía y determina el valor final de una noticia. Una noticia con Fuerza 5 es un ancla de portada indiscutible.</p>
                    <div className="bg-gray-50 p-4 rounded-md border">
                        <h5 className="font-bold text-lg mb-4 text-center text-brand">El Proceso</h5>
                        <p className="text-text-secondary mb-2"><strong className="text-text-primary">Elegí una Emoción Dominante:</strong> Se selecciona la emoción principal que la noticia podría generar en nuestro lector.</p>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center my-4">
                            <div><span className="text-3xl mb-1">❤️</span><span className="text-xs font-bold block">AMOR</span></div>
                            <div><span className="text-3xl mb-1">😡</span><span className="text-xs font-bold block">INDIGNACIÓN</span></div>
                            <div><span className="text-3xl mb-1">😂</span><span className="text-xs font-bold block">HUMOR</span></div>
                            <div><span className="text-3xl mb-1">😮</span><span className="text-xs font-bold block">SORPRESA</span></div>
                            <div><span className="text-3xl mb-1">😢</span><span className="text-xs font-bold block">TRISTEZA</span></div>
                            <div><span className="text-3xl mb-1">👍</span><span className="text-xs font-bold block">UTILIDAD</span></div>
                        </div>
                        <p className="text-text-secondary"><strong className="text-text-primary">Asignale una Intensidad:</strong> Se puntúa la fuerza de esa emoción en una escala del 1 (leve) al 5 (máxima).</p>
                    </div>
                </div>
        </div>
      </div>
      {/* FIN DE LA SECCIÓN ACTUALIZADA */}

      <div id="calculadora-frf" className="card p-6 md:p-8 mt-16">
        {/* ... Calculadora Interactiva ... */}
      </div>

      <div className="text-center mt-16">
          {/* ... Link para volver al inicio ... */}
      </div>
    </section>
  );
};

export default Punto2_Agenda;