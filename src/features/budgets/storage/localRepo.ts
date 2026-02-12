import { STORAGE_KEYS } from "../../../shared/storage/keys";
import type { BudgetRepo } from "./budgetRepo";
import type { Budget } from "../model/types";
import {
  safeJsonParse,
  safeJsonStringify,
} from "../../../shared/storage/safeJson";

export function createLocalBudgetsRepo(): BudgetRepo {
  const key = STORAGE_KEYS.budgets;
  return {
    load(): Budget[] {
      const stored = localStorage.getItem(key);
      return safeJsonParse(stored, []);
    },
    save(items: Budget[]) {
      localStorage.setItem(key, safeJsonStringify(items));
    },
  };
}
