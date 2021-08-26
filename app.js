const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

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
  }
}
app.get("/gods/:name", (req, res, next) => {
  const good = gods[req.params.name];
  if (good) {
    res.send(good);
  } else {
    res.status(404).send("Good Not Found");
  }
});
app.put("/gods/:name", (req, res) => {
  const god = req.body;
  gods[req.params.name] = god;
  res.send(gods);
});

app.post("/gods", (req, res) => {
  const name = req.query.name;
  const newGod = req.body;
  gods[name] = newGod;
  res.status(200).send(gods);
});
app.delete("/gods/:name", (req, res) => {
  const name = req.params.name;
  if (delete gods[name]) {
    res.send(gods);
  } else {
    res.status(500);
  }
});

app.get("/constelaciones", (req, res, next) => {
  res.send(constelaciones);
});

app.get("/constelaciones/:parametro/", (req, res, next) => {
  // res.send(req.params.parametro)
  //   res.send(req.params.parametro + "  " + req.query["s"]);
  //   res.send(buscar(req.params.parametro,req.query[`${req.params.parametro}`]))
  res.send(buscar(req.params.parametro, req.query["s"]));
  // res.send(buscar(req.params.parametro,req.query['parametro']));
});
//constelaciones/abreviatura/?s=Boo

app.put("/constelaciones/:nombre", (req, res) => {
  for (let i in constelaciones) {
    if (Object.keys(constelaciones[i]) == req.params.nombre) {
      constelaciones[i][Object.keys(constelaciones[i])] = req.body;
      res.send(constelaciones);
    }
  }
});

app.post("/constelaciones/", (req, res) => {
  let c={};
  c[`${req.query.nombre}`] = req.body
  constelaciones[constelaciones.length]=c
  res.send(constelaciones);
});

app.delete("/constelaciones/:nombre", (req, res) => {
  for (let i in constelaciones) {
    if (Object.keys(constelaciones[i]) == req.params.nombre) {
      if (delete constelaciones[i]) {
        res.send(constelaciones);
      } else {
        res.status(500).send("Error");
      }
    }
  }
});
