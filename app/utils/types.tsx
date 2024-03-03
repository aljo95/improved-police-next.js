
interface Type {
    typeOfCrime: string;
    valueString: string;
}

interface TypeCollection {
    types: Type[];
}

export const typesOfIncidents: TypeCollection = {
    types: [
        {
            typeOfCrime: "Brand-Brand automatlarm",
            valueString: "Brand",
        },
        {
            typeOfCrime: "Misshandel-Bråk-Misshandel, grov",
            valueString: "Bråk, Misshandel",
        },
        {
            typeOfCrime: `Inbrott-Inbrott, försök-Rån-Rån väpnat-Rån övrigt-Rån, försök-
            Stöld-Stöld, försök-Stöld, ringa-Stöld/inbrott-Larm inbrott`,
            valueString: "Inbrott, Stöld, Rån",
        },
        {
            typeOfCrime: "Mord/dråp-Mord/dråp, försök",
            valueString: "Mord"
        },
        {
            typeOfCrime: `Trafikbrott-Trafikhinder-Trafikkontroll-Trafikolycka-Trafikolycka
            , personskada-Trafikolycka, singel-Trafikolycka, smitning från-Trafikolycka, vilt-Rattfylleri`,
            valueString: "Trafikbrott och olyckor",
        },
        {
            typeOfCrime: "Larm överfall-Våldtäkt-Våldtäkt, försök",
            valueString: "Våldtäkt, Överfall"
        },
        {
            typeOfCrime: `Sammanfattning dag-Sammanfattning dygn-Sammanfattning eftermiddag
            -Sammanfattning förmiddag-Sammanfattning helg-Sammanfattning kväll-Sammanfattning kväll och natt
            -Sammanfattning natt-Sammanfattning vecka`,
            valueString: "Sammanfattning",
        },
        {
            typeOfCrime: `Alkohollagen-Anträffad död-Anträffat gods-Arbetsplatsolycka-Bedrägeri-Bombhot
            -Detonation-Djur skadat/omhändertaget-Ekobrott-Farligt föremål, misstänkt-Fjällräddning
            -Fylleri/LOB-Förfalskningsbrott-Försvunnen person-Gränskontroll-Häleri-Knivlagen-Kontroll person/fordon
            -Lagen om hundar och katter-Miljöbrott-Missbruk av urkund
            -Motorfordon, anträffat stulet-Motorfordon, stöld-Narkotikabrott-Naturkatastrof
            -Ofog barn/ungdom-Ofredande/förargelse-Olaga frihetsberövande-Olaga hot-Olaga intrång/hemfridsbrott
            -Olovlig körning-Ordningslagen-Polisinsats/kommendering-Räddningsinsats-Sedlighetsbrott
            -Sjukdom/olycksfall-Sjölagen-Skadegörelse-Skottlossning-Skottlossning, misstänkt-Spridning smittsamma kemikalier
            -Tillfälligt obemannat-Uppdatering-Utlänningslagen-Vapenlagen-Varningslarm/haveri-Våld/hot mot tjänsteman
            -Vållande till kroppsskada`,
            valueString: "Övrigt",
        },
    ] 
}
