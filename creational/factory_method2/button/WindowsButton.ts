import Button from './Button';

class WindowsButton implements Button {
    render(): void {
        console.log('<windows-button>test button</windows-button>');
        this.onClick();
    }

    onClick(): void {
        console.log('Click on windows button')
    }
}

export default WindowsButton;