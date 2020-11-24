import Audi from "./Audi";
import Bmw from "./Bmw";
import Nissan from "./Nissan";
import Car from "./Car";

class CarFactory {
    public static createCar(carModel: string): Car {
        switch (carModel) {
            case 'audi':
                return new Audi();
            case 'bwm':
                return new Bmw();
            case 'nissan':
                return new Nissan();
            default:
                throw new Error('Car model for creating not found');
        }
    }
}

export default CarFactory;