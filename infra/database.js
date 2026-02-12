import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB, 
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.DB_PORT,
  });
  await client.connect();
  const response = await client.query(queryObject);
  await client.end();
  return response;
}
export default { query: query };