import type { Transaction } from "../../transactions/model/types";

export type ImportPageProps = {
  onImportTransactions: (transaction: Transaction[]) => void;
};
