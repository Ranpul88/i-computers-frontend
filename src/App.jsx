import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '../pages/homePage'
import RegisterPage from '../pages/registerPage'
import LoginPage from '../pages/loginPage'
import AdminPage from '../pages/adminPage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ForgotPasswordPage from '../pages/forgotPasswordPage'

function App() {

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>

        <Toaster position='top-right'/>

        <div className='w-full h-screen bg-primary'>
          <Routes>
            <Route path='/*' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/admin/*' element={<AdminPage/>}/>
            <Route path='/forgot-password' element={<ForgotPasswordPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
