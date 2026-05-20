import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>ReconIQ Dashboard</h1>
      <ul>
        <li><Link href="/dashboard">Live Dashboard</Link></li>
        <li><Link href="/reconciliation">Reconciliation Status</Link></li>
      </ul>
    </main>
  );
}
