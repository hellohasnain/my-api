import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Api = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await response.json();
      setTodo(data);
    };
    fetchTodos();
  }, [id]);
  console.log(todo);
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <p className="text-xl font-bold  mb-2">Title: {todo?.title}</p>
      <p className="text-lg mb-1">UserId: {todo?.userId}</p>
      <p className="text-lg mb-1">Id: {todo?.id}</p>
      <p
        className={`text-lg font-bold ${
          todo?.completed ? "text-green-600" : "text-red-600"
        }`}
      >
        Completed: {todo?.completed ? "Yes" : "No"}
      </p>
      <div className="flex justify-center pt-5">
        <img src="/khushi.jpg" alt="" width={500} />
      </div>
    </div>
  );
};

export default Api;
