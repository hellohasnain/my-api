import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setTodos(data);
        } else {
          setError(true);
        }
        setLoding(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);
  console.log(todos);
  console.log(error);
  return (
    <div className="text-xl font-bold mx-10">
      <img src="/tatti.jpg" alt="" width={670} />
      {loading ? (
        <h2> Loading....</h2>
      ) : (
        todos.map((item) => (
          <Link key={item.id} to={`/Api?id=${item.id}`}>
            <p>{item.title}</p>
          </Link>
        ))
      )}
      {error && <h2> Error....</h2>}
    </div>
  );
};

export default About;
