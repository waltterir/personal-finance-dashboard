import type { Transaction } from "../../transactions/model/types";
import type { Budget } from "../../budgets/model/types";

export type AppRoutesProps = {
  transactions: Transaction[];
  budgets: Budget[];
  onDeleteTransaction: (id: string) => void;
  onAddTransaction: (transaction: Transaction) => void;
  onImportTransaction: (newTransaction: Transaction[]) => void;
};
