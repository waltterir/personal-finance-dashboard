import type { Transaction } from "../../transactions/model";
import type { Budget } from "../../budgets/model";

export type AppRoutesProps = {
  transactions: Transaction[];
  budgets: Budget[];
  onDeleteTransaction: (id: string) => void;
  onAddTransaction: (transaction: Transaction) => void;
  onImportTransaction: (newTransaction: Transaction[]) => void;
};
