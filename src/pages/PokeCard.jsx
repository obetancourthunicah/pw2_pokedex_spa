import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Page from "./Page";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'; //id';


export default () => {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { id, name } = useParams();
    useEffect(
        () => {
            setIsLoading(true);
            fetch(`${baseUrl}/${id}`)
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false);
                    setError('');
                    setPokemon(data);
                })
                .catch(err => {
                    console.error(err);
                    setError("Error al cargar datos de pokemon");
                    setIsLoading(false);
                });
        }
        ,
        [id]);
    return (
        <Page title={`Detalle de ${name}`}>
            <section style={{padding:'1rem'}}>
            {pokemon && <>
                <h2>PokeCard Detail {id} {name}</h2>
                <img style={{width:'180px'}} src={pokemon.sprites.front_default} />
                <h3>Tipo</h3>
                {pokemon.types.map(type=>{
                    return (<div key={type.slot}>{type.type.name}</div>)
                })}
                <h3>Habilidades</h3>
                {pokemon.abilities.map(ability=>{
                    return (<div key={ability.slot}>{ability.ability.name}</div>)
                })}
                <h3>Stats</h3>
                {pokemon.stats.map((stat, idx)=>{
                    return (<div key={stat.stat.name}>
                        <span>{stat.stat.name} ({stat.base_stat}) </span><br/>
                        <div style={{
                            backgroundColor: "green",
                            width: `${(Math.floor(stat.base_stat / 255 * 100))}%`,
                            borderRadius: '17px',
                            height: '0.8rem',
                        }}>&nbsp;</div>
                    </div>)
                })}
            </>
            }
            </section>
        </Page>
    );
}