
'use client'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Input,
    Select,
    SelectItem,
    Tabs,
    Tab,
    Card,
    CardBody
} from "@nextui-org/react";

import { useCardStore } from "../store/cardStore";



const Sidebar = () => {

    const { rows, columns, updateRow, columns2, rows2, updateRow2, updateCard } = useCardStore();


    const handleInputChange = (key, column, value) => {
        console.log(rows2)

        if (column == "text" || column == "fieldactivator") {
            updateRow2(key, column, value);
        } else {
            updateRow(key, column, value);
        }

    };

    const getInputComponent = (item, columnKey) => {

        switch (columnKey) {
            case "colorGel":
                return (
                    <div className="w-full h-full flex items-center justify-center">
                        <Input
                            type="color"
                            value={item.colorGel}
                            onInput={(e) => handleInputChange(item.key, "colorGel", e.target.value)}
                            classNames={{
                                input: [
                                    "w-6",
                                    "h-7",
                                    "data-[has-end-content=true]:pe-5.5"
                                ],
                                innerWrapper: [
                                    "w-6",
                                    "h-7"
                                ],
                                inputWrapper: [
                                    "w-10",
                                    "h-9",
                                    "flex",
                                    "items-center",
                                    "justify-center",
                                    "self-center",
                                ],
                            }}
                        />
                    </div>
                );
            case "colorBox":
                return (

                    <div className="w-full h-full flex items-center justify-center">
                        <Input
                            type="color"
                            value={item.colorBox}
                            onInput={(e) => handleInputChange(item.key, "colorBox", e.target.value)}
                            classNames={{
                                input: [
                                    "w-6",
                                    "h-7",
                                    "data-[has-end-content=true]:pe-5.5"
                                ],
                                innerWrapper: [
                                    "w-6",
                                    "h-7"
                                ],
                                inputWrapper: [
                                    "w-10",
                                    "h-9",
                                    "flex",
                                    "items-center",
                                    "justify-center",
                                    "self-center"
                                ],
                            }}
                        />
                    </div>
                );
            case "nombre":
                return (
                    <div className="w-[5vw]">
                        <Input
                            type="text"
                            maxLength={5}
                            value={item.nombre}
                            onChange={(e) => handleInputChange(item.key, "nombre", e.target.value)}
                            classNames={{
                                input: [
                                ],
                                innerWrapper: [
                                ],
                                inputWrapper: [
                                ]
                            }}
                        />
                    </div>
                );
            case "valor":
                return (
                    <div className="w-[7vw]">
                        <CustomSelect
                            value={item.valor}
                            onChange={(value) => handleInputChange(item.key, "valor", value)} />
                    </div>
                );
            case "rbc":
                return (
                    <div>
                        <Input
                            type="checkbox"
                            checked={item.rbc}
                            onChange={(e) => handleInputChange(item.key, "rbc", e.target.checked)}
                        />
                    </div>
                );
            case "enzimas":
                return (
                    <div>
                        <Input
                            type="checkbox"
                            checked={item.enzimas}
                            onChange={(e) => handleInputChange(item.key, "enzimas", e.target.checked)}
                        />
                    </div>
                );
            case "plasma":
                return (
                    <div>
                        <Input
                            type="checkbox"
                            checked={item.plasma}
                            onChange={(e) => handleInputChange(item.key, "plasma", e.target.checked)}
                        />
                    </div>
                );

            case "texts":

                return (
                        <Input
                            type="text"
                            tabIndex={1}
                            placeholder={`Text ${item.key}`}
                            maxLength={18}
                            value={item.text}
                            onChange={(e) => handleInputChange(item.key, "text", e.target.value)}
                        />
                );

            case "fieldactivator":

                return (
                    <div>
                        <Input
                            type="checkbox"
                            checked={item.fieldactivator}
                            onChange={(e) => handleInputChange(item.key, "fieldactivator", e.target.checked)}
                        />
                    </div>
                );
            default:
                return <div className="w-auto flex items-center justify-center">
                    {getKeyValue(item, columnKey)}
                </div>
        }
    };




    return (
        <div className="px-2 py-4 w-full md:px-8 md:h-screen md:py-8 bg-caribbean-800 overflow-auto">

            <div className="flex w-auto flex-col items-center">
                <Tabs
                aria-label="Options"
                classNames={{
                    panel: [
                        "px-0"
                    ]
                }}
                >
                    <Tab key="photos" title="Predefined Cards" >
                        <Card
                            classNames={{
                                base: [
                                    "max-w-xs bg-caribbean-500"
                                ]
                            }}
                            shadow="sm"
                        >
                            <CardBody>
                                <PredefinedCard />
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title="Texts">
                        <Card
                            classNames={{
                                base: [
                                    "max-w-md bg-caribbean-500"
                                ]
                            }}
                            shadow="md"
                        >
                            <CardBody>
                                <TextTable columns2={columns2} rows2={rows2} getInputComponent={getInputComponent} />
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="videos" title="Customize Card">
                        <Card
                            classNames={{
                                base: [
                                    "w-auto bg-caribbean-500"
                                ]
                            }}
                            shadow="lg"
                        >
                            <CardBody>
                                <CustomizeCard columns={columns} rows={rows} getInputComponent={getInputComponent} />
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}

export default Sidebar


const PredefinedCard = () => {

    const { updateCard } = useCardStore();


    const predefinedCards = [

        {
            key: "cardBase",
            label: "Card Base"
        },
        {
            key: "card_01",
            label: "ABO"
        },
        {
            key: "card_02",
            label: "Liss Coombs"
        },
        {
            key: "card_03",
            label: "Profile 3"
        },
        {
            key: "card_04",
            label: "Rh + K"
        },
        {
            key: "card_05",
            label: "Fractionated Coombs"
        },
        {
            key: "card_06",
            label: "Liss Coombs IgG"
        },
        {
            key: "card_07",
            label: "NaCl"
        }
    ]


    return (
        <Select
            label="Card Variant"
            className="max-w-xs w-52"
            onChange={(e) => updateCard(e.target.value)}
        >
            {predefinedCards.map((card) => (
                <SelectItem key={card.key}>
                    {card.label}
                </SelectItem>
            ))}
        </Select>
    )
}

const TextTable = ({ columns2, rows2, getInputComponent }) => {

    return (
        <Table
            aria-label=""
            classNames={{
                base: [
                    "max-w-md"
                ],
                td: [
                    "border border-gray-300",
                ],
                th: [
                    "text-center"
                ]
            }}
        >

            <TableHeader columns={columns2}>
                {(column) => <TableColumn className="bg-caribbean-100" key={column.key}>{column.label}</TableColumn>}
            </TableHeader>

            <TableBody items={rows2}>
                {(item) => (
                    <TableRow key={item.key} >
                        {(columnKey) => (
                            <TableCell className={`${columnKey == 'key' && ""}`} >
                                {
                                    getInputComponent(item, columnKey)
                                }
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

const CustomizeCard = ({ columns, rows, getInputComponent }) => {

    return (
        <Table
            aria-label="Example table with dynamic content"
            classNames={{
                td: [
                    "border border-gray-300"
                ],
                th: [
                    "text-center"
                ]
            }}
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn className="bg-caribbean-100" key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows} >
                {(item) => (
                    <TableRow key={item.key} >
                        {(columnKey) => (
                            <TableCell >
                                {
                                    getInputComponent(item, columnKey)
                                }
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}










const cardLevels = [
    { key: 0, label: "-" },
    { key: "w", label: "+/-" },
    { key: 1, label: "+" },
    { key: 2, label: "++" },
    { key: 3, label: "+++" },
    { key: 4, label: "++++" },
    { key: "DP", label: "DP" }
];

const CustomSelect = ({ value, onChange }) => {
    return (
        <Select
            label="Grade"
            className="max-w-xs"
            value={value}
            onChange={(e) => {
                console.log(e.target.value)
                return onChange(e.target.value)
            }
            }
        >
            {cardLevels.map((card) => (
                <SelectItem key={card.key}>
                    {card.label}
                </SelectItem>
            ))}
        </Select>
    );
};