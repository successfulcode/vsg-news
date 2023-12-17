import { sql, db } from '@vercel/postgres';

export async function getAllArticles() { 
  const client = await db.connect();
  const { rows } = await client.sql`
    SELECT * FROM articles
  `;

  return rows;
}

export async function saveArticle(article: any) {
  const { rows } = await sql`
    INSERT INTO articles (slug, title, image, content, creator, creator_email, date)
    VALUES (${article.slug}, ${article.title}, ${article.image}, ${article.content}, ${article.creator}, ${article.creator_email}, ${article.date});
  `;


  console.log('rows', rows);
}