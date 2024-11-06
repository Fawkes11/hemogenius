


const TextContainer = ({rows}) => {

    const colorBox = rows.map((r, i) => r.colorBox);

    return (
        <g id="bloques_de_colores">
            <path id="bloque_x5F_base" d="M16.509,200.842h407.5v89.655c0,5.519-4.481,10-10,10H26.509c-5.519,0-10-4.481-10-10v-89.655h0Z" fill='#fff' />
            <path id="bloque_x5F_1" d="M31.259,165.752h52.75v34.4H16.509v-19.65c0-8.141,6.609-14.75,14.75-14.75Z" fill={colorBox[0]} />
            <rect id="bloque_x5F_2" x="84.509" y="165.752" width="67.5" height="34.4" fill={colorBox[1]} />
            <rect id="bloque_x5F_3" x="152.509" y="165.752" width="67.5" height="34.4" fill={colorBox[2]} />
            <rect id="bloque_x5F_4" x="220.509" y="165.752" width="67.5" height="34.4" fill={colorBox[3]} />
            <rect id="bloque_x5F_5" x="288.509" y="165.752" width="67.5" height="34.4" fill={colorBox[4]} />
            <path id="bloque_x5F_6" d="M356.509,165.752h52.75c8.141,0,14.75,6.609,14.75,14.75v19.65h-67.5v-34.4h0Z" fill={colorBox[5]} />
        </g>
    )
}

export default TextContainer