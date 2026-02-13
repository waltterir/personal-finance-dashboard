import type { Transaction } from "../model/types";
import type { Category } from "../model/types";

export type TransactionRowProps = {
  transaction: Transaction;
  category: Category | undefined;
  onDelete: (id: string) => void;
};

export function TransactionRow(props: TransactionRowProps) {
  return (
    <>
      <li className="ml-7">
        <div>{props.transaction.date}</div>
        <div>{props.transaction.description}</div>
        <div>{props.category?.name}</div>
        <div>{props.transaction.type}</div>
        <div>{props.transaction.amount}€</div>
        <button onClick={() => props.onDelete(props.transaction.id)}>
          Delete
        </button>
      </li>
    </>
  );
}
