import { TransactionForm } from "../../features/transactions/components/TransactionForm";
import { TransactionList } from "../../features/transactions/components/TransactionList";
import { categories } from "../../data/seed/categories";
import type { Transaction } from "../../features/transactions/model/types";

export function TransactionPage(props: {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}) {
  return (
    <>
      <div>
        <TransactionForm />
      </div>
      <div>
        <TransactionList
          transactions={props.transactions}
          categories={categories}
          onDelete={props.onDeleteTransaction}
        />
      </div>
    </>
  );
}
