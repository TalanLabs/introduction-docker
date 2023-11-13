import axios from "axios";
import {Cat} from "./models.ts";

export const getRandomNumber = async (): Promise<number> => {
    return axios.get<{random: number}>('http://localhost:3000')
        .then(resp => resp.data.random)
}

export const addCat = async (): Promise<Cat> => {
    return axios.post<Cat>('http://localhost:3000/cats')
        .then(resp => new Cat(resp.data.id, resp.data.name, resp.data.age, resp.data.type))
}

export const getCats = async (): Promise<Cat[]> => {
    return axios.get<{cats: Cat[]}>('http://localhost:3000/cats')
        .then(resp => resp.data.cats.map(cat => new Cat(cat.id, cat.name, cat.age, cat.type)))
}