'use client'

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from './shared/Button';

function Editor() {
  const [value, setValue] = useState('');

  const onSendArticle = () => console.log('onSendArticle', value);

  return <>
    <ReactQuill theme="snow" value={value} onChange={setValue} />
    <div>
      <Button click={onSendArticle}>Send</Button>
    </div>
  </>
}

export default Editor;