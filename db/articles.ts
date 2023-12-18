import { IArticle } from '@/types/interfaces/IArticle';
import { sql } from '@vercel/postgres';

export async function getAll() { 
  // TODO: Add pagination

  // const pageSize = 10; // Number of records per page
  // const pageNumber = 1; // Specific page number
  
  // const offset = (pageNumber - 1) * pageSize;
  
  // // Fetching records for the specific page number returning 10 records per page
  // const { rows, fields } =
  // await sql`SELECT * FROM posts WHERE likes > ${likes} LIMIT ${pageSize} OFFSET ${offset};`;

  try {
    const fields = await sql`SELECT * FROM articles;`;

    console.log('fileds', fields)

    return fields;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export async function getBySlug(slug: string) {
  try {
    const { rows } = await sql`SELECT * FROM articles WHERE slug = ${slug};`;

    return rows;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export async function create(article: IArticle) {
  try {
    const { rows }  = await sql`
      INSERT INTO articles (slug, title, image, content, creator, creator_email, date)
      VALUES (${article.slug}, ${article.title}, ${article.image}, ${article.content}, ${article.creator}, ${article.creator_email}, ${article.date});
    `;

    if (!rows) {
      throw new Error('Internal error: The article could not be created.');
    }
  
    const articles = await getBySlug(String(article.slug));
    return articles
  } catch (error) {
    console.error(error);

    throw error;
  }
}