import { sql } from '@vercel/postgres';

export async function getAllArticles() { 
  const { rows } = await sql`
    SELECT * FROM articles
  `;

  console.log('rows', rows);
}

export async function saveArticle(article: any) { 
  const { rows } = await sql`
    INSERT INTO articles (slug, title, image, article, creator, creator_email)
    VALUES (${article.slug}, ${article.title}, ${article.image}, ${article.article}, ${article.creator}, ${article.creator_email});
  `;

  console.log('rows', rows);
}