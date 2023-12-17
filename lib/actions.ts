'use server'

import { getAllArticles, saveArticle } from './articles';

export async function createArticle(article: any) {
  // getAllArticles();

  await saveArticle(article);
}


export async function getArticles() {
  // getAllArticles();

  await getAllArticles();
}
