'use client'

import React, { Suspense, useEffect, useState } from 'react'

function TestData() {

  const [items, setItems] = useState([] as any)

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();

    setItems(data)
    console.log('data', data)
  }

  useEffect(() => {
    getData(); // Invoke the async function immediately
  }, []);


  return (
    <>
      <Suspense fallback={<p>SuspenseLoading...</p>}>
        <div>
            {items.map((item: { title: string, id: number }) => <div key={item.id}>{item?.title}</div>)}
        </div>
      </Suspense>
    </>
  )
}

export default TestData