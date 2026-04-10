import type { Transaction } from "../model/types";

export interface TransactionsRepo {
  load(): null | Promise<Transaction[]>;
  save(items: Transaction[]): Promise<void>;
}
