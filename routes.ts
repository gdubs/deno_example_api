import { Router } from "https://deno.land/x/oak/mod.ts";
import { getExistMessage } from "./controllers/doiexist.ts";
import { getExpenses, getExpense, addExpense } from "./controllers/expenses.ts";

const router = new Router();

router
  .get("/api/doiexist", getExistMessage)
  .get("/api/expenses", getExpenses)
  .get("/api/expenses/:id", getExpense)
  .post("/api/expenses", addExpense);

export default router;
