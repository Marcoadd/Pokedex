import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import './styles/Header.css'

const Header = () => {
  const dispatch = useDispatch ()

  const handleClickLogOut = () => {
    dispatch(setNameTrainerGlobal(''))
  }

  return (
    <header className='header'>
        <img className='header_img' src="/images/pokedexHome.png" alt="" />
        <div className='header_black'>
            <div onClick={handleClickLogOut} className='header_circle'>
                <div className='header_circleInter'><i className='header_logout bx bx-log-out-circle'></i></div>
            </div>
        </div>
    </header>
  )
}

export default Header