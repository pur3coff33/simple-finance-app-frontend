import './App.scss'
import Dashboard from './pages/dashboard'
import {createContext, useState, useEffect} from 'react'

export const ThemeContext:any = createContext([])

function App() {

  const [theme, setTheme] = useState('default')

  useEffect(()=>{
    const loadedTheme = localStorage.getItem('sfTheme')
    if(loadedTheme){
      setTheme(loadedTheme)
    }
  },[])

  function updateTheme(newTheme: string){
    setTheme(newTheme)
    localStorage.setItem('sfTheme', newTheme)
  }

  return (
    <main>
      <ThemeContext.Provider value={{theme, updateTheme}}>
        <Dashboard />
      </ThemeContext.Provider>
    </main>
  )
}

export default App
