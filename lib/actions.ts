'use server'

import { create, getAll, getBySlug } from '@/db/articles';
import slugify from 'slugify';
import xss from 'xss';

export async function createArticle(article: any) {
  try {
    // TODO: Delete
    await new Promise((resolve) => setTimeout(resolve, 5000));

    article.slug = slugify(article.title, { lower: true });
    article.content = xss(article.content);
    article.date = new Date().toISOString();

    const newArticle = await create(article);

    console.log('articles', newArticle);

    return  newArticle;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export async function getArticles() {
  try {
    const articles = await getAll();

    // console.log('articles', articles);
    return articles; 
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArticlesBySlug(slug: string) {
  try {
    const article = await getBySlug(slug);

    console.log('articles', article)
    return article;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
