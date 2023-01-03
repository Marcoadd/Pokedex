import React from 'react'
import FormHome from '../components/FormHome'
import './styles/Home.css'

const Home = () => {
  return (
    <main className='home'>
        <img className='home_img' src="/images/pokedexHome.png" alt="" />
        <h2 className='home_subtitle'>Hola entrenador!</h2>
        <p className='home_text'>Dame tu nombre para comenzar</p>
        <FormHome />
    </main>
  )
}

export default Home