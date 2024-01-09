import express, { Application } from "express";

const port: number = parseInt(process.env.PORT!);

const app: Application = express();

const server = app.listen(port, () => {
  console.log("database connected...!!!");
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("uncaughtException", reason);

  server.close(() => {
    process.exit(1);
  });
});
