import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { MedicosCollection } from "../api/MedicosCollection";
import { Medico } from "./Medico";
import { MedicoForm } from "./MedicoForm";

export const App = () => {
  const medicos = useTracker(() => MedicosCollection.find({}).fetch());

  return (
    <div className="py-5">
      <div className="container">
        <h1 className="text-center pb-4">Crear Médico</h1>

        <MedicoForm />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Apellido Paterno</th>
              <th scope="col">Apellido Materno</th>
              <th scope="col">Rut</th>
              <th scope="col">Especialidad</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((m) => (
              <Medico key={m._id} medico={m} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
