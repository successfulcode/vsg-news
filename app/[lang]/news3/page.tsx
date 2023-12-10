import Article from '@/components/Articles/Article';
import { IArticle } from '@/types/IArticle';

async function page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  });
  const articles = await response.json();

  return (
    <>
      {articles.map((article: IArticle) => <Article article={article  as IArticle} />)}
    </>
  )
}

export default page;