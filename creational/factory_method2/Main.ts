import Dialog from './factory/Dialog';
import WindowsDialog from './factory/WindowsDialog';
import HtmlDialog from './factory/HtmlDialog';

class Main {
  private env: string = "windows";
  private dialog: Dialog;

  constructor() {
      this.configure();
      this.runBusinessLogic();
  }

  private configure(): void {
      if (this.env === "windows") {
          this.dialog = new WindowsDialog();
      } else {
          this.dialog = new HtmlDialog();
      }
  }

  private runBusinessLogic(): void {
      this.dialog.renderWindow();
  }
}

new Main();


