



'use client'
import { useEffect, useRef, useState } from "react";
import { useCardStore } from "../store/cardStore";
import getSVGString from "../utilities/ToString";
import CanvasSVG from "./CanvasSVG";
import { patrickHandBase64 } from "../fonts/patrickHandBase64";
import { Button } from "@heroui/react";

const GelCard = () => {
    const { rows, rows2, frameColors, cardInfo } = useCardStore();
    const canvasRef = useRef(null);

    const handleExport = () => {

        const canvas = canvasRef.current; // Obtiene el canvas visible
        const ctx = canvas.getContext("2d");

        // Factor de escala para mejorar la calidad (por ejemplo, 3x)
        const scaleFactor = 3;

        // Establece el tamaño del canvas con el factor de escala
        canvas.width = canvas.clientWidth * scaleFactor;
        canvas.height = canvas.clientHeight * scaleFactor;

        const offscreenCanvas = document.createElement('canvas');
        const offscreenCtx = offscreenCanvas.getContext('2d');

        // Ajusta el tamaño del offscreen canvas
        offscreenCanvas.width = canvas.width;
        offscreenCanvas.height = canvas.height;

        const DOMURL = window.URL || window.webkitURL || window;

        const img = new Image();

        const dataSVGString = getSVGString({ rows, rows2, frameColors, cardInfo });

        let svgWithFont = dataSVGString.replace(
            /<svg([^>]+)>/,
            `<svg$1><style>${patrickHandBase64}</style>`
        );


        // Ajusta manualmente la posición de los elementos con textAnchor="middle"
        /* svgWithFont = svgWithFont.replace(
            /<text id="(descripcion_x5F_[245])"([^>]*)>(.*?)<\/text>/g,
            (match, id, attributes, content) => {
                const textContent = content.match(/<tspan[^>]*>(.*?)<\/tspan>/)?.[1] || '';

                // Usa un canvas temporal para medir el ancho del texto
                const tempCanvas = document.createElement("canvas");
                const tempCtx = tempCanvas.getContext("2d");
                tempCtx.font = "18px 'Patrick Hand'"; // Ajusta según el tamaño y la fuente del texto en SVG
                const textWidth = tempCtx.measureText(textContent).width;

                // Calcula la nueva posición de `translate` en X restando la mitad del ancho del texto
                const translateXMatch = attributes.match(/translate\((\d+)\s+(\d+)\)/);
                if (translateXMatch) {
                    console.log(translateXMatch)
                    const [_, x, y] = translateXMatch;
                    console.log(x)
                    const newX = parseFloat(x);

                    // Retorna el elemento <text> con la nueva posición
                    return `<text id="${id}" ${attributes.replace(/translate\(\d+\s+\d+\)/, `translate(${newX} ${y})`)}>${content}</text>`;
                }
                return match;
            }
        ); */



        const svgBlob = new Blob([svgWithFont], { type: 'image/svg+xml;charset=utf-8' });
        const url = DOMURL.createObjectURL(svgBlob);

        img.onload = () => {
            // Dibuja en el canvas fuera de pantalla
            offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
            offscreenCtx.drawImage(img, 0, 0, offscreenCanvas.width, offscreenCanvas.height);

            // Copia el offscreen canvas al canvas visible
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(offscreenCanvas, 0, 0);

            // Exporta como PNG después de que la imagen ha sido dibujada
            const link = document.createElement('a');
            link.download = 'gel-card.png';
            link.href = offscreenCanvas.toDataURL('image/png'); // Usa el offscreenCanvas
            link.click();

            // Revoca el objeto URL
            DOMURL.revokeObjectURL(url);
        };

        img.src = url; // Inicia la carga de la imagen
    };


    return (
        <div className="w-[44vw] md:min-h-screen h-auto px-[2vw] py-[8vw] flex flex-col justify-center items-center relative">

            <div className="w-[40vw] h-[27.4vw] max-w-[576px] max-h-[395px] absolute opacity-0 -z-1">
                <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            <div className="w-[40vw] h-[27.4vw] max-w-[576px] max-h-[395px] relative z-10"> {/* w-[30vw] h-[20.55vw] */}
                <CanvasSVG rows={rows} rows2={rows2} frameColors={frameColors} cardInfo={cardInfo} />
            </div>

            <Button
                onPress={handleExport}
                className="mt-8 px-4 py-2 relative z-10 bg-caribbean-600 text-white  rounded"
                variant="shadow"
            >
                Export as image
            </Button>

        </div>
    );
}


export default GelCard

