import { useEffect, useState } from "react";
import axios from "axios";
import Todo from './components/Todo';
import Popup from "./components/Popup";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios.get(`https://todo-mern-app-backend-fgxm.onrender.com/api/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios.post(`https://todo-mern-app-backend-fgxm.onrender.com/api/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="relative">
      <div className={`bg-black min-h-screen flex flex-col justify-center items-center text-white text-2xl transition ${showPopup ? 'blur' : ''}`}>
        <h1 className="text-6xl">Todo App</h1>
        <div className="m-10">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="text-black p-2 rounded-md"
            placeholder="Add a ToDo..."
          />
          <button onClick={saveToDo} className="border-2 border-sky-500 px-4 py-2 ml-2 hover:bg-gray-900 rounded-md">Add</button>
        </div>
        <div className="list">
          {toDos.map((el) => (
            <Todo
              key={el._id}
              text={el.toDo}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
};

export default App;
