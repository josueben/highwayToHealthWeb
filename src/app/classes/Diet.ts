export class Diet {
    purpose: string;
    calories:  number;
    date: string;

    constructor( _purpose: string, _calories: number, _date: string) {
        this.purpose = _purpose;
        this.calories = _calories;
        this.date = _date;
    }
}

export class DietPost {
    id_user: number;
    purpose: string;
    sex: string;
    age: number;
    weight: number;
    height: number;
    activity: string;
}

export class DietAnswer {
    Verduras: number;
    Frutas: number;
    CerealesSG: number;
    CerealesCG: number;
    Leguminosas: number;
    AOAMuyBajoEnGrasa: number;
    AOABajoEnGrasa: number;
    AOAModeradoEnGrasa: number;
    AOAAltoEnGrasa: number;
    LecheDescremada: number;
    LecheSemidescremada: number;
    LecheEntera: number;
    LecheConAzucar: number;
    AceitesGrasasCP: number;
    AceitesGrasasSP: number;
    AzucaresSinGrasa: number;
    AzucaresConGrasa: number;
    AlimentosLibresDeEnergia: number;
    Calorias: number;
    Proteinas: number;
    Lipidos: number;
    HCO: number;
}
