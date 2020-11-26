import Database from "./Database";
import RealDatabase from "./RealDatabase";
import User from "./User";

class LazyDatabaseProxy implements Database {
    private realDatabase: RealDatabase = null;

    constructor() {
        console.log('Proxy object is initialized!');
    }

    getUsers(): User[] {
        this.instantiateRealObject();
        return this.realDatabase.getUsers();
    }

    getUserByName(name: string): User {
        this.instantiateRealObject();
        return this.realDatabase.getUserByName(name);
    }

    private instantiateRealObject() {
        if (this.realDatabase === null) {
            this.realDatabase = new RealDatabase();
        }
    }
}

export default LazyDatabaseProxy;