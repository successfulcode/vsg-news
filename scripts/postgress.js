import { sql } from '@vercel/postgres';

export async function createTable() { 
  const { rows } = await sql`
    CREATE TABLE IF NOT EXISTS articles (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) NOT NULL UNIQUE,
      title VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      article TEXT NOT NULL,
      creator VARCHAR(255) NOT NULL,
      creator_email VARCHAR(255) NOT NULL
    );
  `;

  console.log('rows', rows);
}