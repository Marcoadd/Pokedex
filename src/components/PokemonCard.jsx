import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/PokemonCard.css'


const PokemonCard = ({pokemon}) => {
  const [dataPokemon, setDataPokemon] = useState()
  const navigatePokemon = useNavigate()

  const types = dataPokemon?.types.map(type => type.type.name).join( ' / ')

  const handleClickPokemon = () => {
    navigatePokemon(`/pokedex/${dataPokemon?.id}`)
  }

  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => setDataPokemon(res.data))
      .catch(err => console.log(err))
  }, [])
  
  

  return (
    <article onClick={handleClickPokemon} className={`pokeCard border-${dataPokemon?.types[0].type.name}`}>
      <section className={`pokeCard_header pokeCard_header_border-${dataPokemon?.types[0].type.name}`}></section>
      <section className='pokeCard_content'>
        <img className='pokeCard_img' src={dataPokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h3 className={`pokeCard_name letter-${dataPokemon?.types[0].type.name}`}>{pokemon.name}</h3>
        <p className='pokeCard_types'>{types}</p>
        <p className='pokeCard_types-title'>Tipos</p>
        <hr />
        <section className='pokeCard_stats'>
          {
            dataPokemon?.stats.map(stat => (
              <div key={stat.stat.name} className='pokeCard_stat'>
                <p className='pokeCard_stat-name'>{stat.stat.name}</p>
                <p className={`pokeCard_stat-value letter-${dataPokemon?.types[0].type.name}`}>{stat.base_stat}</p>
              </div>
            ))
          }
        </section>
      </section>
      
    </article>
  )
}

export default PokemonCard