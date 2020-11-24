import Car from "./Car";

class Audi implements Car {
  drive(): void {
    console.log('Audi is driving');
  }

  speedUp(): void {
    console.log('Audi has sped up')
  }
}

export default Audi;