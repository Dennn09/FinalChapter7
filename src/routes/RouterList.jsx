import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PopulerMovie } from '../pages/PopulerMovie'
import { HasilSearch } from '../pages/HasilSearch'
import { Register } from '../pages/auth/Register'
import { LoginPage } from '../pages/auth/LoginPage'
import { Dashboard } from '../pages/auth/Dashboard'
import { Render } from '../pages/Render'
import { Background } from '../assets/components/Background'
import { HomePage } from '../pages/HomePage'
// import { ReduxPage } from '../pages/redux/ReduxPage'
import { LoginRedux } from '../pages/LoginRedux'
import TokenProtected from '../assets/components/TokenProtected'
import { Responsive } from '../pages/Responsive'
// import { Carasuel2 } from '../assets/components/Carasuel2'

export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path='/' element={<ReduxPage/>}/> */}
        
        <Route path='/' element={<Responsive/>}/>
        <Route path='/LoginRedux' element={<LoginRedux/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={
        <TokenProtected>
          <Dashboard/>
        </TokenProtected>
        }/>
        <Route path='/PopulerMovie' element={<PopulerMovie/>}/>
        <Route path='/HasilSearch' element={<HasilSearch/>}/>
        <Route path='/Render/:id' element={<Render/>}/>
        <Route path='/Background' element={<Background/>}/>
    </Routes>
    </BrowserRouter>
  )
}
