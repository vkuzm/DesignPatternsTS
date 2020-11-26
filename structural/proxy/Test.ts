import Database from "./Database";
import LazyDatabaseProxy from "./LazyDatabaseProxy";

class Test {
    public start(): void {
        const database: Database = new LazyDatabaseProxy();

        console.log('users', database.getUsers());
        console.log('user by name', database.getUserByName('bill'));
    }
}

new Test().start();