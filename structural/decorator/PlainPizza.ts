import Pizza from "./Pizza";

class PlainPizza implements Pizza {
    getCost(): number {
        return 2.0;
    }

    getDescription(): string {
        return "Thin Dough";
    }
}

export default PlainPizza;