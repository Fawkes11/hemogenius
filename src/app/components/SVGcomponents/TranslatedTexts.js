import { Patrick_Hand } from 'next/font/google'

const patrickHand = Patrick_Hand({
    subsets: ['latin'],
    weight: '400',
})

const TranslatedTexts = ({ textData, valueData }) => {

    const valuesText = {
        0: "-",
        "w": "+/-",
        1: "+",
        2: "++",
        3: "+++",
        4: "++++"
    }

    // Función para calcular el ancho del texto
    const getTextWidth = (text, font) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        return context.measureText(text).width;
    }

    const fontSize = '18px';
    const font = `${fontSize} Patrick Hand`;

    return (
        <>
            {textData.map((text, index) => {
                const textWidth = getTextWidth(text, font);
                const xPosition = 48 + index * 68 - textWidth / 2; // Ajusta la posición para centrar
                return (
                    <text
                        key={`text_${index}`}
                        transform={`translate(${xPosition} 188.85)`}
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        fontSize={fontSize}
                        textAnchor="middle" // Asegúrate de que esto esté presente
                    >
                        <tspan x="0" y="0">
                            {text}
                        </tspan>
                    </text>
                );
            })}
            {valueData.map((valor, index) => {
                const valueText = valuesText[valor] || valor;
                const valueTextWidth = getTextWidth(valueText, font);
                const xPosition = 48 + index * 68 - valueTextWidth / 2; // Ajusta la posición para centrar
                return (
                    <text
                        key={`valor_${index}`}
                        transform={`translate(${xPosition} 287.2)`}
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        fontSize={fontSize}
                        textAnchor="middle" // Asegúrate de que esto esté presente
                    >
                        <tspan x="0" y="0">
                            {valueText}
                        </tspan>
                    </text>
                );
            })}

            <text id="descripcion_x5F_1" transform="translate(30 237)" textAnchor="start" className={patrickHand.className} fontFamily="Patrick Hand" fontSize="18"><tspan x="0" y="0">Nombre Apellido</tspan></text>
            <text id="descripcion_x5F_2" transform="translate(165 237)" textAnchor="center" className={patrickHand.className} fontFamily="Patrick Hand" fontSize="18"><tspan x="0" y="0">Nombre Apellido</tspan></text>
            <text id="descripcion_x5F_3" transform="translate(410 237)" textAnchor="end" className={patrickHand.className} fontFamily="Patrick Hand" fontSize="18"><tspan x="0" y="0">Nombre Apellido</tspan></text>
        </>
    )
}

export default TranslatedTexts;
