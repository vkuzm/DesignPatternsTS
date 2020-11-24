import Observer from "./Observer";

interface Observable {
  add(observer: Observer): void;
  remove(observer: Observer): void;
  notifyAll(): void;
}

export default Observable;