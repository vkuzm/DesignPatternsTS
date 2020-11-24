import Car from './Car';

class Nissan implements Car {
  drive(): void {
    console.log('Nissan is driving');
  }

  speedUp(): void {
    console.log('Nissan has sped up')
  }
}

export default Nissan;
