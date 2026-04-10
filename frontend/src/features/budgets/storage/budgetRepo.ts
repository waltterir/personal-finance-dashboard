import type { Budget } from "../model/types";

export interface BudgetRepo {
  load(): Budget[];
  save(items: Budget[]): void;
}
