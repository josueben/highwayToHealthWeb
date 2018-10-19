export class FoodPreferenceAnswer {
    id: number;
    name: string;
    kind: number;

    constructor(_id: number, _name: string, _kind: number) {
        this.id = _id;
        this.name = _name;
        this.kind = _kind;
    }
}

export class FoodPreferencePost {
    id_user: number;
    id_food: number;

    constructor(_id_user: number, _id_food: number) {
        this.id_user = _id_user;
        this.id_food = _id_food;
    }
}
