import Dialog from './Dialog';
import Button from '../button/Button';
import HtmlButton from '../button/HtmlButton';

class HtmlDialog implements Dialog {
    renderWindow(): void {
        const okButton: Button = this.createButton();
        okButton.render();
    }

    createButton(): Button {
        return new HtmlButton();
    }
}

export default HtmlDialog;