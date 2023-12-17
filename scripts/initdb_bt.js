const sql = require('better-sqlite3');
const db = sql('../lib/articles.db');

const initArticles = [
  {
    slug: 'test slug',
    title: 'test title',
    image: '/images/test.jpg',
    article: `test  arcticle`,
    creator: 'test creator',
    creator_email: 'test@test.com',
    date: '2023-12-14'
  }
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      article TEXT NOT NULL,
      creator TEXT NOT NULL,
      creator_email TEXT NOT NULL,
      date TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO articles VALUES (
        null,
        @slug,
        @title,
        @image,
        @article,
        @creator,
        @creator_email,
        @date
      )
   `);

  for (const article of initArticles) {
    stmt.run(article);
  }
}

initData();