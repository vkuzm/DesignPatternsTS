import Pizza from "./Pizza";

class ToppingDecorator implements Pizza {
    private tempPizza: Pizza;

    constructor(pizza: Pizza) {
        this.tempPizza = pizza;
    }

    getDescription(): string {
        return this.tempPizza.getDescription();
    }

    getCost(): number {
        return this.tempPizza.getCost();
    }
}

export default ToppingDecorator;