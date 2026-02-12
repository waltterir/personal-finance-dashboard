import type { Transaction } from "../model/types";

export interface TransactionsRepo {
  load(): Transaction[];
  save(items: Transaction[]): void;
}
