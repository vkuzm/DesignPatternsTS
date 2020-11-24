import Car from "./Car";

interface CarFactory {
    createCar(carModel: string): Car;
}

export default CarFactory;