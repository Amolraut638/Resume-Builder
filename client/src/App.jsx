import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import {Toaster} from 'react-hot-toast'

const App = () => {

  const dispatch = useDispatch()   // for Centralized State Management, Immutability: Instead of directly modifying state, which can lead to unexpected side effects and make debugging difficult, dispatch promotes immutability.

  const getUserData = async () => {
    const token = localStorage.getItem('token')

    try {
      if (token) {
        const {data} = await api.get('/api/users/data', {headers: {Authorization: token}})
        if (data.user) {
          dispatch(login({token, user: data.user}))
        }
        dispatch(setLoading(false))
      }else{
        dispatch(setLoading(false))
      }
      
    } catch (error) {
      dispatch(setLoading(false))
      console.log(error.message);
    }
  }

  useEffect(() => {
    getUserData()
  },[])

  return (
    <>
      <Toaster/>
      <Routes>

        <Route path='/' element={<Home/>}/>  {/* home page */}

        <Route path='app' element={<Layout/>}>
          <Route index element={<Dashboard/>}/> {/* index means : When the parent route path matches exactly, render this element. */}
          <Route path='builder/:resumeId' element={<ResumeBuilder/>}/>
        </Route>

        <Route path='view/:resumeId' element={<Preview/>}/>
  
      </Routes>
    </>
  )
}

export default App