import express from "express";

const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('It works!')
})

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`))
