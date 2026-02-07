import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "Success" });
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});