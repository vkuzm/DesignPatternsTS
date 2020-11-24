import Car from './Car';
import CarFactory from "./CarFactory";


class TestDrive {
    public static startTest(): void {
        const audi: Car = CarFactory.createCar('audi');
        const bmw: Car = CarFactory.createCar('bwm');
        const nissan: Car = CarFactory.createCar('nissan');

        audi.drive();
        audi.speedUp();

        bmw.drive();
        bmw.speedUp();

        nissan.drive();
        nissan.speedUp();
    }
}

export default TestDrive;