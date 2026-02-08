import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./env.js"; // updated import to match file location

const app = express();

// required for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

const PORT = ENV.PORT || 3000;

app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "Success" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "admin", "dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../admin","dist","index.html"));
    })

}

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
