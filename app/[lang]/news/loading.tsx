import ArticleSkeleton from '@/components/shared/Article/ArticleSkeleton';

function loading() {
  const loadingItems = Array(12).fill('');

  return (
    <section className="flex flex-row flex-wrap justify-center gap-2 my-4 mx-auto">
      {loadingItems.map((loadingItems, index: number) => (
        <ArticleSkeleton key={index} />
      ))}
    </section>
  );
}

export default loading;
