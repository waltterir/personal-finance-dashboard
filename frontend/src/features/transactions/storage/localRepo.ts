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
    async load(): Promise<Transaction[]> {
      const stored = localStorage.getItem(key);
      if (!stored) return [];

      return safeJsonParse(stored, []);
    },

    async save(items: Transaction[]): Promise<void> {
      localStorage.setItem(key, safeJsonStringify(items));
    },
  };
}
