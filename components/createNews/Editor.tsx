'use client'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({ setContent, value }:{ setContent: (content: string) => void, value: string} ) {

  return (
    <ReactQuill theme="snow" onChange={setContent} value={value} placeholder="Write an article content" />
  )
}

export default Editor;