import Article from '@/components/Article';
import { IArticle } from '@/types/IArticle';

async function page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  });
  const articles = await response.json();

  return (
    <section className="flex flex-row flex-wrap justify-center gap-1 mt-4">
      {articles.map((article: IArticle) => <Article article={article  as IArticle} key={article.id} />)}
    </section>
  )
}

export default page;