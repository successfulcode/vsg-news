const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, '../lib/articles.db');

// Connect to the database (or create it if it doesn't exist)
const db = new sqlite3.Database(dbPath);

// Create the 'articles' table
db.run(`
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
`);

// Insert a sample record (you can omit this if you want)
db.run(`
  INSERT INTO articles (slug, title, image, article, creator, creator_email, date)
  VALUES ('sample-slug', 'Sample Title', 'sample.jpg', 'Sample article content', 'John Doe', 'john@example.com', '2023-01-01')
`);

// const articles = db.all('SELECT * FROM articles', (err, rows) => {
//   console.log('rows', rows)
// })

// console.log('articles', articles)

