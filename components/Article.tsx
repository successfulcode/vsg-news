import { IArticle } from '@/types/IArticle';
import Link from 'next/link';
import Image from 'next/image';
import ArticleImage from '@/public/ArticleImage.jpeg';

function Article({ article }:{ article: IArticle}) {
  return (
    <div>
      <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ArticleImage} alt="Article image" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Description....</p>
        </div>
      </Link>
    </div>    
  )
}

export default Article;