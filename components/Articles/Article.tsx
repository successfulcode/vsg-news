import { IArticle } from '@/types/IArticle'
import React from 'react'

function Article({ article }:{ article: IArticle}) {
  return (
    <div>{article.title}</div>
  )
}

export default Article