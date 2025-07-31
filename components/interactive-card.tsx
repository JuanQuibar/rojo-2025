"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

export default function InteractiveTitleCard() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [validation, setValidation] = useState({
    entiende: "",
    emocion: 0,
    pega: "",
  });
  const [warnings, setWarnings] = useState({
    entiende: false,
    emocion: false,
    pega: false,
  });

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const items = e.clipboardData.items;
    for (const item of Array.from(items)) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result) setImageUrl(reader.result.toString());
          };
          reader.readAsDataURL(file);
        }
        e.preventDefault();
        break;
      }
    }
  };

  useEffect(() => {
    setWarnings({
      entiende: validation.entiende === "no",
      emocion: validation.emocion > 0 && validation.emocion < 3,
      pega: validation.pega === "no",
    });
  }, [validation]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Delete" && imageUrl) {
      setImageUrl(null);
    }
  };

  const isInvalid = Object.values(warnings).some((w) => w);

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="relative aspect-video bg-gray-200 flex items-center justify-center w-full overflow-hidden">
        {imageUrl ? (
          <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="w-full h-full group relative focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            <Image
              src={imageUrl}
              alt="Imagen pegada"
              layout="fill"
              objectFit="cover"
              onError={() => setImageUrl(null)}
            />
            <button
              type="button"
              onClick={() => setImageUrl(null)}
              className="absolute top-2 right-2 bg-black bg-opacity-60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200"
              aria-label="Borrar imagen"
            >
              <TrashIcon />
            </button>
          </div>
        ) : (
          <div className="w-full p-4">
            <div className="border-2 border-dashed border-border p-4">
              <input
                type="text"
                onPaste={handlePaste}
                className="w-full border border-border px-3 py-2 rounded text-sm focus:outline-2 focus:outline-offset-2 focus:outline-brand"
                placeholder="Pegá la URL de la imagen aquí"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full border-none bg-transparent text-[1.2rem] leading-[1.4] min-h-[5.2rem] p-0 font-semibold resize-none focus:outline-none ${
            isInvalid ? "text-danger" : "text-text-primary"
          }`}
          placeholder="Escribí tu propuesta de título aquí..."
        ></textarea>
        <p className="font-mono text-sm text-text-secondary text-right mb-2">
          {title.length} caracteres
        </p>
        <div className="border-t border-border pt-4 mt-4">
          <div className="grid grid-cols-3 gap-2">
            {/* El JSX de la validación se mantiene igual */}
            <div className="text-text-secondary">
              <span className="block text-xs font-semibold mb-2">
                ¿Se entiende?
              </span>
              <div
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValidation((p) => ({ ...p, entiende: e.target.value }))
                }
              >
                <label className="flex items-center cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="entiende"
                    value="si"
                    className="accent-brand mr-2"
                  />{" "}
                  Sí
                </label>
                <label className="flex items-center cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="entiende"
                    value="no"
                    className="accent-brand mr-2"
                  />{" "}
                  No
                </label>
              </div>
              {warnings.entiende && (
                <p className="text-sm text-danger mt-1">
                  El título debe ser claro.
                </p>
              )}
            </div>
            <div className="text-text-secondary">
              <span className="block text-xs font-semibold mb-2">
                Nivel de emoción:
              </span>
              <div className="flex items-center text-2xl">
                {[1, 2, 3, 4, 5].map((v) => (
                  <button
                    key={v}
                    onClick={() => setValidation((p) => ({ ...p, emocion: v }))}
                    className={`cursor-pointer ${
                      validation.emocion >= v ? "text-warning" : "text-gray-300"
                    }`}
                  >
                    &#9733;
                  </button>
                ))}
              </div>
              {warnings.emocion && (
                <p className="text-sm text-danger mt-1">
                  La emoción debe ser &gt; 3.
                </p>
              )}
            </div>
            <div className="text-text-secondary">
              <span className="block text-xs font-semibold mb-2">
                ¿Pega con el resto?
              </span>
              <div
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValidation((p) => ({ ...p, pega: e.target.value }))
                }
              >
                <label className="flex items-center cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="pega"
                    value="si"
                    className="accent-brand mr-2"
                  />{" "}
                  Sí
                </label>
                <label className="flex items-center cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="pega"
                    value="no"
                    className="accent-brand mr-2"
                  />{" "}
                  No
                </label>
              </div>
              {warnings.pega && (
                <p className="text-sm text-danger mt-1">Debe armonizar.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
