import type { Transaction } from "../../transactions/model/types";
import type { BudgetsRow } from "./types";
import type { Budgets } from "./types";
import type { Category } from "../../transactions/model/types";

export function spentByCategory(
  transactions: Transaction[],
  month: string,
): Record<string, number> {
  // palauttaa tyhjän objektin
  const totals: Record<string, number> = {}; // <- tyhjä objekti summille
  for (let t of transactions) {
    const tMonth = t.date.slice(0, 7); // <- otetaan kuukausi muodossa "YYYY-MM"
    if (tMonth !== month) continue; // <- jos kuukausi ei täsmää, jatketaan seuraavaan
    if (t.type !== "expense") continue; // <- jos ei ole kulu, jatketaan seuraavaan
    const currentTotal = totals[t.categoryId] || 0; // <- haetaan nykyinen summa, tai 0 jos ei vielä ole
    totals[t.categoryId] = currentTotal + Math.abs(t.amount); // <- lisätään kulun määrä, negatiivisista positiivisia
  }
  return totals;
}

export function buildBudgetRows(
  budgets: Budgets[],
  categories: Category[],
  spentTotals: Record<string, number>,
): BudgetsRow[] {
  const rows: BudgetsRow[] = [];
  for (let b of budgets) {
    const category = categories.find((c) => c.id === b.categoryId);
    if (!category) continue; // jos kategoriaa ei löydy, ohitetaan
    const categoryName = category.name; // haetaan kategorian nimi
    const spent = spentTotals[b.categoryId] || 0; // haetaan kulut, tai 0 jos ei vielä ole
    const percent = b.limit > 0 ? (spent / b.limit) * 100 : 0; // vältetään jako nollalla
    const id = `${b.month}-${b.categoryId}`; // luodaan yksilöllinen id
    rows.push({
      // rakennetaan rivi
      id: id,
      category: categoryName,
      limit: b.limit,
      spent: spent,
      percent: Math.round(percent),
    });
  }
  return rows;
}
