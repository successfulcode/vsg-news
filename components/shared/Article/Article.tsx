import { IArticle } from '@/types/interfaces/IArticle';
import Link from 'next/link';
import Image from 'next/image';
import ArticleImage from '@/assets/images/ArticleImage.jpeg';

function Article({ article }:{ article: IArticle }) {
  const articleLink = `news3/${article.id}`
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <Link href={articleLink}>
        <Image className="rounded-t-lg transform hover:scale-110 transition-transform duration-300" src={ArticleImage} alt="article image" />
      </Link>
        
      <div className="p-5">
        <Link href={articleLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">{article.title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </div>      
  )
}

export default Article;