import {useState} from 'react';
import Page from "./Page"
import Counter from "../components/Counter/Counter";
import PokemonList from '../components/PokemonList/PokemonList';

export default () => {
    const [interacciones, setInteracciones] = useState(0);
    const [mapIteracciones, setMapIteracciones] = useState({});
    const registrarIteraccion = (step, origin)=> {
        setInteracciones(interacciones + step);
        const newMap = {
                    ...mapIteracciones,
                    [origin]:(mapIteracciones[origin]||0) + step
                }
        setMapIteracciones(newMap);
    }
    return (
        <Page>
            <section>
                <h2>Home Page</h2>
                <div>
                    <Counter
                        counterTitulo="Contador A"
                        registerIteraccion={registrarIteraccion}
                    />
                    <Counter
                        counterTitulo="Contador B"
                        registerIteraccion={registrarIteraccion}
                    />
                </div>
                <div>
                    {interacciones}
                </div>
                <div>
                    {Object.entries(mapIteracciones).map((o)=>{
                        return (<div key={o[0]}>{o[0]} - {o[1]}</div>)
                    })}
                </div>
                <PokemonList />
            </section>
        </Page>
    );
}