import Link from "next/link"

async function Main() {
   
  async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    { headers: {
      'Cache-Control': 'no-store',
    }})
    return  await response.json()
  }

  const posts = await getPosts()

  return (
    <>
    <Link href="/test">test</Link>
    <div>
     { posts?.length >0 && posts.map((post: { body: string, id: number }) => (
        <div key={post.id}>{post.body}</div>
      )) }
    </div>
    </>
  )
}

export default Main