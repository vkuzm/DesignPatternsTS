import Observer from "./Observer";
import Observable from "./Observable";

class WeatherService implements Observable {
    private temperature: number = 0;
    private observers: Set<Observer> = new Set<Observer>();

    public add(observer: Observer): void {
        this.observers.add(observer)
    }

    public remove(observer: Observer): void {
        this.observers.delete(observer);
    }

    public notifyAll(): void {
        this.observers.forEach(observer => observer.update());
    }

    public getTemperature(): number {
        return this.temperature;
    }

    public setTemperature(temperature: number): void {
        this.temperature = temperature;
        this.notifyAll();
    }
}

export default WeatherService;