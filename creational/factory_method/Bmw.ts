import Car from './Car';

class Bmw implements Car {
  private nitro: boolean;

  constructor(nitro: boolean = false) {
    this.nitro = nitro;
  }

  drive(): void {
    console.log("BWM is driving");
  }

  speedUp(): void {
    console.log("BWM has sped up");
    if (this.nitro) {
      console.log("Nitro is on!!!");
    }
  }
}

export default Bmw;
