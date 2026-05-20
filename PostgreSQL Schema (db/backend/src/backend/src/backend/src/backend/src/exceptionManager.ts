// Simple exception handler

type ExceptionInput = {
    bankTransactionId: number;
    ledgerEntryId: number;
    type: string;
    note?: string;
};

export async function handleException(input: ExceptionInput) {
    // TODO: Create exception in DB and return object
    return {
        ...input,
        status: "unresolved",
        createdAt: new Date().toISOString()
    };
}
