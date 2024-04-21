import { Router, Application } from "express";

import UserRoutes from "#routes/user.routes";

class Routes {
  public router: Router;

  constructor(private server: Application) {
    this.router = this.server._router;
    this.userRoutes();
  }

  protected userRoutes() {
    this.router.use("/user", new UserRoutes().router);
  }
}

export default Routes;
