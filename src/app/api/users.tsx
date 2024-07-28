import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  if (req.method === "GET") {
    const [rows] = await connection.execute("SELECT * FROM users");
    res.status(200).json(rows);
  } else if (req.method === "POST") {
    const { name, email } = req.body;
    const result = await connection.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    res.status(201).json({ id: result.insertId, name, email });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }

  await connection.end();
}
