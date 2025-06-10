
import { Patrick_Hand } from 'next/font/google'

const patrickHand = Patrick_Hand({
    subsets: ['latin'],
    weight: '400',
})

const Textos = ({ textData,supData,subData, valueData, texts, fieldActivator, subtitles, cardInfo }) => {

    console.log(cardInfo)
    const heightWithSubtitles = subtitles.some(element => typeof element === 'string' && element !== null && element !== '') ? 185.85 : 188.85;
    const yPositionTextDescription = (cardInfo == 'card_07' || cardInfo == 'cardBase' || cardInfo == null) ? "237" : "242.5"

    const valuesText = {
        0: "-",
        "w": "+/-",
        1: "+",
        2: "++",
        3: "+++",
        4: "++++"
    }

    /* Altura inicial: 188.85 */


    return (
        <g id="textos">
            {textData.map((text, index) => (
                <text
                    key={`text_${index}`}
                    transform={`translate(${48 + index * 68} ${heightWithSubtitles})`}
                    className={patrickHand.className}
                    fontFamily="Patrick Hand"
                    fontSize="18"
                    textAnchor="middle"
                >
                    <tspan x="0" y="0">
                        {text}
                        {supData[index] && (
                            <tspan dy="-6" fontSize="14" fontWeight={500}>{supData[index]}</tspan>
                        )}
                        {subData[index] && (
                            <tspan dy="6" fontSize="14" fontWeight={500}>{subData[index]}</tspan>
                        )}
                    </tspan>
                </text>
            ))}
            {valueData.map((valor, index) => (
                <text
                    key={`valor_${index}`}
                    transform={`translate(${48 + index * 68} 287.2)`}
                    className={patrickHand.className}
                    fontFamily="Patrick Hand"
                    fontSize="18"
                    textAnchor="middle"
                >
                    <tspan x="0" y="0">
                        {valuesText[valor] || valor}
                    </tspan>
                </text>
            ))}





            {subtitles.map((text, index) => (
                <text
                    key={`subtitle${index}`}
                    transform={`translate(${48 + index * 68} ${196})`}
                    className={patrickHand.className}
                    fontFamily="Patrick Hand"
                    fontWeight={700}
                    fontSize="10"
                    textAnchor="middle"
                >
                    <tspan x="0" y="0">
                        {text}
                    </tspan>
                </text>
            ))}

            {fieldActivator[0] && <text id="descripcion_x5F_1" transform={`translate(30 ${yPositionTextDescription})`} textAnchor="start" className={patrickHand.className} fontFamily="Patrick Hand" fontSize="18"><tspan x="0" y="0">{texts[0]}</tspan></text>}
            {fieldActivator[3] && <text id="descripcion_x5F_4" transform={`translate(116 ${yPositionTextDescription})`} textAnchor="middle" className={patrickHand.className} fontFamily="Patrick Hand" fontSize="18"><tspan x="0" y="0">{texts[3]}</tspan></text>}
            {fieldActivator[1] && <text id="descripcion_x5F_2" transform={`translate(219.5 ${yPositionTextDescription})`} textAnchor="middle" className={patrickHand.className} fontFamily="Patrick Hand" fontSize="18"><tspan x="0" y="0">{texts[1]}</tspan></text>}
            {fieldActivator[2] && <text id="descripcion_x5F_3" transform={`translate(410 ${yPositionTextDescription})`} textAnchor="end" className={patrickHand.className} fontFamily="Patrick Hand" fontSize="18"><tspan x="0" y="0">{texts[2]}</tspan></text>}
            {fieldActivator[4] && <text id="descripcion_x5F_5" transform={`translate(321.5 ${yPositionTextDescription})`} textAnchor="middle" className={patrickHand.className} fontFamily="Patrick Hand" fontSize="18"><tspan x="0" y="0">{texts[4]}</tspan></text>}



        </g>
    )
}

export default Textos



