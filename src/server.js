const express = require('express');

const app = express();

app.get("/message/:id", (request, response) => {
    const {id, user} = request.params;

    response.send(`Mensagem id ${id}`);
});



const PORT  = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));