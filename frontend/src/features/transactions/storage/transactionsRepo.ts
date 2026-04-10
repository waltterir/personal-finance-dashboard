import type { Transaction } from "../model/types";

export interface TransactionsRepo {
  load(): null | Transaction[];
  save(items: Transaction[]): void;
}
