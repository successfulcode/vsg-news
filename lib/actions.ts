'use server'

import { getAllArticles, saveArticle } from './articles';

export async function createArticle(article: any) {
  // getAllArticles();

  await saveArticle(article);
}


export async function getArticles() {
  // getAllArticles();

  const articles  = await getAllArticles();

  console.log('articles', articles)
  return articles;
}
