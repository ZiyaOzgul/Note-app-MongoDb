import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import pkg from "body-parser";
import cors from "cors";
import noteSchema from "./noteSchema.js";
const { json } = pkg;
dotenv.config();
const { PORT, Mongo_Url } = process.env;
const app = express();
app.use(cors());
app.use(json());

mongoose.connect(Mongo_Url).then(() => {
  app.listen(PORT, () => {
    console.log(`MongoDB bağlantısı sağlandı ve ${PORT} portu dinleniyor`);
  });
});

app.get("/notes", (req, res) => {
  noteSchema.find().then((result) => {
    res.send(result);
  });
});

app.post("/notes", (req, res) => {
  const noteValues = {
    title: req.body.title,
    note: req.body.note,
    color: req.body.color,
  };
  const addNote = new noteSchema(noteValues);
  addNote.save().then(() => {
    noteSchema.find().then((result) => {
      res.send(result);
    });
  });
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  noteSchema
    .deleteOne({ _id: id })
    .then(() => {
      console.log(`${id} idli Veri silindi.`);
    })
    .catch((hata) => {
      console.error("Silme hatası:", hata);
    })
    .finally(() => {
      noteSchema.find().then((result) => res.send(result));
    });
});
