import CarFactory from "./CarFactory";
import Audi from "./Audi";
import Bmw from "./Bmw";
import Car from "./Car";

class SportCarFactory implements CarFactory {
    public createCar(carModel: string): Car {
        switch (carModel) {
            case 'audi':
                return new Audi(true);
            case 'bwm':
                return new Bmw(true);
            default:
                throw new Error('Car model for creating not found');
        }
    }
}

export default SportCarFactory;