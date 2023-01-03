import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import './styles/FormHome.css'

const FormHome = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch(setNameTrainerGlobal(e.target.nameTrainer.value.trim()))
    }

  return (
    <form className='home_form' onSubmit={handleSubmit}>
        <input required className='home_input' type="text" id="nameTrainer" placeholder='Nombre...' />
        <button className='home_btn'>Comenzar</button>
    </form> 
  )
}

export default FormHome