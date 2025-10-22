import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>}/>  {/* home page */}

        <Route path='app' element={<Layout/>}>
          <Route index element={<Dashboard/>}/> {/* index means : When the parent route path matches exactly, render this element. */}
          <Route path='builder/:resumeId' element={<ResumeBuilder/>}/>
        </Route>

        <Route path='view/:resumeId' element={<Preview/>}/>
        <Route path='login' element={<Login/>}/>
  
      </Routes>
    </>
  )
}

export default App