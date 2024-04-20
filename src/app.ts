import express from 'express';
import cors from "cors";
import config from './config';
import { CustomRequest } from './utils/interface';
import reqLogger from './utils/reqLogger';
import router from './routes';
import sequelize from './config/db';

const app = express()
const port = config.PORT || 4000;

app.use(cors())
app.use(express.json());

app.use(reqLogger)
app.use('/api/v1', router)

app.get("/", (req, res) => {
  res.send("Welcome...");
});

declare global {
  namespace Express {
    interface Request extends CustomRequest { }
  }
}

app.use((req, res) => res.status(404).send({
  status: "error",
  error: "Not found",
  message: "Route not correct kindly check url.",
}));

(async () => {
  process.on("warning", (e) => config.logger.warn(e.stack));
  console.log("Waiting for DATABASE Connection...");
  await sequelize.sync()
  app.listen(config.PORT || 4000, async () => {
    console.log(
      `${config.APP_NAME} API listening on ${port || 4000}`
    );
  });
})();

process.on("unhandledRejection", (error: any) => {
  console.log("FATAL UNEXPECTED UNHANDLED REJECTION!", error.message);
  console.error("\n\n", error, "\n\n");
});

export default app;