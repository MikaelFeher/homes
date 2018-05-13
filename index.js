const express = require('express');
const app = express();
const cors = require("cors");

const homes = require("./homes");

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Try /homes or /homes/[enter a house id here]/data");
});

app.get('/homes', (req, res) => {
    res.send(homes);
});

app.get('/homes/:id/data', (req, res) => {
    let id = req.params.id;
    let house = null;

    for (let i = 0; i < homes.length; i++) {
        if(homes[i].id === id) {
            house = homes[i];
        }
    }

    if(!house) {
        res.send("Data does not exist");
    } else {
        res.json(house);
    }
});

app.get("*", (req, res) => {
    res.send("Oops, You tried accessing something that doesn't seem to exist...\n Try /homes or /homes/[houseId]/data");
})

app.listen(3000, () => {
    console.log("Listening on port: 3000");
});