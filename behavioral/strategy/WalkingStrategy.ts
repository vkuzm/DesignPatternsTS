import RouteStrategy from "./RouteStrategy";

class WalkingStrategy implements RouteStrategy {
    buildRoute(startPoint: string, destinationPoint: string): string {
        return `The route for your walk was built from ${startPoint} to ${destinationPoint}`;
    }
}

export default WalkingStrategy;