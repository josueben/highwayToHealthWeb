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
