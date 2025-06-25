import { nanoid } from "nanoid"
import URL from "../models/url.js";

export async function handleGenerateShortUrl(req,resp){
    const { body } = req;
// Validate the URL
if (!body.url) {
    return resp.status(400).json({ error: "insufficient details can not proside" });
}
 const shortId = nanoid(8);
 await URL.create({
   shortId,
   redirectedUrl: body.url,
   createdAt: new Date().toLocaleString(),
   lastClickedAt: "",
   visitHistory: []
 });
 return resp.json({
   shortId,
});
}
