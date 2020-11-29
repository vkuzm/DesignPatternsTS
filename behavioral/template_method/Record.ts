abstract class Record {
    public save(): void {
      if (this.validation()) {
          this.beforeSave();

          // Code that saves the data to the database
          console.log('Saving the data into the database: ', this.modelData());

          this.afterSave();
      } else {
          this.failedValidation();
      }
  }

  public abstract modelData(): Record;
  public abstract validation(): boolean;
  public abstract failedValidation(): void;
  public beforeSave(): void {}
  public afterSave(): void {}
}

export default Record;