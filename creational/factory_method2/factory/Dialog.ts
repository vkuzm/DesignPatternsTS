import Button from "../button/Button";

interface Dialog {
  renderWindow(): void;
  createButton(): Button;
}

export default Dialog;
