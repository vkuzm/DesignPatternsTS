import User from "./User";
import Post from "./Post";

class Test {
    public start() {
        console.log('#1 -------------');
        const user: User = new User('Peter', 18);
        user.save();

        console.log('\n#2 -------------');
        const user2: User = new User('', 25);
        user2.save();

        console.log('\n#3 -------------');
        const post: Post = new Post('Post title', 'Text text text');
        post.save();
    }
}

new Test().start();