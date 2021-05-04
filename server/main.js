import { MedicosCollection } from "../imports/api/MedicosCollection";

const createMed = (medCreate) =>
  MedicosCollection.insert({ medico: medCreate });
