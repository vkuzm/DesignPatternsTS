interface ArrayApi<T> {
    iterateAll(callback: (element: T, index: number) => void): void;
    getFirst(): T;
    createNewArray(callback: (element: T) => any): T[];
}

export default ArrayApi;