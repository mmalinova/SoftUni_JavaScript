class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length < 1) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        for (const user of this._likes) {
            if (user === username) {
                throw new Error('You can\'t like the same story twice!');
            }
        }
        if (this.creator === username) {
            throw new Error('You can\'t like your own story!');
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        for (const user of this._likes) {
            if (user === username) {
                let index = this._likes.indexOf(user);
                this._likes.splice(index, 1);
                return `${username} disliked ${this.title}`;
            }
        }
        throw new Error('You can\'t dislike this story!');
    }

    comment(username, content, id) {
        for (const comment of this._comments) {
            if (comment.id === id) {
                let reply = { id: Number(id + '.' + (comment.replies.length + 1)), username, content }; //{Id, Username, Content}

                comment.replies.push(reply);
                return 'You replied successfully';
            }
        }
        let newComment = { id: Number(this._comments.length + 1), username, content, replies: [] }; //'{Id, Username, Content, [Replies]}'

        this._comments.push(newComment);
        return `${username} commented on ${this.title}`;

    }

    toString(sortingType) {
        let result = [];

        if (sortingType === 'desc') {
            this._comments.sort((a, b) => b.id - a.id);
        } else if (sortingType === 'username') {
            this._comments.sort((a, b) => a.username.localeCompare(b.username));
        }

        for (const comment of this._comments) {
            if (comment.replies.length <= 0) {
                result.push(`-- ${comment.id.toFixed(0)}. ${comment.username}: ${comment.content}`);
            } else {
                if (sortingType === 'desc') {
                    comment.replies.sort((a, b) => b.id - a.id);
                } else if (sortingType === 'username') {
                    comment.replies.sort((a, b) => a.username.localeCompare(b.username));
                }
                let replies = [];
                for (const reply of comment.replies) {
                    replies.push(`--- ${reply.id.toFixed(1)}. ${reply.username}: ${reply.content}`);
                }
                result.push(`-- ${comment.id.toFixed(0)}. ${comment.username}: ${comment.content}\n${replies.join('\n').trim()}`);
            }
        }

        return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n${result.join('\n').trim()}`;
    }
}

let art = new Story('My Story', 'Anny');
art.like('John');
console.log(art.likes);
art.dislike('John');
console.log(art.likes);
art.comment('Sammy', 'Some Content');
console.log(art.comment('Ammy', 'New Content'));
art.comment('Zane', 'Reply', 1);
art.comment('Jessy', 'Nice :)');
console.log(art.comment('SAmmy', 'Reply@', 1));
console.log();
console.log(art.toString('username'));
console.log();
art.like('Zane');
console.log(art.toString('desc'));

// John likes this story!
// My Story has 0 likes
// Ammy commented on My Story
// You replied successfully

// Title: My Story
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply

// Title: My Story
// Creator: Anny
// Likes: 1
// Comments:
// -- 3. Jessy: Nice :)
// -- 2. Ammy: New Content
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply


//const Story = result;
art = new Story('My Story', 'Anny');
console.log(art.like('John'), 'John liked My Story!');
console.log(art.likes, 'John likes this story!');
//console.log(art.dislike('Sally'), 'You can't dislike this story!');
console.log(art.like('Ivan'), 'Ivan liked My Story!');
console.log(art.like('Steven'), 'Steven liked My Story!');
console.log(art.likes, 'John and 2 others like this story!');
console.log(art.comment('Anny', 'Some Content'), 'Anny commented on My Story');
console.log(art.comment('Ammy', 'New Content', 1), 'You replied successfully');
console.log(art.comment('Zane', 'Reply', 2), 'Zane commented on My Story');
console.log(art.comment('Jessy', 'Nice :)'), 'Jessy commented on My Story');
console.log(art.comment('SAmmy', 'Reply@', 2), 'You replied successfully');

console.log(art.toString('asc'));
// ,`Title: My Story
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :)`);