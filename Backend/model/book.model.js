import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  Name: String,
  Title: String,
  Price: Number,
  Category: String,
  Image: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;