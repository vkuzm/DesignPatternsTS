import User from "./User";

interface Database {
    getUsers(): User[];
    getUserByName(name: string): User;
}

export default Database;