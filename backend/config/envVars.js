import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
	MONGO_URI:"mongodb+srv://1hk21ec045:Wo5IwRCyj09P758Z@netflix.ooro0.mongodb.net/netflix?retryWrites=true&w=majority&appName=Netflix",
	PORT: process.env.PORT || 5000,
	JWT_SECRET: "Hum",
	NODE_ENV: "development",
	TMDB_API_KEY: "",
};
