import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/test'
import HomePage from '../pages/homePage'
import RegisterPage from '../pages/registerPage'
import LoginPage from '../pages/loginPage'
import AdminPage from '../pages/adminPage'

function App() {

  return (
    <BrowserRouter>
      <div className='w-full h-screen bg-[#FFF6E8]'>
        <Routes>
          <Route path='/*' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/test' element={<Test />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
