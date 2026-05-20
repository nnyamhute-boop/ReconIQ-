// Simple matching engine — replace with ML later!

type Transaction = {
    id: number;
    amount: number;
    date: string;
    reference: string;
    description?: string;
};

type LedgerEntry = Transaction;

type Match = {
    bankTransactionId: number;
    ledgerEntryId: number;
    matchType: "exact" | "fuzzy" | "ai";
    confidence: number;
};

export async function matchTransactions(
    bankTransactions: Transaction[],
    ledgerEntries: LedgerEntry[]
): Promise<Match[]> {
    const matches: Match[] = [];

    // Exact match
    for (const bt of bankTransactions) {
        for (const le of ledgerEntries) {
            // Amount, date, reference must match
            if (
                bt.amount === le.amount &&
                bt.date === le.date &&
                bt.reference &&
                le.reference &&
                bt.reference === le.reference
            ) {
                matches.push({
                    bankTransactionId: bt.id,
                    ledgerEntryId: le.id,
                    matchType: "exact",
                    confidence: 0.99
                });
            }
        }
    }

    // Add fuzzy/AI match logic here

    return matches;
}
