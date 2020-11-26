import Pizza from "./Pizza";
import PlainPizza from "./PlainPizza";
import MozzarellaDecorator from "./MozzarellaDecorator";
import TomatoSauceDecorator from "./TomatoSauce";

class Test {
    public start(): void {
        //const plainPizza: Pizza = new PlainPizza();
        //const mozzarella: Pizza = new MozzarellaDecorator(plainPizza);
        //const pizza: Pizza = new TomatoSauceDecorator(mozzarella);

        const pizza: Pizza = new TomatoSauceDecorator(new MozzarellaDecorator(new PlainPizza()));

        console.log('ingredients:', pizza.getDescription());
        console.log('cost:', pizza.getCost());
    }
}

new Test().start();