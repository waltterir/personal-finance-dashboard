import type { Transaction } from "../model/types";
import { TransactionRow } from "./TransactionRow";
import type { Category } from "../model/types";

export function TransactionList(props: {
  transactions: Transaction[];
  categories: Category[];
  onDelete: (id: string) => void;
}) {
  return (
    <div>
      <ul className="flex">
        {props.transactions.map((transaction) => {
          return (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              category={props.categories.find(
                (c) => c.id === transaction.categoryId,
              )}
              onDelete={props.onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}
