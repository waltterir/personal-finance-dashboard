import { STORAGE_KEYS } from "../../../shared/storage/keys";
import type { TransactionsRepo } from "./transactionsRepo";
import type { Transaction } from "../model/types";
import {
  safeJsonParse,
  safeJsonStringify,
} from "../../../shared/storage/safeJson";

export function createLocalTransactionsRepo(): TransactionsRepo {
  const key = STORAGE_KEYS.transactions;
  return {
    load(): null | Transaction[] {
      const stored = localStorage.getItem(key);
      if (!stored) return null;
      return safeJsonParse(stored, []);
    },
    save(items: Transaction[]) {
      localStorage.setItem(key, safeJsonStringify(items));
    },
  };
}
