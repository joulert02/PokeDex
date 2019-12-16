import React from "react"
import "./pokemonHome.scss"

const PokemonHome = props => {
  const { PokemonActive } = props

  return (
    <section className={`pokemonContainer ${PokemonActive.type}`}>
      <figure className="imageContainer">
        <figcaption className="pokemonTitle">{PokemonActive.name}</figcaption>
        <img
          src={PokemonActive.image.file.url}
          alt={PokemonActive.description}
        />
      </figure>
      <aside>
        <div className="detailsContainer">
          <span>
            <p>NO.</p>
            <mark>{PokemonActive.pokemonNumber}</mark>
          </span>
          <span>
            <p>LEVEL</p>
            <mark>{PokemonActive.level}</mark>
          </span>
          <span>
            <p>TYPE</p>
            <mark>{PokemonActive.type}</mark>
          </span>
          <span>
            <p>HABILITY</p>
            <mark>{PokemonActive.hability}</mark>
          </span>
          <span>
            <p>HEIGHT</p>
            <mark>{PokemonActive.height}</mark>
          </span>
          <span>
            <p>WEIGHT</p>
            <mark>{PokemonActive.weight}</mark>
          </span>
        </div>
      </aside>
    </section>
  )
}

export default PokemonHome
