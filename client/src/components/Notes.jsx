import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allNotes, deleteNoteAsync } from "../redux/notesSlice/notesSlice";

const Notes = () => {
  const notes = useSelector(allNotes);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.notes.isLoading);
  if (isLoading) {
    <div className="flex items-center justify-center">
      <h1 className="font-semibold text-4xl text-neutral-600">Loading ...</h1>
    </div>;
  } else {
    return (
      <div className="flex flex-col space-y-12 justify-start items-start w-1/5  overflow-y-auto overflow-x-hidden my-6 ">
        <h1 className="font-semibold text-2xl text-neutral-600 w-full text-center">
          Notes
        </h1>
        {notes.map((item) => (
          <div
            className={`${item.color} relative flex group flex-col items-start flex-start space-y-6 border mx-3 p-2 w-4/5 shadow-2xl rounded-lg hover:translate-x-6 ease-in-out duration-500 cursor-pointer`}
            key={item._id}
          >
            <h1 className="font-semibold text-2xl text-neutral-600 text-center">
              {item.title}
            </h1>
            <p className="font-medium text-md text-neutral-500">{item.note}</p>
            <div
              onClick={() => {
                dispatch(deleteNoteAsync({ id: item._id }));
              }}
              className="font-semibold text-4xl  text-neutral-600 absolute -top-8 right-4 opacity-0 group-hover:opacity-75 group-hover:right-2 duration-500 ease-in-out transition-all"
            >
              x
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Notes;
