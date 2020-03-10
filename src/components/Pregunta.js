import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import Error from "./Error";
const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta
}) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10));
  };
  //submit para definir el presupuesto

  const agregarPresupuesto = e => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };
  return (
    <Fragment>
      <h2>Coloca tu resupuesto</h2>

      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="colocar tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
};

export default Pregunta;
