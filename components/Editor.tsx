'use client'

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from './shared/Button';
import { createArticle, getArticles, getArticlesBySlug } from '@/lib/actions';

function Editor() {
  const [value, setValue] = useState('');

  const onSendArticle = () => console.log('onSendArticle', value);

  const dummyArcticle = {
    title: 't545testdssd8-- title77988333ee321',
    image: 'test image2',
    content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit omnis modi. Id, ut tenetur error, harum, odio dolorem sunt molestiae maxime sit ipsam minima iste veritatis. Tempora, exercitationem repudiandae.',
    creator: 'test creator2',
    creator_email: 'test creator_email2'
  }

  return (
    <form action={() => createArticle(dummyArcticle)}>
      {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
      <div>
        <Button type='submit'>Send</Button>

        {/* <Button type='submit'>Send</Button> */}
      </div>
      <div>
        <Button click={() => getArticles()}>Get Articles</Button>
      </div>

      <div>
        <Button click={() => getArticlesBySlug('test-title66')}>Get Articles Slug</Button>
      </div>



      
    </form>
  )
}

export default Editor;