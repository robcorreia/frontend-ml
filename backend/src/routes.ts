import { Request, Response, Router } from "express";
import fetch from "node-fetch";

const route = Router();

route.get("/api/items", async (req: Request, res: Response) => {
  const API = process.env.API_URL || "";
  const response: any = await fetch(
    `${API}sites/MLA/search?limit=4&q=${req?.query?.q}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  res.json(result?.results || []);
});

route.get("/api/items/:id", async (req: Request, res: Response) => {
  const API = process.env.API_URL || "";
  const response = await fetch(`${API}items/${req?.params?.id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  res.json(await response.json());
});

export default route;
