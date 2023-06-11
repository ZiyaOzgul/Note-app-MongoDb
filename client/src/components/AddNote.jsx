import React, { useEffect, useState } from "react";
import { UilAngleRightB } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { getNotesAsync, postNotesAsync } from "../redux/notesSlice/notesSlice";
//hover:scale-105  transition-all ease-in-out duration-500
const AddNote = () => {
  const [color, setColor] = useState("red");
  const [title, setTitle] = useState("");
  const [noteD, setNoteD] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      postNotesAsync({
        title: title,
        note: noteD,
        color: color,
      })
    );
    setNoteD("");
    setTitle("");
  };
  const isLoading = useSelector((state) => state.notes.isLoading);

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);
  if (isLoading) {
    <div className="flex items-center justify-center ">
      <h1 className="font-bold text-6xl text-neutral-700">Loading ...</h1>
    </div>;
  } else {
    return (
      <div className="flex items-center justify-center flex-col w-4/5 ">
        <div className="flex flex-col items-center justify-center space-y-6 w-4/5 border shadow-lg rounded-lg  ">
          <h1 className="font-bold text-4xl text-neutral-700  hover:mt-2 hover:-translate-y-2 ease-in-out duration-500">
            Add Note
          </h1>
          <input
            type="text"
            placeholder="Note Title..."
            className="w-full px-3 py-4 outline-none border-none rounded-lg"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name="text"
            cols="30"
            rows="10"
            className="border focus:border-gray-700 bg-white transition-all ease-in-out duration-500  border-black px-2 py-4 w-full rounded-lg"
            placeholder="Enter Your Note..."
            onChange={(e) => {
              setNoteD(e.target.value);
            }}
            value={noteD}
          ></textarea>
          <div className="flex items-center w-full justify-between space-x-6">
            <div className="flex items-center flex-col justify-center mx-6 space-y-6 group">
              <h2 className="font-semibold text-xl text-neutral-600 group-hover:-translate-y-2 ease-in-out duration-500">
                Select Note Color
              </h2>
              <div className="flex items-center justify-center space-x-6 w-full py-3">
                <button
                  className={`rounded-full bg-red-400 border w-10 h-10 group  hover:scale-110  transition-all ease-in-out duration-500 ${
                    color === "bg-red-400" ? "border border-black" : null
                  } `}
                  onClick={() => {
                    setColor("bg-red-400");
                  }}
                ></button>
                <button
                  className={`rounded-full bg-blue-400 border w-10 h-10 group  hover:scale-110  transition-all ease-in-out duration-500 ${
                    color === "bg-blue-400" ? "border border-black" : null
                  }`}
                  onClick={() => {
                    setColor("bg-blue-400");
                  }}
                ></button>
                <button
                  className={`rounded-full bg-green-400 border w-10 h-10 group  hover:scale-110  transition-all ease-in-out duration-500 ${
                    color === "bg-green-400" ? "border border-black" : null
                  }`}
                  onClick={() => {
                    setColor("bg-green-400");
                  }}
                ></button>
                <button
                  className={`rounded-full bg-yellow-400 border w-10 h-10 group  hover:scale-110  transition-all ease-in-out duration-500 ${
                    color === "bg-yellow-400" ? "border border-black" : null
                  }`}
                  onClick={() => {
                    setColor("bg-yellow-400");
                  }}
                ></button>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="border border-neutral-600 bg-neutral-400 text-xl px-4 py-3  text-white outline-none hover:bg-neutral-300 checked:outline-neutral-500 checked:scale-95 group mx-6 rounded-lg     "
              >
                <p className="font-medium text-sm group-hover:translate-x-2 ease-in-out  duration-500 group">
                  <UilAngleRightB className="hidden w-4 h-4 text-black group-hover:visible"></UilAngleRightB>
                  Save Note
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AddNote;
