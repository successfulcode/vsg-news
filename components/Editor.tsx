'use client'

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from './shared/Button';
import { createArticle, getArticles } from '@/lib/actions';

function Editor() {
  const [value, setValue] = useState('');

  const onSendArticle = () => console.log('onSendArticle', value);

  const dummyArcticle = {
    slug: 'test_slug5',
    title: 'test title2',
    image: 'test image2',
    content: 'test article2',
    creator: 'test creator2',
    creator_email: 'test creator_email2',
    date: new Date
  }

  return (
    <form action={() => createArticle(dummyArcticle)}>
      {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
      <div>
        <Button type='submit' click={() => createArticle(dummyArcticle)}>Send</Button>

        {/* <Button type='submit'>Send</Button> */}
      </div>
      <div>
        <Button click={() => getArticles()}>Get Articles</Button>
      </div>
    </form>
  )
}

export default Editor;