import ArrayApi from "./ArrayApi";
import ExternalArrayApi from "./ExternalArrayApi";

class AdapterArrayApi<T> implements ArrayApi<T> {
  private externalArrayApi: ExternalArrayApi<T>;

  constructor(externalArrayApi: ExternalArrayApi<T>) {
    this.externalArrayApi = externalArrayApi;
  }

  createNewArray(callback: (element: T) => any): T[] {
    return this.externalArrayApi.map(callback);
  }

  getFirst(): T {
    return this.externalArrayApi.findFirst();
  }

  iterateAll(callback: (element: T, index: number) => void): void {
    this.externalArrayApi.forEach(callback);
  }
}

export default AdapterArrayApi;
