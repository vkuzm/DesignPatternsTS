import Observer from "./Observer";
import WeatherService from "./WeatherService";

class PCDevice implements Observer {
    private readonly deviceId: number;
    private weatherService: WeatherService;

    constructor(deviceId: number, weatherService: WeatherService) {
        this.deviceId = deviceId;
        this.weatherService = weatherService;
    }

    update(): void {
        const temperature: string = this.weatherService.getTemperature() + "C";
        console.log(`PC device ID: ${this.deviceId} received ${temperature}`);
    }
}
export default PCDevice;