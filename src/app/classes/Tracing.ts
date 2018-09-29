export class Tracing {
    idUser: number;
    weight: number;
    date: string;

    constructor(_idUser: number, _weight: number, _date: string) {
        this.idUser = _idUser;
        this.weight = _weight;
        this.date = _date;
    }
}
