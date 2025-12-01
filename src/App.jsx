import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/test'
import HomePage from '../pages/homePage'
import RegisterPage from '../pages/registerPage'
import LoginPage from '../pages/loginPage'
import AdminPage from '../pages/adminPage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ForgotPasswordPage from '../pages/forgotPasswordPage'


// 908601335498-afi042el2joriqbm3b6663cmbpcouk58.apps.googleusercontent.com
function App() {

  return (
    <GoogleOAuthProvider clientId='908601335498-afi042el2joriqbm3b6663cmbpcouk58.apps.googleusercontent.com'>
      <BrowserRouter>

        <Toaster position='top-right'/>

        <div className='w-full h-screen bg-primary'>
          <Routes>
            <Route path='/*' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/admin/*' element={<AdminPage/>}/>
            <Route path='/test' element={<Test />}/>
            <Route path='/forgot-password' element={<ForgotPasswordPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
