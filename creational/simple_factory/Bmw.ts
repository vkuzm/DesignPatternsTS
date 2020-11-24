import Car from './Car';

class Bmw implements Car {
    drive(): void {
        console.log('BWM is driving');
    }

    speedUp(): void {
        console.log('BWM has sped up')
    }
}

export default Bmw;
