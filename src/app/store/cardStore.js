import { create } from "zustand";


const cardsDictionary = {

    cardBase: [
        { key: "1", nombre: "N1", subtitle: null, valor: "v1", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "2", nombre: "N2", subtitle: null, valor: "v2", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "3", nombre: "N3", subtitle: null, valor: "v3", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "4", nombre: "N4", subtitle: null, valor: "v4", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "5", nombre: "N5", subtitle: null, valor: "v5", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "6", nombre: "N6", subtitle: null, valor: "v6", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false }
    ],

    card_01: [ /* ABO */
        { key: "1", nombre: "A", subtitle: "(ABO1)", valor: "v1", colorGel: "#a9dfeb", colorBox: "#1ca1e8", rbc: false, enzimas: false, plasma: false },
        { key: "2", nombre: "B", subtitle: "(ABO2)", valor: "v2", colorGel: "#FCFF82", colorBox: "#FDFF2C", rbc: false, enzimas: false, plasma: false },
        { key: "3", nombre: "DVI-", subtitle: "(RH1)", valor: "v3", colorGel: "#c2c9c9", colorBox: "#c2c9c9", rbc: false, enzimas: false, plasma: false },
        { key: "4", nombre: "ctl", subtitle: null, valor: "v4", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "5", nombre: "A1", subtitle: null, valor: "v5", colorGel: "#ffffff", colorBox: "#ffc0cb", rbc: false, enzimas: false, plasma: false },
        { key: "6", nombre: "B", subtitle: null, valor: "v6", colorGel: "#ffffff", colorBox: "#ffc0cb", rbc: false, enzimas: false, plasma: false }
    ],
    card_02: [ /* Liss Coombs */
        { key: "1", nombre: "n1", subtitle: null, valor: "v1", colorGel: "#d9e9cf", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "2", nombre: "n2", subtitle: null, valor: "v2", colorGel: "#d9e9cf", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "3", nombre: "n3", subtitle: null, valor: "v3", colorGel: "#d9e9cf", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "4", nombre: "n4", subtitle: null, valor: "v4", colorGel: "#d9e9cf", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "5", nombre: "n5", subtitle: null, valor: "v5", colorGel: "#d9e9cf", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "6", nombre: "n6", subtitle: null, valor: "v6", colorGel: "#d9e9cf", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false }
    ],
    card_03: [ /* Profile 3 */
        { key: "1", nombre: "M", subtitle: "(MNS1)", valor: "v1", colorGel: "#d5dbdc", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "2", nombre: "N", subtitle: "(MNS2)", valor: "v2", colorGel: "#d5dbdc", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "3", nombre: "S", subtitle: "(MNS3)", valor: "v3", colorGel: "#d9e9cf", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "4", nombre: "s", subtitle: "(MNS4)", valor: "v4", colorGel: "#d9e9cf", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "5", nombre: "Fya", subtitle: "(FY1)", valor: "v5", colorGel: "#d9e9cf", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "6", nombre: "Fyb", subtitle: "(FY2)", valor: "v6", colorGel: "#d9e9cf", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false }
    ],
    card_04: [ /* Rh + K */
        { key: "1", nombre: "C", subtitle: "(RH2)", valor: "v1", colorGel: "#ffffff", colorBox: "#d35983", rbc: false, enzimas: false, plasma: false },
        { key: "2", nombre: "c", subtitle: "(RH4)", valor: "v2", colorGel: "#ffffff", colorBox: "#b384b0", rbc: false, enzimas: false, plasma: false },
        { key: "3", nombre: "E", subtitle: "(RH3)", valor: "v3", colorGel: "#ffffff", colorBox: "#ab7f43", rbc: false, enzimas: false, plasma: false },
        { key: "4", nombre: "e", subtitle: "(RH5)", valor: "v4", colorGel: "#ffffff", colorBox: "#6baf18", rbc: false, enzimas: false, plasma: false },
        { key: "5", nombre: "K", subtitle: "(KEL1)", valor: "v5", colorGel: "#ffffff", colorBox: "#F9F8F5", rbc: false, enzimas: false, plasma: false },
        { key: "6", nombre: "ctl", subtitle: "", valor: "v6", colorGel: "#ffffff", colorBox: "#F9F8F5", rbc: false, enzimas: false, plasma: false }
    ],
    card_05: [ /* Fractionated Coombs */
        { key: "1", nombre: "IgG", subtitle: null, valor: "v1", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "2", nombre: "IgA", subtitle: null, valor: "v2", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "3", nombre: "IgM", subtitle: null, valor: "v3", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "4", nombre: "C3c", subtitle: null, valor: "v4", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "5", nombre: "C3d", subtitle: null, valor: "v5", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "6", nombre: "ctl", subtitle: null, valor: "v6", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false }
    ],
    card_06: [ /* Liss Coombs IgG */
        { key: "1", nombre: "n1", subtitle: null, valor: "v1", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "2", nombre: "n2", subtitle: null, valor: "v2", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "3", nombre: "n3", subtitle: null, valor: "v3", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "4", nombre: "n4", subtitle: null, valor: "v4", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "5", nombre: "n5", subtitle: null, valor: "v5", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false },
        { key: "6", nombre: "n6", subtitle: null, valor: "v6", colorGel: "#d5dbdc", colorBox: "#c0dc8e", rbc: false, enzimas: false, plasma: false }
    ],
    card_07: [ /* NaCl */
        { key: "1", nombre: "n1", subtitle: null, valor: "v1", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "2", nombre: "n2", subtitle: null, valor: "v2", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "3", nombre: "n3", subtitle: null, valor: "v3", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "4", nombre: "n4", subtitle: null, valor: "v4", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "5", nombre: "n5", subtitle: null, valor: "v5", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false },
        { key: "6", nombre: "n6", subtitle: null, valor: "v6", colorGel: "#ffffff", colorBox: "#ffffff", rbc: false, enzimas: false, plasma: false }
    ],

}


