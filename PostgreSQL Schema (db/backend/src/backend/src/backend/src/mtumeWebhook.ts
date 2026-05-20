import { Request, Response } from "express";

// Accepts Mtume SBDH POST and stores/normalizes
export const mtumeWebhook = async (req: Request, res: Response) => {
    // TODO: HMAC verification, SBDH parsing, event normalization
    const event = req.body;
    // For now, just log and return OK for testing
    console.log("Mtume event received:", event);
    res.status(200).json({ received: true });
};
