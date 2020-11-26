import Pizza from "./Pizza";
import ToppingDecorator from "./ToppingDecorator";

class MozzarellaDecorator extends ToppingDecorator {
    constructor(pizza: Pizza) {
        super(pizza);

        console.log('Adding Dough');
        console.log('Adding Mozzarella');
    }

    getDescription(): string {
        return super.getDescription() + ", Mozzarella";
    }

    getCost(): number {
        return super.getCost() + .50;
    }
}

export default MozzarellaDecorator;