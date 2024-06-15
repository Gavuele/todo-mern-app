import axios from "axios";

const Todo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios.delete(`https://todo-mern-app-backend-tt8c.onrender.com/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => console.log(err));
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="flex gap-4 items-center mb-4 justify-between">
      <span>{text}</span>
      <div className="flex gap-4">
        <button className="border-2 border-sky-500 hover:bg-gray-900 p-2 rounded-md" onClick={updateToDo}>
          Update
        </button>
        <button className="border-2 border-sky-500 hover:bg-gray-900 p-2 rounded-md" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
