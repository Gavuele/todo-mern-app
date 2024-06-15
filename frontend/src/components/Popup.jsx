import axios from "axios";
import { useState } from "react";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateToDo = () => {
    axios.put(`https://todo-mern-app-backend-tt8c.onrender.com/api/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <button className="absolute ml-[300px]" onClick={() => setShowPopup(false)}>
          ✖
        </button>
        <h1 className="text-2xl mb-4">Update ToDo</h1>
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="border p-2 w-full mb-4 rounded-md"
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
