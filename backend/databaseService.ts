import {Cat} from "./models";
import {toCats} from "./index";
import dotenv from "dotenv";
import {Pool} from "pg";

dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT as unknown as number,
});

export const createCatTable = async () => {
    const client = await pool.connect();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS public."Cat" (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                type TEXT NOT NULL,
                age INTEGER NOT NULL
            );
        `);
        console.log('Cat table created successfully');
    } finally {
        client.release();
    }
};


export const addCat = async (name: string, type: string, age: number) => {
    const client = await pool.connect();

    try {
        // Execute the SQL INSERT statement
        await client.query(`
      INSERT INTO public."Cat" (name, type, age) VALUES ($1, $2, $3);
    `, [name, type, age]);
        console.log(`Cat ${name} ${type} ${age} added successfully`);
        return 200
    } catch (err) {
        return 500
    } finally {
        client.release();
    }
};

export const listAllCats = async (): Promise<Cat[]> => {
    const client = await pool.connect();

    try {
        const result = await client.query('SELECT * FROM public."Cat"');
        const cats = result.rows;

        console.log('List of all cats:');
        // @ts-ignore
        cats.forEach((cat) => {
            console.log(`ID: ${cat.id}, Name: ${cat.name}, Type: ${cat.type}, Age: ${cat.age}`);
        });

        return cats.map(toCats);
    } finally {
        client.release();
    }
};