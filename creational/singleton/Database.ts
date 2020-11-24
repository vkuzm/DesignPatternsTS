class Database {
    private static instance: Database = null;

    private constructor() {
    }

    public static getInstance(): Database {
        if (this.instance === null) {
            this.instance = new Database();
        }
        return this.instance;
    }

    public getConnection(): string {
        return 'connection to db';
    }
}

export default Database;