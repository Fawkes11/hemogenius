
import { Patrick_Hand } from 'next/font/google'

const patrickHand = Patrick_Hand({
    subsets: ['latin'],
    weight: '400',
})



const CardsInfo = ({ cardInfo }) => {

    return (
        <>

            {
                getCardInfoComponent(cardInfo)
            }

            {/* <text
                transform='translate(435.35 265) rotate(-90)'
                className={patrickHand.className}
                fontFamily="Patrick Hand"
                fontSize="11"
            ><tspan>© Sofia Castillo</tspan></text> */}
        </>
    )
}

export default CardsInfo



const getCardInfoComponent = (cardInfo) => {

    switch (cardInfo) {

        case "card_01":

            return (
                <g id="cardInfo">
                    <rect x="16.259" y="201.002" width="204.4" height="14" fill="#ffd271" />
                    <text
                        transform='translate(117 210.8)'
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        textAnchor='middle'
                        fontSize="10"
                    ><tspan>Monoclonal</tspan></text>
                </g>
            )

        case "card_02":
            return (
                <g id="cardInfo">
                    <rect x="16.259" y="201.002" width="408" height="14" fill="#fabc72" />
                    <text
                        transform='translate(219.5 210.6)'
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        textAnchor='middle'
                        fontSize="10"
                    ><tspan>Anti-IgG + C3d</tspan></text>
                </g>
            );

        case "card_03":
            return (
                <g id="cardInfo">
                    <line x1="16.259" y1="214.502" x2="424.259" y2="214.502" fill="none" stroke='#000000' strokeMiterlimit="10" strokeWidth="1" />
                    <text
                        transform='translate(219.5 210.6)'
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        textAnchor='middle'
                        fontSize="10"
                    ><tspan>+50 μl Antiserum</tspan></text>
                </g>
            );
        case "card_04":
            return (
                <g id="cardInfo">
                    <rect x="16.259" y="201.002" width="340.4" height="14" fill="#ffd271" />
                    <text
                        transform='translate(185 210.8)'
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        textAnchor='middle'
                        fontSize="10"
                    ><tspan>Monoclonal</tspan></text>
                </g>
            );
        case "card_05":
            return (
                <g id="cardInfo">
                    <line x1="16.259" y1="214.502" x2="288.159" y2="214.502" fill="none" stroke='#000000' strokeMiterlimit="10" strokeWidth="1" />
                    <line x1="288.159" y1="201.002" x2="288.159" y2="215.002" fill="none" stroke='#000000' strokeMiterlimit="10" strokeWidth="1" />
                    <rect x="288.7" y="201.002" width="68" height="14" fill="#ffd271" />
                    <text
                        transform='translate(151 210.8)'
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        textAnchor='middle'
                        fontSize="10"
                    ><tspan>rabbit</tspan></text>
                    <text
                        transform='translate(322.5 210.8)'
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        textAnchor='middle'
                        fontSize="10"
                    ><tspan>Monoclonal</tspan></text>
                </g>
            );

        case "card_06":
            return (
                <g id="cardInfo">
                    <line x1="16.259" y1="214.502" x2="424.259" y2="214.502" fill="none" stroke='#000000' strokeMiterlimit="10" strokeWidth="1" />
                    <text
                        transform='translate(219.5 210.6)'
                        className={patrickHand.className}
                        fontFamily="Patrick Hand"
                        textAnchor='middle'
                        fontSize="10"
                    ><tspan>Anti-IgG rabbit</tspan></text>
                </g>
            );
    }
}