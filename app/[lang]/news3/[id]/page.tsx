import Image from 'next/image';
import ArticleImage from '@/assets/images/ArticleImage.jpeg';

async function page({ params }: { params: { id: string } }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    next: { revalidate: 3600 }
  });
  const article = await response.json();

  return (
    <article className="my-4">
      <Image src={ArticleImage} alt="article image" className="mb-6 w-50" />
      <div className="text-4xl font-bold mb-4 uppercase">{article?.title}</div>
      <div>{article?.body}</div>
    </article>
  )
}

export default page;