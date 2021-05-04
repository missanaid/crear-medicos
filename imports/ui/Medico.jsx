import React from "react";

export const Medico = ({ medico }) => {
  return (
    <tr>
      <td>{medico.nombres}</td>
      <td>{medico.apellidop}</td>
      <td>{medico.apellidom}</td>
      <td>{medico.rut}</td>
      <td>{medico.especialidad}</td>
    </tr>
  );
};
