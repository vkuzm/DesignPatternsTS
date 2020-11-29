import Record from "./Record";

class User extends Record {
    private readonly name: string;
    private readonly age: number;

    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age;
    }

    modelData(): Record {
        return this;
    }

    validation(): boolean {
       return this.name !== '' || this.age === 0;
    }

    failedValidation(): void {
        console.log('User is invalid! Please check user name or user age.');
    }

    beforeSave(): void {
        // simple logging before saving model but could be more complex logic in here
        console.log('Logger: User model is valid and ready to save the data into the database');
    }

    afterSave(): void {
        // simple logging after saving model but could be more complex logic in here
        console.log('Logger: User model is successfully saved into the database');
    }
}

export default User;