import {
  TransactionForm,
  TransactionList,
} from "../../features/transactions/components";
import { categories } from "../../data/seed";
import type { TransactionProps } from "../../features/transactions/model";

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
