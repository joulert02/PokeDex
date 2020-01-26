import React from "react"
import "./footer.scss"

const Footer = props => {
  const { cardsContent, PokemonActive, setMainPokemon } = props

  const Pokemons = cardsContent.sort((a, b) => {
    return a.pokemonNumber - b.pokemonNumber
  })

  return (
    <footer>
      <div className="footerContianer">
        <h2>Others</h2>
        <div className="cardsContainer">
          {Pokemons.map((Pokemon, index) => (
            <a
              href={PokemonActive.name}
              key={index}
              className={
                PokemonActive.pokemonNumber === parseInt(Pokemon.pokemonNumber)
                  ? "imageContainer active"
                  : "imageContainer"
              }
              onClick={(e) => {
                setMainPokemon(Pokemon.pokemonNumber)
                e.preventDefault();
              }}
            >
              <img
                src={Pokemon.image.file.url}
                alt={Pokemon.image.description}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer