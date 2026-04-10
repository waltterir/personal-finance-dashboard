import type { Transaction } from "../../transactions/model";

export type ImportPageProps = {
  onImportTransactions: (transaction: Transaction[]) => void;
};
