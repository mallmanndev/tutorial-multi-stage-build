import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Olá ${name}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
