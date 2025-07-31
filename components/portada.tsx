import Image from "next/image";

const Portada = () => {
  return (
    <div id="portada" className="container mx-auto px-6 py-16 md:py-24">
      <header className="text-center max-w-4xl mx-auto">
        <div className="mb-12">
          <Image
            src="https://www.diariouno.com.ar/assets/img/298/logo.svg"
            alt="Logo de Diario UNO"
            width={230}
            height={64}
            priority={true} // Prioridad para el logo principal (LCP)
            className="mx-auto h-12 w-auto md:h-16"
          />
        </div>
        <h1 className="font-black tracking-tight">
          La era de la <span className="brand-text">emoción</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          En su momento dimos un gran salto al darle personalidad y objetivos al
          equipo rojo. Ha llegado del momento de dar otro paso importante en la
          evolución de nuestro portal. Este documento es la brújula que desde
          ahora guiará cada decisión editorial, cada título que escribamos, cada
          foto que pongamos y cada historia que contemos.
        </p>
        <p className="mt-4 text-lg md:text-xl text-text-primary font-medium max-w-3xl mx-auto">
          Nuestra misión es transformar la información en emoción, el dato en
          significado y el clic en lealtad.
        </p>
      </header>

      <main className="space-y-12 mt-20">
        <section className="card p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 bg-blue-100 p-5 rounded-full">
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
                className="w-16 h-16 text-brand"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-3">
                1. ¿Qué queremos lograr?{" "}
                <span className="brand-text">Nuestro Objetivo</span>
              </h2>
              <p className="text-text-secondary text-lg">
                ✓ Queremos que la home de Diario UNO se lea como un{" "}
                <strong className="text-text-primary">
                  relato en sí mismo
                </strong>
                , donde cada título y foto son un párrafo de una solo
                experiencia informativa. La home debe funcionar como un
                producto. Buscamos que cada uno de esos párrafos (o sea: cada
                título) no solo informe, sino que provoque en el lector humano
                una{" "}
                <strong className="text-text-primary">emoción definida</strong>:
                sorpresa, indignación, orgullo, curiosidad, empatía.
              </p>
              <p>
                ✓ Queremos que los títulos interiores seduzcan a los algoritmos
                con un Seo bien pensada, ademas de despertar las mismas
                emociones humanas que los de portada.
              </p>
            </div>
          </div>
        </section>

        <section className="card p-8 md:p-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            2. ¿Para qué lo hacemos?{" "}
            <span className="brand-text">El Propósito</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border">
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
                className="w-12 h-12 mx-auto text-brand mb-4"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2 text-text-primary">
                Aumentar Visitas Directas
              </h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
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
                className="w-12 h-12 mx-auto text-brand mb-4"
              >
                <path d="M15 15l-2 5L9 9l11 4-5 2z"></path>
                <path d="M15 15l5 5"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2 text-text-primary">
                Elevar Tasa de Clics (CTR)
              </h3>
            </div>
          </div>
        </section>

        <section className="card p-8 md:p-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            3. ¿Cómo lo haremos? <span className="brand-text">El Método</span>
          </h2>
          <p className="text-center text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Nuestra estrategia se articula en cinco pilares de ejecución. Navegá
            por cada uno para explorar los detalles.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <a
              href="#punto1"
              className="block bg-gray-50 p-4 rounded-lg border-l-4 border-brand hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1 shadow-sm"
            >
              <div className="text-brand font-black text-sm mb-1">PUNTO 1</div>
              <h3 className="text-md md:text-2xl font-bold text-text-primary">
                Definir Audiencia
              </h3>
            </a>
            <a
              href="#punto2"
              className="block bg-gray-50 p-4 rounded-lg border-l-4 border-brand hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1 shadow-sm"
            >
              <div className="text-brand font-black text-sm mb-1">PUNTO 2</div>
              <h3 className="text-md md:text-2xl font-bold text-text-primary">
                Construir Agenda
              </h3>
            </a>
            <a
              href="#punto3"
              className="block bg-gray-50 p-4 rounded-lg border-l-4 border-brand hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1 shadow-sm"
            >
              <div className="text-brand font-black text-sm mb-1">PUNTO 3</div>
              <h3 className="text-md md:text-2xl font-bold text-text-primary">
                Dominar Titulación
              </h3>
            </a>
            <a
              href="#punto4"
              className="block bg-gray-50 p-4 rounded-lg border-l-4 border-brand hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1 shadow-sm"
            >
              <div className="text-brand font-black text-sm mb-1">PUNTO 4</div>
              <h3 className="text-md md:text-2xl font-bold text-text-primary">
                Potenciar con IA
              </h3>
            </a>
            <a
              href="#punto5"
              className="block bg-gray-50 p-4 rounded-lg border-l-4 border-brand hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1 shadow-sm"
            >
              <div className="text-brand font-black text-sm mb-1">PUNTO 5</div>
              <h3 className="text-md md:text-2xl font-bold text-text-primary">
                Nuestro Paradigma
              </h3>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portada;
