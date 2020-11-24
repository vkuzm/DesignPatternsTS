import CarFactory from "./CarFactory";
import CommonCarFactory from "./CommonCarFactory";
import SportCarFactory from "./SportCarFactory";
import Car from "./Car";

class TestDrive {
  public static startTest(): void {
    // Common Car Factory
    const commonCarFactory: CarFactory = new CommonCarFactory();
    const bmw: Car = commonCarFactory.createCar("bwm");
    const nissan: Car = commonCarFactory.createCar("nissan");

    bmw.drive();
    bmw.speedUp();
    nissan.drive();
    nissan.speedUp();


    // Sport Car Factory
    const sportCarFactory: CarFactory = new SportCarFactory();
    const audiSport: Car = sportCarFactory.createCar("audi");
    const bmwSport: Car = sportCarFactory.createCar("bwm");

    audiSport.drive();
    audiSport.speedUp();
    bmwSport.drive();
    bmwSport.speedUp();
  }
}

export default TestDrive;