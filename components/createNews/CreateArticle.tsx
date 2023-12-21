
'use client';

import { useFormState } from 'react-dom';
import Button from '@/components/shared/Button';
import Editor from './Editor';
import { createArticle, getArticles } from '@/lib/actions';
import FormInput from '../FormInput';
import { ChangeEvent, useState } from 'react';
import { IArticle } from '@/types/interfaces/IArticle';

const initalFormData = {
  title: '',
  image: '',
  content: '',
  creator: '',
  creator_email: ''
} as IArticle;

function CreateArticle() {
  const [ articleForm, setArticleForm ] = useState({
    isError: false,
    data: initalFormData
  });

  async function onSubmitAction() {
    await createArticle(articleForm.data);
    resetFormData();
  }

  function setFormData( name: string, value: string) {
    setArticleForm((prevArticleForm) => ({
      ...prevArticleForm,
      data: {
        ...prevArticleForm.data,
        [name]: value
      }
    }));
  };

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {    
    const { name, value } = e.target;

    setFormData(name, value);
  };

  function setContent(content: string) {
    setFormData('content', content);
  }

  function resetFormData() {
    setArticleForm((prevArticleForm) => ({
      ...prevArticleForm, data: initalFormData
    }));
  }

  return (
    <form action={onSubmitAction} className="mt-5">
      <div className="mb-5">
        <FormInput id="creator" placeholder="Name" label="Name" type="text" name='creator' 
          onChange={handleInputChange} value={articleForm.data.creator} />
        <FormInput id="creator_email" placeholder="Email" label="Email" type="text" name='creator_email' 
          onChange={handleInputChange} value={articleForm.data.creator_email}  />
      </div>

      <div>
        <FormInput id="title" placeholder="Title" label="Title" type="text" name='title' 
          onChange={handleInputChange} value={articleForm.data.title} />
      </div>

      <Editor setContent={setContent} value={articleForm.data.content} />
      
      <div className="mt-5">
        <Button type='submit'>submit</Button>
      </div>
    </form>
  )
}

export default CreateArticle;