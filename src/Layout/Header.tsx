import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center p-5 px-10 bg-[#222]">
      <h2 className="text-white text-2xl">Finance Dashboard</h2>
      <nav className="flex gap-20 text-blue-300">
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/transactions"}>Transactions</Link>
        <Link to={"/budgets"}>Budgets</Link>
        <Link to={"/import"}>Import</Link>
      </nav>
    </header>
  );
}
