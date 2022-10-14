// библиотеки и утилиты
import cors from "cors";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import { dirname, join } from "path";
import pg from "pg";

const Pool = pg.Pool;

const pool = new Pool({
	max: 10,
	connectionString: process.env.DB_URL,
});



const isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(helmet());
app.use(cors());
app.use(json());

app.use(urlencoded({ extended: true }));

if (isProduction) {
	app.use(express.static(join(__dirname, "../../client/build")));
}

app.use("/", async (req, res) => {
pool.query("SELECT * FROM devices", (error, response) => {
	res.send(response?.rows)
});

});

// запуск сервера
app.listen(process.env.PORT, () => {
	console.log("Server ready to handle requests");
});
