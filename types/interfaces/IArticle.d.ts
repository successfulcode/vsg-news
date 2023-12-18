export interface IArticle {
  id: number,
  slug: string,
  title: string,
  image?: string,
  content: string,
  creator: string,
  creator_email: string,
  date: Date
}