import express, { Application } from "express";
import morgan from "morgan";

import Routes from "./routes/index.routes.js";
import ErrorHandlerMiddleware from "./middlewares/error_handler.middleware.js";

import environmentConfig from "./config.js";

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.middlewares();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  private middlewares(): void {
    this.app.use(ErrorHandlerMiddleware.handler);
  }

  private routes(): void {
    this.app.use("/api", new Routes(this.app).router);
  }

  public async start(): Promise<void> {
    this.app.listen(environmentConfig.PORT, () => {
      console.log(
        `Servidor encendido en el puerto ${environmentConfig.PORT} 🔥🚀👽`
      );
    });
  }
}

export default new App();
