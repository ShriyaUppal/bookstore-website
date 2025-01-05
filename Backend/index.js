import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGOURI;

console.log("MONGOURI from .env:", URI);
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Successfully Connected To Database");
} catch {
  console.log("Getting Error while connecting to database");
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
