export interface IComment {
    content: string;
    author: string;
    articleId: string;
}

export class Comment implements IComment {
    content: string;
    author: string;
    articleId: string;

    constructor(content: string, author: string, articleId: string) {
        this.content = content;
        this.author = author;
        this.articleId = articleId;
    }
}