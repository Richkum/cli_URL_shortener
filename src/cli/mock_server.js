// import express from "express";
// import bodyParser from "body-parser";

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// app.post("/api/v1/shorten", (req, res) => {
//   const { url } = req.body;
//   if (!url) {
//     return res.status(400).json({ error: "Missing URL in request body" });
//   }
//   // Here you would typically perform the actual URL shortening logic,
//   // but for demonstration purposes, we'll just return a mock shortened URL.
//   const shortenedURL = `https://short.url/${Math.random()
//     .toString(25)
//     .substring(7)}`;
//   res.json({ result_url: shortenedURL });
// });

// app.listen(PORT, () => {
//   console.log(`Mock server listening at http://localhost:${PORT}`);
// });
