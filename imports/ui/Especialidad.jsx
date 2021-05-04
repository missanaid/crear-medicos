import React from "react";
import { getEspecialidad } from "../selectors/getEspecialidad";

export const Especialidad = ({ especialidad }) => {
  const especialidades = getEspecialidad();

  return (
    <div>
      <div className="form-row ">
        <div className="form-group col-3 ">
          <label className="col-form-label">Especialidad</label>
        </div>
        <div className="form-group col-9">
          <select className="form-control">
            {especialidades.map((e) => (
              <option key={e.nombre} value={especialidad}>
                {e.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
