import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { mtumeWebhook } from "./mtumeWebhook";
import { matchTransactions } from "./matchingEngine";
import { handleException } from "./exceptionManager";

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.post("/api/public/mtume/webhook", mtumeWebhook);

// For testing matching logic
app.post("/api/match", async (req, res) => {
    const matches = await matchTransactions(req.body.bankTransactions, req.body.ledgerEntries);
    res.json({ matches });
});

// Exception handler endpoint
app.post("/api/exception", async (req, res) => {
    const exception = await handleException(req.body);
    res.json({ exception });
});

app.listen(process.env.PORT || 3001, () => {
    console.log("ReconIQ backend running on port 3001");
});
