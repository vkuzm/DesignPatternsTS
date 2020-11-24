import Database from "./Database";

class Main {
    constructor() {
        const databaseConnection = Database.getInstance().getConnection();
        console.log(databaseConnection);
    }
}

new Main();