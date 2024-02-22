
interface Type {
    typeOfCrime: string;
}

interface TypeCollection {
    types: Type[];
}

export const typesOfIncidents: TypeCollection = {
    types: [
        {
            typeOfCrime: "Misshandel"
        },
        {
            typeOfCrime: "Trafikbrott"
        }
    ]   /* adding more soon */
}
