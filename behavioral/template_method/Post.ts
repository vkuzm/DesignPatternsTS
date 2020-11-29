import Record from "./Record";

class Post extends Record {
    private readonly title: string;
    private readonly text: string;

    constructor(title: string, text: string) {
        super();
        this.title = title;
        this.text = text;
    }

    modelData(): Record {
        return this;
    }

    validation(): boolean {
        return this.title !== '' || this.text !== '';
    }

    failedValidation(): void {
        console.log('Post in invalid! Please check post title or post text.');
    }
}

export default Post;