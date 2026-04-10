export type Transaction = {
  id: number;
  transaction_date: string;
  description: string;
  amount: number;
  category: string;
};

export type Category = {
  id: string;
  name: string;
};

export type TransactionProps = {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
  onAddTransaction: (transaction: Transaction) => void;
};
