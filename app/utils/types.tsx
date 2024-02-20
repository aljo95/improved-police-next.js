
interface Product {
    typeOfCrime: string;
}

interface ProductCollection {
    products: Product[];
}


export const typesOfIncidents: ProductCollection = {
    products: [
        {
            typeOfCrime: "Misshandel"
        },
        {
            typeOfCrime: "Trafikbrott"
        }
    ]   /* adding more soon */
}

