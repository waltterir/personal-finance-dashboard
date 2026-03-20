import type { Transaction } from "../../transactions/model/types";

export type AppRoutesProps = {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
  onAddTransaction: (transaction: Transaction) => void;
};
