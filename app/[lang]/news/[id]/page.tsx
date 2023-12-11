import Image from 'next/image';
import ArticleImage from '@/assets/images/ArticleImage.jpeg';
import Badge from '@/components/shared/Badge';
import { BadgeType } from '@/types/BadgeType';

async function page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      next: { revalidate: 3600 }
    }
  );
  const article = await response.json();

  return (
    <article className="my-8">
      <Image src={ArticleImage} alt="article image" className="mb-6 w-4/6" />
      <div className="text-4xl font-bold mb-1 uppercase">{article?.title}</div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge type={BadgeType.DATE}>2023-12-10 11:30</Badge>
        <Badge type={BadgeType.TOPIC}>Local news</Badge>
      </div>
      <div>{article?.body}</div>
    </article>
  );
}

export default page;
