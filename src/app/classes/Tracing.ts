export class Tracing {
    idUser: number;
    weight: number;
    date: string;
    calories: number;

    constructor(_idUser: number, _weight: number, _date: string, _calories: number) {
        this.idUser = _idUser;
        this.weight = _weight;
        this.date = _date;
        this.calories = _calories;
    }
}
