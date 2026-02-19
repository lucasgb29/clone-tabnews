import database from "infra/database.js";


async function status(req, res) {
  const response = await database.query("SELECT 14 + 16 as sum;");
  console.log(response.rows);
  
  res.status(200).json({ status: 'ok' });
}

export default status;