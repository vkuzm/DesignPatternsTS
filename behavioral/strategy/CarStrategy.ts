import RouteStrategy from "./RouteStrategy";

class CarStrategy implements RouteStrategy {
    buildRoute(startPoint: string, destinationPoint: string): string {
        return `The route for your car was built from ${startPoint} to ${destinationPoint}`;
    }
}

export default CarStrategy;