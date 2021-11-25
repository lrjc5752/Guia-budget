import React, {useState,useEffect} from 'react';
 import Pregunta from './components/pregunta';             
 import Formulario from './components/formulario';  
 import Listado from './components/listado'; 
 import ControlPresupuesto from './components/controlPresupuesto';

function App() {

  // definir presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta,actualizarPregunta] = useState(true);
  const [gastos,guardarGastos] = useState([]);
  const [gasto,guardarGasto] = useState({}); // despues de crear el useEffect
  const [creargasto,guardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante
    useEffect ( () => {
      if (creargasto){
              guardarGastos([...gastos,gasto]);

          // resta del presupuesto actual
          const presupuestoRestante = restante - gasto.cantidad;
          guardarRestante(presupuestoRestante);

        // resetear a false
      guardarCrearGasto(false);
      }
      
    }, [gasto,creargasto,gastos,restante]); // dependencia que usa el useEffect necesario declararlas,genera unas advertencias

  // cuando agreguemos un nuevo gasto
  // const agregarNuevoGasto = gasto => {  // se sustituyo por el useEffect
  //   guardarGastos([...gastos,gasto]);
  // }

  return (
    <div className='container'>
      <header>
      <h1>Gasto Semanal</h1>
     <div className= 'contenido-principal contenido'>
     { mostrarpregunta ?
         ( 
          <Pregunta
          guardarPresupuesto = {guardarPresupuesto}
          guardarRestante = {guardarRestante}
          actualizarPregunta ={actualizarPregunta}
           />
          )  : (
            <div className= 'row'>
            <div className= 'one-half column'>
              <Formulario
                // agregarNuevoGasto = {agregarNuevoGasto} // despues de crear el  useEffect
                guardarGasto = {guardarGasto}
                guardarCrearGasto = {guardarCrearGasto}
              />
            </div>
            <div className= 'one-half column'>
                      <Listado
                        gastos = {gastos}
                      />
                      <ControlPresupuesto
                          presupuesto = {presupuesto}
                          restante = {restante}
                      />
            </div>
         </div>
          )
     }
     </div>
      </header>
    </div>
  );
}

export default App;
