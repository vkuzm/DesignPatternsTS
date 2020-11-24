import Dialog from './Dialog';
import Button from '../button/Button';
import WindowsButton from '../button/WindowsButton';

class WindowsDialog implements Dialog {
    renderWindow(): void {
        const okButton: Button = this.createButton();
        okButton.render();
    }

    createButton(): Button {
        return new WindowsButton();
    }
}

export default WindowsDialog;