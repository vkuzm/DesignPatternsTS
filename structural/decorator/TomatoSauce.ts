import Pizza from "./Pizza";
import ToppingDecorator from "./ToppingDecorator";

class TomatoSauceDecorator extends ToppingDecorator {
    constructor(pizza: Pizza) {
        super(pizza);

        console.log('Adding Tomato Sauce');
    }

    getDescription(): string {
        return super.getDescription() + ", Tomato Sauce";
    }

    getCost(): number {
        return super.getCost() + .25;
    }
}

export default TomatoSauceDecorator;