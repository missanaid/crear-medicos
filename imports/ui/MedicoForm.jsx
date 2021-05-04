import React, { useState } from "react";
import { MedicosCollection } from "../api/MedicosCollection";
import { validate } from "rut.js";
import { Especialidad } from "./Especialidad";
import { getEspecialidad } from "../selectors/getEspecialidad";

const initialState = {
  nombres: "",
  apellidop: "",
  apellidom: "",
  rut: "",
  especialidad: "",
};
export const MedicoForm = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { nombres, apellidop, apellidom, rut, especialidad } = formValues;
  const especialidades = getEspecialidad();

  const reset = () => {
    setFormValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(rut)) {
      return;
    }

    MedicosCollection.insert({
      nombres: nombres.trim(),
      apellidop: apellidop.trim(),
      apellidom: apellidom.trim(),
      rut: rut,
      especialidad: especialidad,
    });

    reset();
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="nombres"
            value={nombres}
            placeholder="Nombres"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="apellidop"
            value={apellidop}
            placeholder="Apellido Paterno"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="apellidom"
            value={apellidom}
            placeholder="Apellido Materno"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="rut"
            value={rut}
            placeholder="Rut"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-row ">
        <div className="form-group col-3 ">
          <label className="col-form-label">Especialidad</label>
        </div>
        <div className="form-group col-9">
          <select
            name="especialidad"
            className="form-control"
            onChange={handleInputChange}
            value={especialidad}
          >
            <option value="">Seleccione...</option>
            {especialidades.map((e) => (
              <option key={e.nombre}>{e.nombre}</option>
            ))}
          </select>
        </div>
      </div>

      <button className=" btn btn-primary" type="submit">
        Agregar Medico
      </button>
    </form>
  );
};
