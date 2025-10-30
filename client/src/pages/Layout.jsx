import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Login from './Login'

const Layout = () => {

  const { user, loading } = useSelector(state => state.auth)  // useSelector is a React hook from the react-redux library that allows components to access data directly from the Redux store without using the older connect function.

  if(loading){
    return <Loader/>
  }
  return (
    <div>
      {
        user ? (
          <div className='min-h-screen bg-gray-50'>
            <Navbar /> {/* whenever the user is logged in this navbar and outlet will display */}
            <Outlet /> {/* <Outlet /> is a placeholder (a space) inside a parent route’s component where the child route components will be rendered. */}
          </div>
        ) : <Login/>
      }

    </div>
  )
}

export default Layout