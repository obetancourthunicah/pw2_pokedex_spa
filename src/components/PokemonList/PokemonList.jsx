import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PokemonList.css';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'; //?offset=0&limit=20';


export default () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [page, setPage] = useState(1);
    useEffect(
        () => {
            setIsLoading(true);
            fetch(`${baseUrl}?offset=${((page - 1) * 20)}&limit=20`)
                .then(
                    res => res.json()
                )
                .then(
                    data => {
                        setPokemons(data.results);
                        setTotalPokemons(data.count);
                        setIsLoading(false);
                        setError('');
                    }
                )
                .catch(
                    e => {
                        setError('Error al procesar API');
                        setIsLoading(false);
                    }
                )
        }
        , [page]);
    return (
        <section className="pokemonlist">
            {
                pokemons.map((o) => {
                    const id = o.url.split('/')[6];
                    return (<div key={o.name}>
                        <Link to={`/pokemon/${id}/${o.name}`}>{o.name}</Link>
                    </div>)
                })
            }
            <button onClick={()=>setPage(page + 1)}>Next</button>
            {page} de { Math.ceil(totalPokemons / 20)}
            { (page > 1) && <button onClick={()=>setPage(page - 1)}>Previous</button>}
        </section>
    );
}