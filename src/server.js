const express = require("express");

const app = express();

app.use(express.json()); // precisamos colocar isso para conseguirmos enviar nosso body como JSON, sem isso sempre retornará undefined  

app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
}); // Lista

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
}); // Adiciona

app.put("/courses/:id", (request, response) => {
  const params = request.params; // exemplo de route params
  //   console.log("Teste", params)
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
}); // Atualiza uma informação pré-existente

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 3", "Curso 3", "Curso 4"]);
}); // Neste caso o metodo patch nao faz mt sentido, mas é só para visualizarmos como funciona

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"]);
});

app.listen(3333);
