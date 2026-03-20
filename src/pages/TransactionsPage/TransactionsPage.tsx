import { TransactionForm } from "../../features/transactions/components/TransactionForm";
import { TransactionList } from "../../features/transactions/components/TransactionList";
import { categories } from "../../data/seed/categories";
import type { TransactionProps } from "../../features/transactions/model/types";

export function TransactionPage({
  transactions,
  onDeleteTransaction,
  onAddTransaction,
}: TransactionProps) {
  return (
    <>
      <div>
        <TransactionForm
          categories={categories}
          onAddTransaction={onAddTransaction}
        />
      </div>
      <div>
        <TransactionList
          transactions={transactions}
          categories={categories}
          onDelete={onDeleteTransaction}
        />
      </div>
    </>
  );
}
