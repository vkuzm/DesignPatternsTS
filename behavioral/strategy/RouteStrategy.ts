interface RouteStrategy {
    buildRoute(startPoint: string, destinationPoint: string): string
}

export default RouteStrategy;