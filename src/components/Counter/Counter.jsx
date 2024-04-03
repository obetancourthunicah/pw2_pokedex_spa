import { useState } from 'react';
import './Counter.css';
export default (
    {
        counterTitulo = "Contador Estandar",
        registerIteraccion = ()=>{}
    })=>{
    const [contador, setContador] = useState(0);
    return (
        <div className="counter">
            <span>{counterTitulo}</span>
            <button onClick={()=>{setContador(contador + 1); registerIteraccion(1, counterTitulo);}}>+</button>
            <button onClick={()=>{setContador(contador - 1); registerIteraccion(1, counterTitulo);}}>-</button>
            <span className="counterValue">{contador}</span>
        </div>
    )
}