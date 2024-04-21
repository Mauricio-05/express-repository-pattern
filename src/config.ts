import dotenv from "dotenv";
dotenv.config();

type environmentConfig = {
  PORT: string | number;
};

const environmentConfig: environmentConfig = {
  PORT: process.env.PORT ?? 5006,
};

export default environmentConfig;
