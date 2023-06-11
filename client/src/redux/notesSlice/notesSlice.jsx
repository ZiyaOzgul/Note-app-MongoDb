import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotesAsync = createAsyncThunk(
  "/notes/getNotesAsync",
  async () => {
    const res = await axios.get("http://localhost:3001/notes");
    return res.data;
  }
);

export const postNotesAsync = createAsyncThunk(
  "/notes/postNotesAsync",
  async (data) => {
    const res = await axios.post("http://localhost:3001/notes", data);
    return res.data;
  }
);

export const deleteNoteAsync = createAsyncThunk(
  "/notes/deleteNoteAsync",
  async ({ id }) => {
    const res = await axios.delete(`http://localhost:3001/notes/${id}`);
    return res.data;
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    note: [
      // {
      //   _id: 1,
      //   title: "Note 1",
      //   note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In placeat delectus quia beatae corporis molestiae, quisquam suscipit ab autem neque omnis sunt, quasi quaerat rerum. Similique tempore voluptas alias veritatis!",
      //   color: "red",
      // },
      // {
      //   _id: 2,
      //   title: "Note 1",
      //   note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In placeat delectus quia beatae corporis molestiae, quisquam suscipit ab autem neque omnis sunt, quasi quaerat rerum. Similique tempore voluptas alias veritatis!",
      //   color: "red",
      // },
      // {
      //   _id: 3,
      //   title: "Note 1",
      //   note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In placeat delectus quia beatae corporis molestiae, quisquam suscipit ab autem neque omnis sunt, quasi quaerat rerum. Similique tempore voluptas alias veritatis!",
      //   color: "red",
      // },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //get
    [getNotesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getNotesAsync.fulfilled]: (state, action) => {
      state.note = action.payload;
      state.isLoading = false;
    },
    [getNotesAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    //post
    [postNotesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postNotesAsync.fulfilled]: (state, action) => {
      state.note = action.payload;
      state.isLoading = false;
    },
    [postNotesAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    //del
    [deleteNoteAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteNoteAsync.fulfilled]: (state, action) => {
      state.note = action.payload;
      state.isLoading = false;
    },
    [deleteNoteAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
  reducers: {
    // addnote: (state, action) => {
    //   state.note.push({
    //     _id: state.note.length + 1,
    //     title: action.payload.title,
    //     note: action.payload.note,
    //     color: action.payload.color,
    //   });
    // },
  },
});

// export const { addnote } = notesSlice.actions;
export const allNotes = (state) => state.notes.note;
export default notesSlice.reducer;
