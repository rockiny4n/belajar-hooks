import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  };
  const removeTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <div>
      <h2>To-do List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Tambah</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text} <button onClick={() => removeTodo(t.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}