'use client'
 
import { usePathname, useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
 
  return (
    <button type="button" onClick={() => router.push('/nl/news')}>
      LangSwitcher

      {pathname}
    </button>
  )
}