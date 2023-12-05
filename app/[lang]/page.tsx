import Link from "next/link"

import { getDictionary } from './dictionaries'

async function Main({ params: { lang } }: any) {
   
  async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    { headers: {
      'Cache-Control': 'no-store',
    }})
    return  await response.json()
  }

  const posts = await getPosts()

  const dict = await getDictionary(lang) 


  return (
    <>
    <Link href="/test">test</Link>

    test button<button>{dict.products.cart}</button> 

    <div>
     { posts?.length >0 && posts.map((post: { body: string, id: number }) => (
        <div key={post.id}>{post.body}</div>
      )) }
    </div>
    </>
  )
}

export default Main