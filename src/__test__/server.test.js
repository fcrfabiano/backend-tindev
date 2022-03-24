const axios = require('axios').default;
const mongoose = require('mongoose');

describe("Testa se o status do servidor", () => {
    it("Retorna statusCode 200 se a api estiver On-Line", async () => {
       const api = await axios.get('http://localhost:3333/')
       .then(response => response)
       .catch(error => error);

       expect(api.status).toBe(200);
    });

    it("Testa se existe conexão com o Banco de Dados", async () => {
        const connection = await mongoose.connect('mongodb+srv://tindev:tindev@cluster0.ouyuj.mongodb.net/tindev?retryWrites=true&w=majority');
        expect(typeof connection.Mongoose).toEqual('function');
        connection.disconnect();
    });
});