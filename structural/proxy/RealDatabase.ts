import Database from "./Database";
import User from "./User";

class RealDatabase implements Database {
    private users: Map<string, User> = new Map<string, User>();

    constructor() {
        console.log('Real object is initialized!');
        this.loadDataFromDatabase();
    }

    public getUsers(): User[] {
        return Array.from(this.users.values());
    }

    public getUserByName(name: string): User {
        return this.users.get(name);
    }

    private loadDataFromDatabase(): void {
        this.users.set('max', new User('Max', 18, 'New York'));
        this.users.set('brad', new User('Brad', 22, 'Los Angeles'));
        this.users.set('bill', new User('Bill', 66, 'New York'));
        this.users.set('angelo', new User('Angelo', 23, 'Texas'));
        this.users.set('andrew', new User('Andrew', 30, 'Miami'));
    }
}

export default RealDatabase;