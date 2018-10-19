export class Food {
    id: number;
    name: string;
    kind: number;
    portion: string;
    unity: string;
    net_weight: number;
    calories: number;
    protein: number;
    lipids: number;
    cho: number;

    constructor(_id: number, _name: string, _kind: number, _portion: string, _unity: string,
    _net_weight: number, _calories: number, _protein: number, _lipids: number, _cho: number
    ) {
        this.id = _id;
        this.name = _name;
        this.kind = _kind;
        this.portion = _portion;
        this.unity = _unity;
        this.net_weight = _net_weight;
        this.calories = _calories;
        this.protein = _protein;
        this.lipids = _lipids;
        this.cho = _cho;
    }
}

