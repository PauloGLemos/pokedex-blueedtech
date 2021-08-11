import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utils';

export default function Info(info) {

  const [pokemons, setPokemons] = useState(info.location.state);

  let id = ('000' + pokemons.id).slice(-3);

  return (
    <section className="info">
      <div className="info-card">
        <div className="info-header">{pokemons.name}</div>
        <div className="info-body">
        <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemons.name} />
          <div className="info-block">
            <p><strong>Altura: </strong>{pokemons.altura}</p>
            <p><strong>Peso: </strong>{pokemons.peso}</p>
            <p><strong>Habilidades: </strong>{pokemons.habilidade1}</p>
            <p><strong>Habilidades: </strong>{pokemons.habilidade2}</p>
          </div>
        </div>
        <div className="info-footer">
          <Link className="link" to="/">← Voltar</Link>
        </div>
      </div>
    </section>
  );
}