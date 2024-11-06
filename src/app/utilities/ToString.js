import React from 'react';
import { renderToString } from 'react-dom/server';
import CanvasSVG from '../components/CanvasSVG';

import { useCardStore } from "../store/cardStore";

// Función para convertir el componente SVG a string
const getSVGString = ({rows, rows2, frameColors, cardInfo}) => {

    console.log(rows, rows2)
    const svgString = renderToString(<CanvasSVG rows={rows} rows2={rows2} frameColors={frameColors} cardInfo={cardInfo}/>);
    return svgString;
};

export default getSVGString;
