import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="flex w-full h-screen space-x-4 bg-neutral-100">
      <Notes />
      <AddNote />
    </div>
  );
}

export default App;
