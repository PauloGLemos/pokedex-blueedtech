import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBox from './SearchBox';

export default function CardList() {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [busca, setBusca] = useState([]);

    let listPokemons = () => {  
        setPokemon([
        {
            "id": '#133',
            "name": "Eevee",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png ",
            "altura": 13,
            "peso": 6.8,
            "habilidade1" : ["normal"],
            "habilidade2" : ["normal"]
        },

        {
          "id": '#133',
          "name": "Gigantamax Eevee",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133_f2.png ",
          "altura": 133,
          "peso": 6.7,
          "habilidade1" : ["normal"],
          "habilidade2" : ["normal"]
        },

        {
            "id": '#134',
            "name": "Vaporeon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
            "altura": 133,
            "peso": 6.7,
            "habilidade1" : ["agua"],
            "habilidade2" : ["normal"] 
        },
        
        {
            "id": '#135',
            "name": "Jolteon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
            "altura": 133,
            "peso": 6.7,
            "habilidade1" : ["raio"],
            "habilidade2" : ["normal"]  
        },

        {
            "id": '#136',
            "name": "Flareon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",  
            "altura": 133,
            "peso": 6.7,
            "habilidade1": [" fogo"],
            "habilidade2" : ["normal"]
        },

        {
            "id": '#196',
            "name": "Espeon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png",
            "altura": 133,
            "peso": 6.7,
            "habilidade1": [" fogo"],
            "habilidade2" : ["normal"]  
        },

        {
            "id": '#197',
            "name": "Umbreon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
            "altura": 133,
            "peso": 6.7,
            "habilidade1": [" fogo"],
            "habilidade2" : ["normal"]  
        },

        {
            "id": '#470',
            "name": "Leafon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png",
            "altura": 133,
            "peso": 6.7,
            "habilidade1": [" fogo"],
            "habilidade2" : ["normal"]  
        },

        {
            "id": '#471',
            "name": "Glaceon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png",
            "altura": 133,
            "peso": 6.7,
            "habilidade1": [" fogo"],
            "habilidade2" : ["normal"]  
        },

        {
            "id": '#700',
            "name": "Silveon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png",
            "altura": 133,
            "peso": 6.7,
        }
    ])}

    const getData = () => {
      fetch('pathname: "/sobre/" + pokemon.id, state: pokemon')
      .then( res => res.json() )
      .then( (result) => {
        setPokemon(result.results)
        setBusca(result.results)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(true)
      })
    }

    const filterPokemon = (e) => {
      const filtered = busca.filter(item => item.name.includes(e.target.value));
      setPokemon(filtered)
    }

    return(
      <>

    <nav className="app__nav">
      <button className="app__btn1" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://github.com/PauloGLemos';
      }}>Github</button>

      <button className="app__btn1"onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.linkedin.com/in/pauloglemos/';
      }}>Linkedin</button>

      <button className="app__btn1" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://paulogabriel.netlify.app/';
      }}>About</button>
    </nav>

      <div className="app__flex">
        <div className="app__btn" onClick={listPokemons}>Listar Eeveelutions</div>
        <div className="app__list">
          {
            loading ? (
              <Card></Card>
            ) : (
              pokemon.map( (item) => (
                <Card key={item.name, item.id} info={item}></Card>
                
              ))
            )
          }
        </div>
        </div>
      </>
    )
  }
