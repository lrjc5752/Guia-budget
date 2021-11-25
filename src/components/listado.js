import React from 'react';
import Gasto from './gasto';
import PropTypes from 'prop-types';  // para documentar los componentes

const Listado = ({gastos}) => (
    <div className= 'gastos-realizados'>
        <h2>Listado</h2>
        {gastos.map(gasto =>(
            <Gasto
                key = {gasto.id}
                gasto = {gasto}
            />
        ))}
    </div>
);
Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado;