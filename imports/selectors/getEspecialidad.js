import { especialidades } from "../data/especialidades";

export const getEspecialidad = () => {
  const array = [];
  const arraylimpio = [];
  especialidades.map((e) => {
    if (e.nombre) {
      array.push(e.nombre);
    }
  });
  const uniqueArray = array.filter(function (item, pos) {
    return array.indexOf(item) == pos;
  });

  for (let index = 0; index < uniqueArray.length; index++) {
    arraylimpio.push({
      nombre: uniqueArray[index],
    });
  }

  // uniqueArray.map((e) => {
  //   arraylimpio.push({
  //     nombre: e,
  //   });
  // });

  return arraylimpio;
};

// const arrayejemplo = ['B', 'A', 'A'];

// const uniqueArray = array.filter(function ('A', 0) {
//   return array.indexOf('A') == 0;
// }); ==TRUE

// const uniqueArray = array.filter(function ('A', 2) {
//   // indexOf Trae la posición de Izquierda a derecha
//   return array.indexOf('A') == 2;
// }); ==FALSE
