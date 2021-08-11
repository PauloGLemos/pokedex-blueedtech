import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utils';

export default function Card(info) {

const [pokemon, setPokemon] = useState({});
const [loading, setLoading] = useState(true);

const getData = useCallback(() => {
  fetch(info.info.url)
    .then(res => res.json())
    .then((result) => {
      setPokemon(result)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(true)
    })
}, [info.info.url]);

useEffect ( () => {
  setPokemon(info.info);
});

    return(
<div className="app__list__card">
        <Link className='app__list__card__link' to={{ pathname: "/sobre/" + pokemon.id, state: pokemon }} >
        <img className="app__list__card__img" src={pokemon.img} alt={pokemon.name} />
        <h2 className="app__list__card__id">{pokemon.id}</h2>
          <div className="app__list__card__info">
            <h2 className="app__list__card__name">{pokemon.name}</h2>
            <div className="app__list__card__category">
              {
                loading ? <span className="app__list__card__category"></span> : 

                pokemon.types.map((item) => (
                  <Link to={'/' + item.type.name}>
                    <span key={item.type.name} className={'app__list__card__category__button app__list__card__category__button--' + item.type.name}>{primeiraLetra(item.type.name)}</span>
                  </Link>
                ))
            }
          </div>
        </div>
      </Link>
    </div>
  )
}