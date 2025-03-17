'use client'
import { useState } from "react";
import { SimpleField } from "../components/surveyComponents/formFields"
import { SvgCheck } from "../components/surveyComponents/SvgCheck";
import { Pagination, PaginationItem, PaginationCursor } from "@heroui/pagination";
import { Textarea } from "@heroui/react";




const Encuesta = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Array de objetos con número de página y contenido JSX
    const pages = [
        { numberPage: 1, pageJSX: <PageOne /> },
        { numberPage: 2, pageJSX: <PageTwo /> }
    ];

    const handlePagination = (newPage) => {
        if (newPage >= 1 && newPage <= pages.length) {
            setCurrentPage(newPage); // Solo cambia si está en el rango válido
        }
    };

    return (
        <div className="w-full relative bg-zinc-50 pt-4">
            {/* Componente de paginación que puede moverse por las páginas */}
            <div className='w-full flex justify-center items-center mb-3'>
                <Pagination
                    initialPage={1}
                    color="primary"
                    variant="bordered"
                    total={pages.length}
                    onChange={(newPage) => handlePagination(newPage)}
                />
            </div>

            {/* Renderiza el contenido correspondiente a la página actual */}
            {pages.find(page => page.numberPage === currentPage)?.pageJSX}
        </div>
    );
};

export default Encuesta

