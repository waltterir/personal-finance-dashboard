export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: "expense" | "income";
  amount: number;
  categoryId: string;
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
