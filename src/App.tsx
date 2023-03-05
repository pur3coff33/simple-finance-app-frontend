import './App.scss'
import {createContext, useState, useEffect, Suspense, lazy} from 'react'
import { firebase } from './api/firebase/firebase'
import { Route, Routes, useNavigate } from 'react-router-dom'

const Dashboard = lazy(()=> import('./pages/dashboard'))
const Login = lazy(()=> import('./pages/login'))




export const ThemeContext:any = createContext([])

function App() {

  const [theme, setTheme] = useState('default')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{
    const loadedTheme = localStorage.getItem('sfTheme')
    if(loadedTheme) setTheme(loadedTheme)  
    firebase.onAuthStateChanged(firebase.getAuth(), user => {
      if (user){
        navigate('/')
      }else{
        navigate('/login')
      }
      setLoading(false)
    })  
  },[])

  function updateTheme(newTheme: string){
    setTheme(newTheme)
    localStorage.setItem('sfTheme', newTheme)
  }

  function loadingTemplate(){
    return <div className='flex items-center justify-center h-full'>...Loading</div>
  }



  return (
    <main className={`${theme === 'default' ? 'bg-primary' : 'bg-primary-dark'}`}>
      {!loading ? 
        <ThemeContext.Provider value={{theme, updateTheme, firebase}}>
          <Suspense fallback={loadingTemplate()}>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>
        </ThemeContext.Provider>
        :
        loadingTemplate()
      }
    </main>
  )
}

export default App
