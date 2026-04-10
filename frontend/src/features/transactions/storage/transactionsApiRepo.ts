import type { Transaction } from "../model/types";
import type { TransactionsRepo } from "./transactionsRepo";

const API_BASE_URL = "http://127.0.0.1:8000";

export function createApiTransactionsRepo(): TransactionsRepo {
  return {
    async load() {
      const res = await fetch(`${API_BASE_URL}/transactions/`);

      if (!res.ok) {
        throw new Error("Failed to fetch transactions");
      }

      const data: Transaction[] = await res.json();
      return data;
    },

    async save() {
      throw new Error("Not implemented yet");
    },
  };
}