const PageOne = () => {

    const [selected, setSelected] = useState(null);
    const [healthScheme, setHealthScheme] = useState(null);
    const [maritalStatus, setMaritalStatus] = useState(null);
    const [educationalLevel, setEducationalLevel] = useState(null);
    const [surveyUnderstanding, setSurveyUnderstanding] = useState(null);
    const [isRelationToPregnancy, setIsRelationToPregnancy] = useState(null);

    const handleCheckboxChange = (value) => {
        setSelected(value); // Guarda solo el valor del checkbox seleccionado
    };

    const handleSetHealthScheme = (value) => {
        setHealthScheme(value); // Guarda solo el valor del checkbox seleccionado
    };
    const handleSetMaritalStatus = (value) => {
        setMaritalStatus(value); // Guarda solo el valor del checkbox seleccionado
    };
    const handleEducationalLevel = (value) => {
        setEducationalLevel(value); // Guarda solo el valor del checkbox seleccionado
    };
    const handleSurveyUnderstanding = (value) => {
        setSurveyUnderstanding(value); // Guarda solo el valor del checkbox seleccionado
    };
    const handleRelationToPregnancy = (value) => {
        setIsRelationToPregnancy(value)
    }

    return (
        <>
            {/* FECHA DEL DILIGENCIAMIENTO */}
            <div className="max-w-5xl mx-auto bg-gray-200 border-2 my-2 border-neutral-600 pb-3">
                <div className="w-full border-b-2 border-neutral-600 px-3 py-1">
                    <h1 className="font-bold text-sm">FECHA DEL DILIGENCIAMIENTO DE LA ENCUESTA (DIA/MES/AÑO)</h1>
                </div>
                <div className="flex px-3 py-1 mt-2">
                    <span className="font-bold text-sm">SI</span>
                    <div className="w-8 h-6 mx-1 relative">

                        <input
                            type="checkbox"
                            //checked={selected === gender}
                            onChange={() => handleSurveyUnderstanding('si')}
                            className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                        {
                            surveyUnderstanding === 'si' &&
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                <SvgCheck />
                            </div>
                        }

                    </div>
                    <span className="font-semibold text-sm">Por favor continúe con la encuesta</span>
                </div>

                <div className="flex px-3 py-1">
                    <span className="font-bold text-sm">NO</span>
                    <div className="w-8 h-6 mx-1 relative">

                        <input
                            type="checkbox"
                            //checked={selected === gender}
                            onChange={() => handleSurveyUnderstanding('no')}
                            className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                        {
                            surveyUnderstanding === 'no' &&
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                <SvgCheck />
                            </div>
                        }

                    </div>
                    <span className="font-semibold text-sm">Antes de continuar con el diligenciamiento de la encuesta, lea la información y pregunte cualquier inquietud al personal del banco de sangre</span>
                </div>

            </div>

            {/* DATOS PERSONALES */}
            <div className="max-w-5xl mx-auto bg-gray-200 border-2 my-2 border-neutral-600 pb-10">
                <div className="w-full border-b-2 border-neutral-600">
                    <h1 className="text-center font-bold text-xl">DATOS PERSONALES</h1>
                </div>

                <div className="grid grid-cols-12 gap-1 px-4">

                    <SimpleField colSpan={7} label={'NOMBRES Y APELLIDOS'} number={1} />

                    {/* 🔹 Campo 2: Género con Grid Anidada */}
                    <div className="col-span-5 flex items-center">
                        <p className="text-neutral-800 font-semibold text-xs">
                            <span className="font-bold text-xs mr-2">2.</span>
                            GÉNERO
                        </p>
                        <div className="ml-2 flex items-center">
                            {
                                ['Femenino', 'Masculino', 'Otro'].map((gender, index) => (
                                    <div key={index} className="mr-1 flex relative items-center">
                                        <label className="text-xs mr-1 font-semibold">{gender}</label>
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={selected === gender}
                                                onChange={() => handleCheckboxChange(gender)}
                                                className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                                            {
                                                selected === gender &&
                                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                                    <SvgCheck />
                                                </div>
                                            }
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-12 gap-1 px-4 mt-0.5">

                    <SimpleField colSpan={6} number={3} label={'LUGAR DE NACIMIENTO'} />
                    <SimpleField colSpan={1} number={''} label={'DÍA'} small />
                    <SimpleField colSpan={1} number={''} label={'MES'} small />
                    <SimpleField colSpan={1} number={''} label={'AÑO'} small />
                    <SimpleField colSpan={1} number={4} label={'EDAD'} small />

                </div>

                <div className="flex gap-1 px-4 mt-2">

                    <div className="mr-2">
                        <p className="text-neutral-800 font-semibold text-xs whitespace-nowrap">
                            <span className="font-bold text-xs mr-2">5.</span>
                            TIPO DE DOCUMENTO
                        </p>
                    </div>


                    <label className="text-xs mr-1 font-semibold whitespace-nowrap flex items-center cursor-pointer">
                        CC
                        <input type="radio" name="document" className="ml-0.5" />
                    </label>

                    <label className="text-xs mr-1 font-semibold whitespace-nowrap flex items-center cursor-pointer">
                        T. de Identidad
                        <input type="radio" name="document" className="ml-0.5" />
                    </label>

                    <label className="text-xs mr-1 font-semibold whitespace-nowrap flex items-center cursor-pointer">
                        Cédula de Extranjería
                        <input type="radio" name="document" className="ml-0.5" />
                    </label>

                    <label className="text-xs mr-1 font-semibold whitespace-nowrap flex items-center cursor-pointer">
                        Pasaporte
                        <input type="radio" name="document" className="ml-0.5" />
                    </label>

                    <label className="text-xs mr-1 font-semibold whitespace-nowrap flex items-center cursor-pointer">
                        N° único de identificacion personal
                        <input type="radio" name="document" className="ml-0.5" />
                    </label>

                    <label className="text-xs mr-1 font-semibold whitespace-nowrap flex items-center cursor-pointer">
                        Libreta militar
                        <input type="radio" name="document" className="ml-0.5" />
                    </label>

                    <label className="text-xs mr-1 font-semibold whitespace-nowrap flex items-center cursor-pointer">
                        Otros
                        <input type="radio" name="document" className="ml-0.5" />
                    </label>

                </div>

                <div className="grid grid-cols-12 px-4 mt-1.5">
                    <SimpleField colSpan={6} number={6} label={'IDENTIFICACIÓN'} allBorder />
                </div>

                <div className="grid grid-cols-12 px-4 mt-1.5">
                    <SimpleField colSpan={3} number={7} label={'GRUPO SANGUÍNEO'} small />

                    <SimpleField colSpan={2} number={''} label={'FACTOR RH'} small />

                    <div className="col-span-5 flex items-center">
                        <p className="text-neutral-800 font-semibold text-xs whitespace-nowrap">
                            <span className="font-bold text-xs mr-2">2.</span>
                            ESTÁ AFILIADO A UN RÉGIMEN DE SALUD?
                        </p>
                        <div className="ml-2 flex items-center">
                            {
                                ['SI', 'NO'].map((option, index) => (
                                    <div key={index} className="mr-1 flex relative items-center">
                                        <label className="text-xs mr-1 font-semibold">{option}</label>
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={healthScheme === option}
                                                onChange={() => handleSetHealthScheme(option)}
                                                className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                                            {
                                                healthScheme === option &&
                                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                                    <SvgCheck />
                                                </div>
                                            }
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>



                </div>

                <div className="grid grid-cols-12 px-4 mt-1">
                    <SimpleField colSpan={6} number={9} label={'CUÁL'} />
                    <SimpleField colSpan={6} number={''} label={'IPS DE ATENCIÓN'} />
                </div>

                <div className="grid grid-cols-12 px-4 mt-1">

                    <div className="col-span-5 flex items-center">
                        <p className="text-neutral-800 font-semibold text-xs whitespace-nowrap">
                            <span className="font-bold text-xs mr-2">10.</span>
                            ESTADO CIVIL:
                        </p>
                        <div className="ml-2 flex items-center">
                            {
                                ['SOLTERO', 'CASADO', 'UNIÓN LIBRE'].map((option, index) => (
                                    <div key={index} className="mr-1 flex relative items-center">
                                        <label className="text-xs mr-1 font-semibold">{option}</label>
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={maritalStatus === option}
                                                onChange={() => handleSetMaritalStatus(option)}
                                                className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                                            {
                                                maritalStatus === option &&
                                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                                    <SvgCheck />
                                                </div>
                                            }
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className="col-span-5 flex items-center">
                        <p className="text-neutral-800 font-semibold text-xs whitespace-nowrap">
                            <span className="font-bold text-xs mr-2">11.</span>
                            NIVEL EDUCATIVO:
                        </p>
                        <div className="ml-2 flex items-center">
                            {
                                ['PRIMARIA', 'SECUNDARIA', 'SUPERIOR', 'NINGUNO'].map((option, index) => (
                                    <div key={index} className="mr-1 flex relative items-center">
                                        <label className="text-xs mr-1 font-semibold">{option}</label>
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={educationalLevel === option}
                                                onChange={() => handleEducationalLevel(option)}
                                                className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                                            {
                                                educationalLevel === option &&
                                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                                    <SvgCheck />
                                                </div>
                                            }
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-12 px-4 mt-1">
                    <SimpleField colSpan={12} label={'CIUDAD, MUNICIPIO DE LA DONACIÓN'} number={12} />
                </div>

                <div className="grid grid-cols-12 px-4 mt-1">
                    <SimpleField colSpan={8} label={'DIRECCIÓN DE RESIDENCIA'} number={13} />
                    <SimpleField colSpan={4} label={'BARRIO'} number={14} />
                </div>

                <div className="grid grid-cols-12 px-4 mt-1">
                    <SimpleField colSpan={3} label={'MUNICIPIO'} number={15} />
                    <SimpleField colSpan={3} label={'DEPARTAMENTO'} number={16} />
                    <SimpleField colSpan={3} label={'TÉLEFONO FIJO'} number={17} />
                    <SimpleField colSpan={3} label={'CELULAR'} number={18} />
                </div>

                <div className="grid grid-cols-12 px-4 mt-1">
                    <SimpleField colSpan={4} label={'OCUPACIÓN O EMPLEO'} number={15} />
                    <SimpleField colSpan={4} label={'TEL. TRABAJO'} number={16} />
                    <SimpleField colSpan={4} label={'CORREO ELECTRÓNICO'} number={17} />
                </div>

            </div >

            {/* ANTECEDENTES MEDICOS */}
            <div className="max-w-5xl mx-auto bg-gray-200 border-2 mt-2 border-neutral-600">
                <div className="w-full border-b-2 border-neutral-600">
                    <h1 className="text-center font-bold">ANTECEDENTES MEDICOS</h1>
                </div>
                <div className="w-full grid grid-cols-2">

                    <div className="w-full ">

                        <SingleBox number={1} label={` ¿Ha donado sangre o plaquetas anteriormente? `} />
                        <SingleBox label={` ¿Hace cuanto? Escriba la Fecha `} typeInput="text" />
                        <SingleBox label={` ¿En donde? `} typeInput="text" />
                        <SingleBox label={` ¿Ha tenido reacción adversa a la donación? `} />
                        <SingleBox label={` ¿Qué presentó? `} typeInput="text" />
                        <SingleBox number={2} label={` ¿Ha sido declarado alguna vez no apto para donar sangre? `} />
                        <SingleBox number={3} label={` ¿Se ha sentido bien de salud en las últimas (2) dos semanas? `} />
                        <SingleBox number={4} label={` ¿En los últimos 12 meses estuvo en tratamiento médico? ¿o le han realizado alguna cirugía? `} />
                        <SingleBox number={5} label={` ¿Alguna vez usted o su pareja han recibido transfusión, trasplante de órganos o tejidos? `} />
                        <SingleBox number={6} label={` ¿En los últimos 7 días le han realizado tratamientos dentales? `} />
                        <SingleBox number={7} borderDefault={false} label={` ¿Ha presentado alguno de los siguientes problemas de salud? Enfermedades de la sangre, corazón, trastornos mentales, diabetes, cáncer, enfermedades de pulmón, hipertensión o hipotensión?`} />
                        <SingleBox label={` ¿Cuál? `} typeInput="text" />
                        <SingleBox label={` ¿Mareos, desmayos o convulsiones? `} />
                        <SingleBox borderDefault={false} label={` ¿Alergias? `} />
                        <SingleBox typeInput="text" label={`¿A qué es alérgico? `} />
                        <SingleBox number={8} borderDefault={false} label={` En el últmo mes ¿ha tomado algún medicamento? `} />
                        <SingleBox typeInput="text" label={`¿Cuál? `} />
                        <SingleBox number={9} borderDefault={false} label={`¿En los últimos seis (6) meses ha presentado alguno de los siguientes sintomas? Pérdida inexplicable de peso `} />
                        <SingleBox borderDefault={false} label={`Diarrea frecuente no controlable`} />
                        <SingleBox borderDefault={false} label={`Sudoración nocturna`} />
                        <SingleBox borderDefault={false} label={`Tos persistente (por más de dos semanas)`} />
                        <SingleBox borderDefault={false} label={`Inflamación permanente de los ganglios`} />
                        <SingleBox borderDefault={false} label={`Manchas o lesiones en la piel o mucosas`} />
                        <SingleBox label={`Fiebre`} />
                        <SingleBox number={10} borderDefault={false} label={`¿Ha sido vacunado el último año?`} />
                        <SingleBox typeInput="text" label={`¿Qué vacunas recibió?`} />
                        <SingleBox number={11} label={`¿En los últimos 15 días ha convivido, o tuvo contacto directo con una persona con diagnóstico confirmado o sospecha de SARS, MERS o COVID-19?`} />
                        <SingleBox number={12} label={`¿En los últimos 28 días ha presentado fiebre y síntomas de enfermedades de vías respiratorias inferiores, o ha sido confirmado con su diagnóstico para COVID-19?`} />
                        <div className="w-full h-40 flex items-center justify-center">
                            <span className="text-gray-500/40 font-bold text-5xl">STICKER</span>
                        </div>



                    </div>
                    <div className="w-full border-l-2 border-neutral-600 ">
                        <div className="w-full text-xs font-semibold text-center border-b-2 px-2 py-1 h-20 flex items-center">
                            APRECIADO DONANTE: CON LAS PREGUNTAS QUE VIENEN A CONTINUACIÓN BUSCAMOS ASEGURAR QUE LOS PACIENTES QUE VAN A RECIBIR SU SANGRE, NO VAN A CORRER RIESGO DE CONTRAER UNA ENFERMEDAD INFECCIOSA A TRAVÉS DE LA TRANSFUSIÓN
                        </div>
                        <SingleBox number={13} label={`¿Ha tenido una nueva pareja en los últimos seis (6) meses?`} />
                        <SingleBox number={14} label={`¿Ha tenido relaciones sexuales con personas pertenecientes a alguna de estas poblaciones clave?\n Trabajadores sexuales`} />
                        <SingleBox label={`Habitantes de calle`} />
                        <SingleBox label={`Personas que se inyectan drogas`} />
                        <SingleBox number={15} label={`¿Ha recibido sustancias psicoactivas o dinero a cambio de relaciones sexuales en los últimos 12 meses?`} />
                        <SingleBox number={16} label={`¿Ha tenido relaciones sexuales con personas diagnosticadas con VIH, Hepatitis B, Hepatitis C, HTLV I-II o Sífilis?`} />
                        <SingleBox number={17} label={`En los últimos 12 meses, usted o su pareja han estado privados de la libertad?`} />
                        <SingleBox number={18} label={`¿Usó marihuana, cocaína, heroína, bazuco o alguna sustancia psicoactiva o algún otro estimulante o alucinógeno?`} />
                        <SingleBox number={19} label={`¿Tuvo o ha sido tratado para sífilis, gonorrea, herpes genital, condiloma, u otra enfermedad de transmisión sexual?`} />
                        <SingleBox number={20} label={`¿Tuvo o ha sido tratado para SIDA, Hepatitis B, ó C, HTLV I-II ó Chagas?`} />
                        <SingleBox number={21} label={`¿En los últimos seis (6) meses le han practicado acupuntura, tatuajes, perforaciones de oreja, piercing, maquillaje permantente u otros procedimientos similares?`} />
                        <SingleBox number={22} label={`¿En el último mes ha padecido alguna enfermedad contagiosa o ha estado en contacto con personas que padezcan sarampión, rubeola, paperas o varicela?`} />
                        <SingleBox number={23} label={`¿En los últimos seis (6) meses ha tenido accidentes de riesgo biológico, contacto con sangre, liquidos corporales, pinchazos con agujas contaminadas?`} />
                        <SingleBox number={24} borderDefault={false} label={`¿Alguna vez en su vida se ha enfermado o recibido tratamiento para Paludismo, Leishmaniasis, Fiebre Amarilla, dengue, Zika o Chikunguya?`} />
                        <SingleBox typeInput="text" label={`¿Cuál? `} />
                        <SingleBox number={25} label={`¿En los últimos dos (2) años ha visitado zonas donde hay paludismo, Leishmaniasis, Fiebre Amarilla o Dengue?`} />
                        <SingleBox number={26} label={`¿Ha tenido enfermedad de chagas o ha estado en zonas donde habita el insecto pito, chinche picudo, besador, rondador o chupa sangre?`} />
                        <SingleBox number={27} borderDefault={false} label={`¿Ha vivido fuera del país o la ciudad donde reside actualmente?`} />
                        <SingleBox typeInput="text" borderDefault={false} label={`¿Cuál? `} />
                        <SingleBox typeInput="text" label={`¿Hace cuanto? `} />
                        <SingleBox number={28} label={`¿Leyó y comprendió el cuestionario?`} />
                        <SingleBox borderDefault={false} label={`¿Fueron contestadas sus dudas al respecto?`} />
                        <SingleBox typeInput="text" number={29} label={`¿Qué actividades realizará después de la donación?`} />
                    </div>

                </div>
            </div>
            {/* SI ES MUJER... */}
            <div className="max-w-5xl mx-auto bg-gray-200 border-2 mt-2 border-neutral-600 mb-20">

                <div className="w-full mb-2 border-b-2 border-neutral-600">
                    <h1 className="text-center font-bold text-lg">SI USTED ES MUJER POR FAVOR DILIGENCIE ESTA PARTE DEL FORMATO</h1>
                </div>

                <div className="grid grid-cols-12 gap-1 px-4 mt-0.5">

                    <SimpleField colSpan={6} number={30} label={'Fecha de su última menstruación (día, mes, año)'} />
                    <div className='col-span-1'></div>
                    <SimpleField colSpan={2} number={31} label={'¿Cuántos embarazos?'} small />
                    <SimpleField colSpan={1} number={''} label={'Partos'} small />
                    <SimpleField colSpan={1} number={''} label={'Cesáreas'} small />
                    <SimpleField colSpan={1} number={''} label={'Abortos'} small />

                </div>
                <div className="grid grid-cols-12 px-4 mt-1.5">

                    <div className="col-span-8 flex items-center">
                        <p className="text-neutral-800 font-semibold text-xs whitespace-nowrap">
                            <span className="font-bold text-xs mr-2">32.</span>
                            ¿Está embarazada, lactando o ha tenido abortos, legrados, partos o cesárea en el último año?
                        </p>
                        <div className="ml-2 flex items-center">
                            {
                                ['SI', 'NO'].map((option, index) => (
                                    <div key={index} className="mr-1 flex relative items-center">
                                        <label className="text-xs mr-1 font-semibold">{option}</label>
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={isRelationToPregnancy === option}
                                                onChange={() => handleRelationToPregnancy(option)}
                                                className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                                            {
                                                isRelationToPregnancy === option &&
                                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                                    <SvgCheck />
                                                </div>
                                            }
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-span-2 flex items-center'></div>
                    <SimpleField colSpan={2} number={''} label={'¿Cuál?'} small />

                </div>

            </div>
        </>

    )

}

const PageTwo = () => {

    const [isSuitable, setIsSuitable] = useState(null);
    const [recommendationsGiven, setRecommendationsGiven] = useState(null);

    const options = [
        {
            suitable: 'SI',
            text: 'APTO'
        },
        {
            suitable: 'NO',
            text: 'NO APTO'
        }
    ]

    const handleSuitable = (option) => {
        setIsSuitable(option)
    }

    const handleRecomendations = (option) => {
        setRecommendationsGiven(option)
    }
    return (
        <>
            <div className="max-w-5xl mx-auto bg-gray-200 border-2 my-2 border-neutral-600 pb-3">
                <div className="w-full border-b-2 border-neutral-600">
                    <h1 className="text-center font-bold text-xl">PARA DILIGENCIAMIENTO POR PARTE DEL PERSONAL DE BANCO DE SANGRE</h1>
                </div>
                <div className="w-full border-b-2 border-neutral-600">
                    <p className="text-center text-sm">Calidad y consistencia de las respuestas, aspecto general, comportamiento y actitud del donante potencial</p>
                    <div className="ml-2 flex items-center justify-center">
                        {
                            options.map((option, index) => (
                                <div key={index} className="mr-1 flex relative items-center">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={isSuitable === option.suitable}
                                            onChange={() => handleSuitable(option.suitable)}
                                            className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                                        {
                                            isSuitable === option.suitable &&
                                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                                <SvgCheck />
                                            </div>
                                        }
                                    </div>
                                    <label className="text-xs mr-1 font-semibold">{option.text}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="w-full border-b-2 border-neutral-600 pl-3">

                    <div className="col-span-5 flex items-center">
                        <p className="text-neutral-800 font-bold text-sm whitespace-nowrap">
                            Se dan recomendaciones posdonación
                        </p>
                        <div className="ml-2 flex items-center">
                            {
                                ['SI', 'NO'].map((option, index) => (
                                    <div key={index} className="mr-1 flex relative items-center">
                                        <label className="text-xs mr-1 font-semibold">{option}</label>
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={recommendationsGiven === option}
                                                onChange={() => handleRecomendations(option)}
                                                className="appearance-none cursor-pointer w-8 h-6 bg-transparent border-b hover:border border-neutral-800 focus:outline-none" />
                                            {
                                                recommendationsGiven === option &&
                                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5">
                                                    <SvgCheck />
                                                </div>
                                            }
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>


                <div className="w-full border-b-2 border-neutral-600 px-2 py-3">
                    <Textarea
                        className="max-w-2xl"
                        label="Ingresa aquí tus observaciones"
                        placeholder=""
                    />
                    <div className="w-full grid grid-cols-12 px-2">

                        <div className="col-span-4 h-32 flex flex-col justify-between mt-4 border border-neutral-900 p-2">
                            <h3 className="text-xs font-semibold text-center">VERIFICACIÓN SIHEVI Y SOFTWARE BANCO DE SANGRE</h3>
                            <div className="w-full px-4">
                                <p className="w-full border-t text-xs border-neutral-800 font-semibold text-center">Firma</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

const SingleBox = ({ number = '', label, typeInput = 'checkbox', borderDefault = true }) => {

    const [isChecked, setIsChecked] = useState();


    const handleChecked = (option) => {
        console.log("hola")
        setIsChecked(option)
    }

    return (
        <div className={`w-full flex min-h-5 items-center pl-2 ${borderDefault ? 'border-b-1.5' : ''}  border-neutral-600`}>
            <p className="text-neutral-800  text-xs">
                {number && <span className="font-bold text-xs mr-2">{number}.</span>}
                {label}
            </p>

            {
                typeInput == 'text' ?
                    <div className=" px-3 flex-grow">

                        <input className="text-xs w-full px-3 bg-transparent border-dotted rounded border-1 border-neutral-600 focus:outline-none h-4" type="text" />

                    </div>
                    :
                    <div className="w-12 flex mr-1 ml-auto mt-auto">
                        <div className=" w-6 h-5 relative">
                            <label className="flex w-6 h-5 items-center justify-center text-neutral-800 font-bold text-xs cursor-pointer border-collapse: collapse; border-1   border-neutral-700">
                                SI
                                <input type="checkbox" className="appearance-none" onChange={() => handleChecked('si')} />
                            </label>
                            {
                                isChecked === 'si' &&
                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-5 bg-slate-500/80">
                                    <SvgCheck />
                                </div>
                            }
                        </div>

                        <div className=" w-6 h-5 relative">
                            <label className="flex w-6 h-5 items-center justify-center text-neutral-800 font-bold text-xs cursor-pointer border-collapse: collapse; border-1   border-neutral-700">
                                NO
                                <input type="checkbox" className="appearance-none" onChange={() => handleChecked('no')} />
                            </label>
                            {
                                isChecked === 'no' &&
                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-5 bg-slate-500/80">
                                    <SvgCheck />
                                </div>
                            }
                        </div>
                    </div>
            }



        </div>
    )
}