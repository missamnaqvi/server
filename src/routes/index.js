import userRoutes from "./userRoutes.js";
import residentRoutes from "./studentRoutes.js";
export const initializeRoutes = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/residents", residentRoutes);

  app.use((req, res) => {
    res.status(404).json({
      message: "Route Not Found",
      path: req.path,
    });
  });
};
