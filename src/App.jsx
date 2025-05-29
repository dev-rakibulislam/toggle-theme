import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saveTheme) {
      setTheme(saveTheme)
    } else {
      setTheme(systemPrefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }



  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center">
      <h1 className="lg:text-7xl text-2xl font-bold">
        Hello!  {
          theme === 'dark' ? <span>I am RakIb😅😮😊</span> : '...'
        }</h1>
      <div className="absolute top-3 right-4">


        <button
          onClick={toggleTheme}
          className="relative py-5 px-12"
        >
          <span
            className={`
      flex items-center justify-center absolute inset-0
      transition-transform dark:transition-opacity duration-300
      ${theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}
    `}
          >
            🌞
          </span>
          <span
            className={`
      flex items-center justify-center absolute inset-0
     dark:transition-transform transition-opacity duration-300
      ${theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}
    `}
          >
            🌙
          </span>
        </button>
      </div>
      <span className="absolute right-10 text-3xl top-16 animate-bounce">👆</span>
    </div>
  )
}

export default App
