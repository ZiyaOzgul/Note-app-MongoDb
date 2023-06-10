import mongoose from "mongoose";

const Schema = mongoose.Schema;
const noteSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "red",
  },
});

export default mongoose.model("note", noteSchema);
