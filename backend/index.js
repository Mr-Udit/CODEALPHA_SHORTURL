import express from 'express';
import router from './routes/url.js';
import connectDB from './connect.js';
import URL from './models/url.js';
import cors from 'cors';
connectDB("enter the conection string here");


const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());
app.use(router);
app.get("/:shortid",  async(req, res) => {
    const shortId = req.params.shortid;
    const date = new Date();
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;
    console.log(ip)
    console.log(req.socket.remoteAddress)
    const lastClickedAt = new Date();
    const entry = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`, ip } }, lastClickedAt }, { new: true });
    res.redirect(entry.redirectedUrl);
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
    });
