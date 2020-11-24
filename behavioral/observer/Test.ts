import PhoneDevice from "./PhoneDevice";
import WeatherService from "./WeatherService";
import PCDevice from "./PCDevice";

class Test {
    public start(): void {
        const weatherService: WeatherService = new WeatherService();
        const phoneDevice: PhoneDevice = new PhoneDevice(5543, weatherService);
        const phoneDevice2: PhoneDevice = new PhoneDevice(42323, weatherService);
        const pcDevice: PCDevice = new PCDevice(1323, weatherService);

        weatherService.add(phoneDevice);
        weatherService.add(phoneDevice2);
        weatherService.add(pcDevice);

        setInterval(() => {
            return weatherService.setTemperature(weatherService.getTemperature() + 10);
        }, 3000);
    }
}

new Test().start();