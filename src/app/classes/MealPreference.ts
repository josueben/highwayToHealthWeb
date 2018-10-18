export class MealPreference {
    id_user: number;
    id_meal: number;
    hour: string;

    constructor(_idUser: number, _idMeal: number, _hour: string) {
        this.id_user = _idUser;
        this.id_meal = _idMeal;
        this.hour = _hour;
    }
}
