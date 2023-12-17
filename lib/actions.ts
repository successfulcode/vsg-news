'use server'

import { getAllArticles } from './articles';

export async function createArticle(article: any) {
  getAllArticles();
}