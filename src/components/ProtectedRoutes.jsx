import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

const ProtectedRoutes = () => {
   const nametrainer = useSelector(state => state.nameTrainer)

  if(nametrainer){
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  }else{
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes