import NavigatorContext from "./NavigatorContext";
import CarStrategy from "./CarStrategy";
import WalkingStrategy from "./WalkingStrategy";
import PublicTransportStrategy from "./PublicTransportStrategy";

class Test {
    public start(): void {
        // Navigator
        const navigator: NavigatorContext = new NavigatorContext();
        const startPoint: string = "New York";
        const destinationPoint: string = "Los Angeles";

        // Car strategy
        navigator.setRouteStrategy(new CarStrategy());
        navigator.execute(startPoint, destinationPoint);

        // Walking strategy
        navigator.setRouteStrategy(new WalkingStrategy());
        navigator.execute(startPoint, destinationPoint);

        // Public transport strategy
        navigator.setRouteStrategy(new PublicTransportStrategy());
        navigator.execute(startPoint, destinationPoint);
    }
}

new Test().start();