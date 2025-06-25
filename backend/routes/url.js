import express from "express";
import { handleGenerateShortUrl } from "../controllers/url.js";
import URL from "../models/url.js";

const router = express.Router();

router.post("/api/url", handleGenerateShortUrl);
router.get("/api/analytics", async (req, res) => {
    const shortId = req.query.shortId;
    const entry = await URL.findOne({ shortId });
    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    res.json({
        shortId: entry.shortId,
        redirectedUrl: entry.redirectedUrl,
        totalClicks: entry.visitHistory.length,
        createdAt: entry.createdAt,
        lastClickedAt: entry.lastClickedAt,
        visitHistory: entry.visitHistory
    });
});

export default router;
