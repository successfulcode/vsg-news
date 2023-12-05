'use client';

function Error({ error, reset}: {error: Error, reset: () => void}) {
  return (
    <>
    <div>Custom error page</div>
    <button onClick={reset}>try again</button>
    </>
  )
}

export default Error;