import Button from './Button';

class HtmlButton implements Button {
    render(): void {
        console.log('<button>Test Button</button>');
        this.onClick();
    }

    onClick(): void {
        console.log('Click on HTML button')
    }
}

export default HtmlButton;