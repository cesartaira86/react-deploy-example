import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useContext } from "react";

export function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </div>
    </main>
  );
}

export default App;
