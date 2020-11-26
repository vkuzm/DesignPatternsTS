import ArrayApi from "./ArrayApi";

class ArrayApiImpl<T> implements ArrayApi<T> {
  private readonly array: T[];

  constructor(array: T[]) {
    this.array = array;
  }

  iterateAll(callback: (element: T, index: number) => void): void {
    let i = 0;
    for (let a of this.array) {
      callback(a, i++);
    }
  }

  getFirst(): T {
    return this.array[0];
  }

  createNewArray(callback: (element: T) => any): T[] {
    const newArray: T[] = [];
    for (let a of this.array) {
      newArray.push(callback(a));
    }
    return newArray;
  }
}

export default ArrayApiImpl;
