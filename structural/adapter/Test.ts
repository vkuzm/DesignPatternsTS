import ArrayApiImpl from "./ArrayApiImpl";
import ArrayApi from "./ArrayApi";
import AdapterArrayApi from "./AdapterArrayApi";
import ExternalArrayApi from "./ExternalArrayApi";

class Test {
    public withoutAdapter(): void {
        const users: string[] = ['Nick', 'Mice', 'John', 'Lex', 'Alex'];
        const arrayApi: ArrayApi<string> = new ArrayApiImpl<string>(users);

        // Iterate all
        arrayApi.iterateAll((element, index) => {
            console.log(index, element);
        });

        // Find first
        const firstUser: string = arrayApi.getFirst();
        console.log(firstUser);

        // New array
        const newUsers: string[] = arrayApi.createNewArray(userName => {
            return 'Name: ' + userName;
        });
        console.log(newUsers);
    }

    public withAdapter(): void {
        const users: string[] = ['Nick', 'Mice', 'John', 'Lex', 'Alex'];
        const externalArrayApi: ExternalArrayApi<string> = new ExternalArrayApi<string>(users);

        const adapter: AdapterArrayApi<string> = new AdapterArrayApi<string>(externalArrayApi);

        // Iterate all
        adapter.iterateAll((element, index) => {
            console.log(index, element);
        });

        // Find first
        const firstUser: string = adapter.getFirst();
        console.log(firstUser);

        // New array
        const newUsers: string[] = adapter.createNewArray(userName => {
            return 'Name: ' + userName;
        });
        console.log(newUsers);
    }
}

//new Test().withoutAdapter();
new Test().withAdapter();