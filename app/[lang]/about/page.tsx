'use client'

import Button from "@/components/shared/Button";
import ThemeDropdown from "@/components/shared/ThemeDropdown";

export default function page() {

  const setTheme =() => {
    console.log('setTheme', window.matchMedia('(prefers-color-scheme: dark)').matches)

    // document.documentElement.classList.add('dark')
  }
  return (
    <div>
      <div>About</div>
      <div>
        <Button click={setTheme}>Hey button</Button>
        <ThemeDropdown />
      </div>
    </div>
  )
}