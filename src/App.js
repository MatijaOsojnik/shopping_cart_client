import React, {useState, useEffect} from "react"
import API from "./api/controllers/items";
import './App.css';

const App = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.getItems().then(res => setItems(res))
  }, [])

    return (
      <div className="flex justify-center content-center">
        <div className="text-3xl font-bold">
          {items.map((item) =>
            (
              <h1 key={item.id} className="text-center">
               {item.name}
              </h1>
            )
          )}
        </div>
      </div>
    );
}

export default App;
