'use client'

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from './shared/Button';
import { createArticle } from '@/lib/actions';

function Editor() {
  const [value, setValue] = useState('');

  const onSendArticle = () => console.log('onSendArticle', value);

  const dummyArcticle = {
    slug: 'test slug2',
    title: 'test title2',
    image: 'test image2',
    article: 'test article2',
    creator: 'test creator2',
    creator_email: 'test creator_email2',
    date: 'test date2'
  }

  return (
    <form action={() => createArticle(dummyArcticle)}>
      {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
      <div>
        <Button type='submit' click={() => createArticle(dummyArcticle)}>Send</Button>

        {/* <Button type='submit'>Send</Button> */}
      </div>
    </form>
  )
}

export default Editor;