// Dados que espero receber
const expectedData = ["name", "email", "phone", "city"];

// Dados recebidos
const receivedData = {
  name: "Matheus R. Brunelli",
  city: "Douradina",
};

// Every irá percorrer cada chave de expectedData
// E comparar com as chaves de receivedData
// Retornará falso se não der "match" em ambos os lados
const isValidUser = (expectedData, receivedData) => {
  return expectedData.every((key) => Object.keys(receivedData).includes(key));
};

console.log(
  isValidUser(expectedData, isValidUser),
);
