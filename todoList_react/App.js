import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = (ev) => {    // 인풋에 입력 가능하도록
    setTodo(ev.target.value);
  };

  const handleAdd = () => {
    setTodos((prev) => {
      const newTodos = [...prev, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
    setTodo("");
  };
  const handleDelete = (index) => {
    setTodos((prev) => {
      const newTodos = prev.filter((prev, ind) => ind !== index);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    })
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);
  return (
    <div className="App">
      <div>
        <input 
          value={todo} 
          onChange={handleTodo} 
          placeholder="스케줄을 입력하세요."
        ></input>
        <button onClick={handleAdd}>추가</button>
      </div>
      <div>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div>
              {todo}
              <button onClick={() => handleDelete(index)}>제거</button>
            </div>
          )) 
        ) : (
          <div>스케줄이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default App;
