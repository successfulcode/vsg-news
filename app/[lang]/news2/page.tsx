import { Suspense } from "react";
import TestData from "./testData";

async function page() {

  return (
    // <Suspense fallback={<p>Loading...</p>}>
    <TestData />

    // </Suspense>
  )
}

export default page;