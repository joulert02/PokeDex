import React, { useState } from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PokemonHome from "../components/pokemon/pokemonHome"
import Footer from "../components/footer/footer"

const IndexPage = props => {
  const cardsContent = props.data.allContentfulPokedexCard.nodes

  const findPokemon = pokemonId => {
    return cardsContent.find(({ pokemonNumber }) => pokemonNumber === pokemonId)
  }

  const [PokemonActive, setPokemonActive] = useState(cardsContent[0])

  const setMainPokemon = pokemonId => {
    let newPokemon = findPokemon(pokemonId)
    setPokemonActive(newPokemon)
  }
  return (
    <>
      <Layout>
        <SEO title="Home" />
      </Layout>
      <main>
        <PokemonHome PokemonActive={PokemonActive}/>
      </main>
      <Footer
        cardsContent={cardsContent}
        PokemonActive={PokemonActive}
        setMainPokemon={setMainPokemon}
      />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query cardsQuerys {
    allContentfulPokedexCard(sort: {fields: [pokemonNumber], order: ASC}) {
      nodes {
        slug
        pokemonNumber
        height
        hability
        name
        level
        weight
        type
        image {
          description
          file {
            url
          }
        }
      }
    }
  }
`