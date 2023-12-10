import Article from '@/components/shared/Article/Article';
import ArticleSkeleton from '@/components/shared/Article/ArticleSkeleton';
import { IArticle } from '@/types/IArticle';

import Loading from './loading';

async function page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  });
  const articles = await response.json();

  return (
    <section className="flex flex-row flex-wrap justify-center gap-2 my-4 mx-auto">
      {articles.map((article: IArticle) => 
        <Article article={article  as IArticle} key={article.id} />
      )}
    </section>
  )
}

export default page;