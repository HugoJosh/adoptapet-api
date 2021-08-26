const constelaciones = [
  {
    Andromeda: {
      abreviatura: "And",
      superficie: 722.3,
      num_estrellas: 152,
      estr_mas_brillante: "Alpheratz",
    },
  },
  {
    Aquila: {
      abreviatura: "Aql",
      superficie: 652.5,
      num_estrellas: 124,
      estr_mas_brillante: "Altair ",
    },
  },
  {
    Ara: {
      abreviatura: "Ara",
      superficie: 237.1,
      num_estrellas: 71,
      estr_mas_brillante: "Beta Arae",
    },
  },
  {
    Auriga: {
      abreviatura: "Aur",
      superficie: 657.4,
      num_estrellas: 152,
      estr_mas_brillante: "Capella",
    },
  },
  {
    Bootes: {
      abreviatura: "Boo",
      superficie: 906.8,
      num_estrellas: 144,
      estr_mas_brillante: "Arturo",
    },
  },
  {
    Draco: {
      abreviatura: "Dra",
      superficie: 1083,
      num_estrellas: 211,
      estr_mas_brillante: "Etamin",
    },
  },
];

const gods = {
  Zeus: { live: "Olympus", symbol: "Thunderbolt" },
  Hades: { live: "Underworld", symbol: "Cornucopia" },
};

function buscar(parametro, valor) {
  for (let i in constelaciones) {
    if (Object.keys(constelaciones[i]) == valor) {
      return constelaciones[i];
    } else {
      if (
        constelaciones[i][[Object.keys(constelaciones[i])]][`${parametro}`] ==
        valor
      ) {
        return constelaciones[i];
      }
    }
    // console.log(constelaciones[i][[Object.keys(constelaciones[i])[0]]]);
  }
}

function crud(parametro, valor) {
  for (let i in constelaciones) {
    if (Object.keys(constelaciones[i]) == valor) {
      return (constelaciones[i][Object.keys(constelaciones[i])] = req.body);
    }
  }
}

// console.log(buscar("abreviatura", "Draco"));


// for (let i in constelaciones) {
//   if (Object.keys(constelaciones[i]) == "Andromeda") {
//     if (delete constelaciones[i]) {
//       console.log(constelaciones);
//     } else {
//       console.log("error");
//     }
//   }

// }

// constelaciones.push({nombre:`algo:{algo}`});
// constelaciones[constelaciones.length]={}

let b="b"
let a={}
a[`${b}`]=0
console.log(a)
let nom="algo"
let c={}
c[`${nom}`]={
           "abreviatura": "Dra",
           "superficie": 1083,
           "num_estrellas": 211,
           "estr_mas_brillante": "Etamin"
}	
// constelaciones[constelaciones.length]={}
constelaciones[constelaciones.length]=c
console.log(constelaciones)