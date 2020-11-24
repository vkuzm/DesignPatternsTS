import RouteStrategy from "./RouteStrategy";

class NavigatorContext {
    private strategy: RouteStrategy;

    public setRouteStrategy(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    public execute(startPoint: string, destinationPoint: string) {
        const result: string = this.strategy.buildRoute(startPoint, destinationPoint);
        console.log(result);
    }
}

export default NavigatorContext;