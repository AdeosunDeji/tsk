import { isEmpty } from "lodash";
import logger from "pino";
import dotenv from "dotenv";

dotenv.config();


const config = {
  logger: logger(),
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  SECRET: process.env.SECRET,
  DB_NAME: String(process.env.DB_NAME),
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: String(process.env.DB_USERNAME),
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT
}

const absentConfig = Object.entries(config)
  .map(([key, value]) => [key, !!value])
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (!isEmpty(absentConfig)) {
  throw new Error(`Missing Config: ${absentConfig.join(", ")}`);
}

export default config;