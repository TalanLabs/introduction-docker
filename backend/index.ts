import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import _ from "lodash"
import dotenv from "dotenv"
import {Name} from "./enums/name";
import {Adjective} from "./enums/adjective";
import {Type} from "./enums/type";
import {Cat} from "./models";
import {addCat, createCatTable, listAllCats} from "./databaseService";

dotenv.config()

const app = express()
app.use(cors())
const port = 3000

export const toCats = (cat: any): Cat => {
    return new Cat(
        cat.id,
        cat.name,
        cat.age,
        cat.type
    )
}


app.get('/', (req, res) => {
    const random = _.random(10)
    createCatTable().catch(err => console.log(err))
    res.status(200).send({random})
})

app.get('/cats', async (req, res) => {
    const cats = await listAllCats()
    res.status(200).send({cats: cats})
})

app.post('/cats', async (req, res) => {
    const response = await addCat(_.sample(Object.values(Name)) + ' ' + _.sample(Object.values(Adjective)), _.sample(Object.values(Type))!.toString(), _.random(14),)
    res.status(response).send({message: response === 200 ? 'Successfully added a cat' : 'Error while adding a cat, better check the logs...'})
})

app.listen(port, '0.0.0.0', () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});