const frameColorsDictionary = {
    type_01: "#000",
    type_02: "#579b2d",/* 769148 */
    type_03: "#cc7d32"/* 92806c */
}

export const useCardStore = create((set) => ({
    cardInfo: null,
    rows: cardsDictionary.cardBase,
    columns: [
        { key: "key", label: "Bucket" },
        { key: "nombre", label: "Name" },
        { key: "valor", label: "Agglutination Grades" },
        { key: "colorGel", label: "Gel Color" },
        { key: "colorBox", label: "Box Color" },
        { key: "plasma", label: "Plasma" },
        { key: "enzimas", label: "Enzimas" },
        { key: "rbc", label: "RBC" },
    ],
    columns2: [
        { key: "key", label: "Text Number" },
        { key: "texts", label: "Texts" },
        { key: "fieldactivator", label: "Status" },
    ],
    rows2: [
        { key: "1", text: "", fieldactivator: false },
        { key: "2", text: "Sample Text", fieldactivator: true },
        { key: "3", text: "", fieldactivator: false },
        { key: "4", text: "", fieldactivator: false },
        { key: "5", text: "", fieldactivator: false }
    ],

    frameColors: frameColorsDictionary.type_01,

    updateRow2: (key, column, value) => set((state) => ({
        rows2: state.rows2.map(row =>
            row.key === key ? { ...row, [column]: value } : row
        )
    })),

    updateRow: (key, column, value) => set((state) => ({
        rows: state.rows.map(row =>
            row.key === key ? { ...row, [column]: value } : row
        )
    })),

    updateCard: (cardName) => set(() => ({
        cardInfo: cardName || null,
        rows: cardsDictionary[cardName] || cardsDictionary.cardBase,
        frameColors: cardName == "card_02" || cardName == "card_05" || cardName == "card_06" ?
            frameColorsDictionary.type_02
            :
            cardName == "card_07"
                ?
                frameColorsDictionary.type_03
                :
                frameColorsDictionary.type_01

    })),


}));

