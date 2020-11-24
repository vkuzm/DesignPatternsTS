import RouteStrategy from "./RouteStrategy";

class PublicTransportStrategy implements RouteStrategy {
    buildRoute(startPoint: string, destinationPoint: string): string {
        return `The route for your public transport was built from ${startPoint} to ${destinationPoint}`;
    }
}

export default PublicTransportStrategy;