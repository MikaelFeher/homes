const express = require('express');
const app = express();
const cors = require("cors");

const homes = require("./homes");

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(404).json({ error: "Try /homes or /homes/[enter a house id here]/data" });
});

app.get('/homes', (req, res) => {
    res.status(200).json({ homes });
});

app.get('/homes/:id/data', (req, res) => {
    let id = req.params.id;
    let house = null;

    house = homes.filter(house => house.id === id);

    if(!house.length) {
        res.status(404).json({ error: "Data does not exist" });
    } else {
        res.status(200).json({ house : house[0] });
    }
});

app.get('/homes/whoami', (req, res) => {
    res.sendStatus(418);
})

app.get("*", (req, res) => {
    res.status(404).json({ error: "Oops, You tried accessing something that doesn't seem to exist...\n Try /homes or /homes/[houseId]/data" });
})

app.listen(3000, () => {
    console.log("Listening on port: 3000");
});