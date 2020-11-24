import Car from "./Car";

class Nissan implements Car {
  private nitro: boolean;

  constructor(nitro: boolean = false) {
    this.nitro = nitro;
  }

  drive(): void {
    console.log("Nissan is driving");
  }

  speedUp(): void {
    console.log("Nissan has sped up");
    if (this.nitro) {
      console.log("Nitro is on!!!");
    }
  }
}

export default Nissan;
