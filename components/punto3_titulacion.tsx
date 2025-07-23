'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getHomeArticles, type Article } from '@/lib/data';

// SUB-COMPONENTE para las tarjetas de la API
const ApiTitleCard = ({ article }: { article: Article }) => {
  const getImageUrl = (art: Article): string => {
    const placeholder = 'https://placehold.co/800x450/e9ecef/6c757d?text=Diario+UNO';
    if (!art?.thumbnails?.[0]?.files) return placeholder;
    return art.thumbnails[0].files[1]?.url || art.thumbnails[0].files[2]?.url || placeholder;
  };
  const title = (article.homeTitle?.trim() ? article.homeTitle : article.title) || "Título no disponible";

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
      {/* La clase 'relative' es la corrección clave aquí */}
      <div className="relative aspect-video bg-gray-200 flex items-center justify-center w-full overflow-hidden">
        <Image src={getImageUrl(article)} alt={`Imagen para "${title}"`} width={800} height={450} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h5 className="text-[1.2rem] leading-[1.4] font-bold text-text-primary">{title}</h5>
        <p className="font-mono text-sm text-text-secondary text-right mb-2">{title.length} caracteres</p>
      </div>
    </div>
  );
};

// SUB-COMPONENTE para la tarjeta interactiva
const InteractiveTitleCard = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [validation, setValidation] = useState({ entiende: '', emocion: 0, pega: '' });
  const [warnings, setWarnings] = useState({ entiende: false, emocion: false, pega: false });

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData('text');
    if (text?.startsWith('http')) { e.preventDefault(); setImageUrl(text); }
  };

  useEffect(() => {
    setWarnings({
      entiende: validation.entiende === 'no',
      emocion: validation.emocion > 0 && validation.emocion < 3,
      pega: validation.pega === 'no',
    });
  }, [validation]);

  const isInvalid = Object.values(warnings).some(w => w);

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
      {/* La clase 'relative' es la corrección clave aquí */}
      <div className="relative aspect-video bg-gray-200 flex items-center justify-center w-full overflow-hidden">
        {imageUrl ? (
          <Image src={imageUrl} alt="Imagen pegada" layout="fill" objectFit="cover" onError={() => setImageUrl(null)} />
        ) : (
          <div className="w-full p-4">
            <div className="border-2 border-dashed border-border p-4">
              <input type="text" onPaste={handlePaste} className="w-full border border-border px-3 py-2 rounded text-sm focus:outline-2 focus:outline-offset-2 focus:outline-brand" placeholder="Pegá la URL de la imagen aquí" />
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <textarea 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className={`w-full border-none bg-transparent text-[1.2rem] leading-[1.4] min-h-[5.2rem] p-0 font-semibold resize-none focus:outline-none ${isInvalid ? 'text-danger' : 'text-text-primary'}`} 
          placeholder="Escribí tu propuesta de título aquí..."
        ></textarea>
        <p className="font-mono text-sm text-text-secondary text-right mb-2">{title.length} caracteres</p>
        <div className="border-t border-border pt-4 mt-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-text-secondary">
              <span className="block text-xs font-semibold mb-2">¿Se entiende?</span>
              <div onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValidation(p => ({...p, entiende: e.target.value}))}>
                <label className="flex items-center cursor-pointer text-sm"><input type="radio" name="entiende" value="si" className="accent-brand mr-2" /> Sí</label>
                <label className="flex items-center cursor-pointer text-sm"><input type="radio" name="entiende" value="no" className="accent-brand mr-2" /> No</label>
              </div>
              {warnings.entiende && <p className="text-sm text-danger mt-1">El título debe ser claro.</p>}
            </div>
            <div className="text-text-secondary">
              <span className="block text-xs font-semibold mb-2">Nivel de emoción:</span>
              <div className="flex items-center text-2xl">
                {[1, 2, 3, 4, 5].map(v => (
                  <button key={v} onClick={() => setValidation(p => ({...p, emocion: v}))} className={`cursor-pointer ${validation.emocion >= v ? 'text-warning' : 'text-gray-300'}`}>&#9733;</button>
                ))}
              </div>
              {warnings.emocion && <p className="text-sm text-danger mt-1">La emoción debe ser &gt; 3.</p>}
            </div>
            <div className="text-text-secondary">
              <span className="block text-xs font-semibold mb-2">¿Pega con el resto?</span>
              <div onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValidation(p => ({...p, pega: e.target.value}))}>
                <label className="flex items-center cursor-pointer text-sm"><input type="radio" name="pega" value="si" className="accent-brand mr-2" /> Sí</label>
                <label className="flex items-center cursor-pointer text-sm"><input type="radio" name="pega" value="no" className="accent-brand mr-2" /> No</label>
              </div>
              {warnings.pega && <p className="text-sm text-danger mt-1">Debe armonizar.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// COMPONENTE PRINCIPAL DE LA SECCIÓN
export default function Punto3_Titulacion() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getHomeArticles().then(data => {
            if (data.length > 0) setArticles(data);
            else setError("No se recibieron artículos de la API.");
        }).catch(err => {
            setError(err.message || "Ocurrió un error desconocido.");
        }).finally(() => setLoading(false));
    }, []);
    
    // ... El resto del componente se mantiene igual ...
    return (
        <section id="punto3" className="mb-16 scroll-mt-24">
            <div className="text-center mb-12">
                <p className="section-subtitle">PUNTO 3: EL MÉTODO</p>
                <h2 className="mt-2">Dominar el arte de la <span className="brand-text">Titulación Estratégica</span></h2>
                <p className="text-center text-lg text-text-secondary max-w-4xl mx-auto mt-4">El título y la foto son el 90% de la batalla por la atención de nuestro lector. Por eso, dejamos de tratarlo como un resumen para convertirlo en el origen de la historia. <span className='font-bold'>Los dos títulos de cada nota (portada e interior) se escriben antes de redactar la nota y la foto se elige antes de redactar la nota.</span> Este es el núcleo de nuestro nuevo flujo de trabajo.</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12 mb-16">
                <div className="card p-8">
                    <h3 className="mb-4 brand-text">A. El Sistema de Doble Título</h3>
                    <p className="text-text-secondary mb-6">Para cada artículo, debés crear dos títulos obligatoriamente desde el inicio:</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg border">
                            <h4 className="font-bold text-xl mb-2">1. Título de Portada (El Ancla Emocional)</h4>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary">
                                <li><strong className="text-text-primary">Diseñado para:</strong> Nuestro lector fiel.</li>
                                <li><strong className="text-text-primary">Objetivo:</strong> Construir el relato de la home, generar una reacción emocional y ser el principal motor de clics.</li>
                                <li><strong className="text-text-primary">Evaluación:</strong> Su efectividad se mide en la &apos;Planilla para Titular&apos;, donde se asegura que cumpla su estrategia emocional.</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border">
                            <h4 className="font-bold text-xl mb-2">2. Título de Artículo (El Título SEO / H1)</h4>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary">
                                <li><strong className="text-text-primary">Diseñado para:</strong> El lector que llega de buscadores y para los algoritmos de Google.</li>
                                <li><strong className="text-text-primary">Objetivo:</strong> Ser claro, descriptivo, responder a una intención de búsqueda y estar optimizado con palabras clave.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-16'>
                <h3 className="mb-4 brand-text">B. Estrategias Emocionales para el Título de Portada</h3>
                <p className="text-text-secondary mb-6">Elegí una estrategia clara según la emoción que querés despertar en nuestro lector:</p>
                <div className="space-y-4">
                    <details><summary>IMPACTO (Afirmación Contundente)</summary><p className="details-content">Para generar sorpresa o indignación. Usá datos fuertes y directos.<br/><em>Ejemplo: Mataron a un hombre en Palmares y se sospecha que fue un vecino cansado de la música fuerte.</em></p></details>
                    <details><summary>INTRIGA (Promesa de Revelación)</summary><p className="">Para generar curiosidad y la necesidad de saber más. Planteá una pregunta o un misterio relevante.<br/><em>Ejemplo: La dura condena que recibió el hombre que mató a su vecino en Palmares por la música.</em></p></details>
                    <details><summary>CONEXIÓN HUMANA (Empatía)</summary><p className="details-content">Para generar ternura, orgullo, compasión o inspiración a través de historias personales.<br/><em>Ejemplo: Cristine Lambetta, la mujer que cambió el glamour de París por la sonrisa de los niños de Lavalle.</em></p></details>
                    <details><summary>UTILIDAD (Beneficio Directo)</summary><p className="details-content">Para generar interés práctico y accionable. Respondé a la pregunta &quot;¿qué gano yo con esto?&quot;.<br/><em>Ejemplo: Plan canje de televisores: cómo recibir un smart nuevo a cambio de tu televisor actual y cuánto te ahorrás.</em></p></details>
                </div>
            </div>

            <div className='mb-16'>
            <h3 className="mb-4 brand-text">C. Reglas Fundamentales de Titulación</h3>
                <p className="text-text-secondary mb-6">La creatividad necesita límites para ser efectiva. Estas son nuestras reglas.</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="card p-6 border-l-4 border-success">
                        <h4 className="font-bold text-xl mb-3 text-green-600">Reglas para una &quot;Intriga Elegante&quot;</h4>
                        <ul className="styled-list">
                            <li><strong className="text-text-primary">Prometé, no engañes:</strong> El contenido debe cumplir sobradamente la promesa del título.</li>
                            <li><strong className="text-text-primary">Aportá contexto:</strong> La intriga no debe ser tan vaga que resulte confusa.</li>
                            <li><strong className="text-text-primary">El misterio debe ser valioso:</strong> La revelación debe justificar el clic.</li>
                        </ul>
                    </div>
                    <div className="card p-6 border-l-4 border-danger">
                        <h4 className="font-bold text-xl mb-3 text-red-600">Lo que NUNCA debés incluir</h4>
                        <ul className="styled-list">
                            <li>Clichés y frases hechas (&quot;polémica en las redes&quot;).</li>
                            <li>Verbos en futuro sobre eventos no confirmados.</li>
                            <li>Ambigüedad engañosa (Clickbait barato).</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="mb-4 brand-text">D. Secuencia de Trabajo: Tu Checklist para Titular</h3>
                <p className="text-text-secondary mb-6">Este es el proceso mental y práctico que debés seguir para cada título:</p>
                <ol className="list-decimal list-inside space-y-4 text-text-secondary card p-8">
                    <li>Leé en voz alta los títulos y mirá las fotos que ya están en la planilla o en la portada . Sentí el ritmo y el tono del &quot;relato&quot; actual.</li>
                    <li>Escribí tu <strong className="text-text-primary">Título de Portada</strong> en la plantilla y pegá la foto, aplicando la estrategia emocional que mejor se ajuste.</li>
                    <li>Sometelo a este filtro de preguntas:
                        <ul className="list-disc list-inside ml-6 mt-2">
                            <li>¿Se entiende a la perfección? Si no, reescribilo.</li>
                            <li>¿Genera la emoción buscada? Si es tibio, reescribilo buscando más potencia.</li>
                            <li>¿&quot;Pega&quot; con el resto de los títulos? ¿Aporta al relato general o lo desentona?</li>
                            <li>¿Es relevante? (Pregunta respondida en la Fase de Agenda).</li>
                        </ul>
                    </li>
                    <li>Una vez aprobado el Título de Portada, redactá el <strong className="text-text-primary">Título de Artículo (SEO/H1)</strong>.</li>
                    <li>Escribí la bajada y la volanta con criterio SEO.</li>
                    <li>Con los dos títulos y los subtítulos definidos, redactá la nota.</li>
                    <li>Al finalizar, generá el resumen SEO con IA (se detalla en el siguiente punto).</li>
                </ol>
            </div>

            
            <div id="planilla-titulacion" className="p-0 md:p-0 mt-12">
                <h3 className="text-center mb-2">Herramienta de Trabajo:</h3>
                <h4 className="text-2xl font-bold text-center mb-8 brand-text">Planilla de Titulación Interactiva</h4>
                <div className="space-y-6 max-w-[500px] mx-auto">
                    {loading && <div className="text-center text-text-secondary p-8">Cargando noticias recientes...</div>}
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
              <a href="#portada" className="inline-flex items-center text-brand font-medium hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>
                  Volver al inicio
              </a>
            </div>
        </section>
    );
}