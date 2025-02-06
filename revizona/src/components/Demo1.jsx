import { useState } from 'react';
import './Demo1.css'

function Demo1() {
    const [estado, setEstado] = useState(0)
    let cornometro = 9;

    function incrementarEstado(){
        setEstado(estado + 1)
    }

    function Decrementar(){
        setEstado(estado-1)
    }

    function incrementarCornometro(){
        cornometro++
        console.log(cornometro);
    }

    function alertaUsuario(){
        alert("Corra para as montanhas")
    }
  return (
    <div className='container-demo1'>
      <h2>demo1</h2>
      <button onClick={alertaUsuario}>Clica em mim</button>
      <button onClick={() => {alert("Executei uma arrow function")}}>ex arrow Function</button>
      
      <div>
     <p>Cornometro: {cornometro}</p>
     <button onClick={incrementarCornometro}>+</button>
     </div> 

     <div>
        Estado: {estado}
        <button onClick={incrementarEstado}>+</button>
        <button onClick={Decrementar}>-</button>
     </div>
    </div>
  )
}

export default Demo1
