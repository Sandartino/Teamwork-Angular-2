export interface IArticle {
  _id: string;
  title: string;
  content: string;
  image: string;
}

export class Article implements IArticle {
  _id: string;
  title: string;
  content: string;
  image: string;

  constructor(
    title: string,
    content: string,
    image: string,
  ) {
    this.title = title;
    this.content = content;
    this.image = image;
  }
}
