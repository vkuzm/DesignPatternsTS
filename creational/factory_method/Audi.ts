import Car from "./Car";

class Audi implements Car {
  private nitro: boolean;

  constructor(nitro: boolean = false) {
    this.nitro = nitro;
  }

  drive(): void {
    console.log("Audi is driving");
  }

  speedUp(): void {
    console.log("Audi has sped up");
    if (this.nitro) {
      console.log("Nitro is on!!!");
    }
  }
}

export default Audi;
