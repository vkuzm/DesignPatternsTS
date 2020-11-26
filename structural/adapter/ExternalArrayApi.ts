class ExternalArrayApi <T> {
    private readonly array: T[];

    constructor(array: T[]) {
        this.array = array;
    }

    forEach(callback: (element: T, index: number) => void): void {
        this.array.forEach((value, index) => {
            return callback(value, index);
        })
    }

    findFirst(): T {
        return this.array.find(value => value !== null);
    }

    map(callback: (element: T) => any): T[] {
        return this.array.map(callback);
    }
}

export default ExternalArrayApi;