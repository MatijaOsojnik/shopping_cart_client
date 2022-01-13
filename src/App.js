import React from "react"
import Cart from "./components/Cart"
import Items from "./pages/Items"

const App = (props) => {
  // const [items, setItems] = useState([]);
  // const [token, setToken] = useState("");

  // useEffect(() => {   
  //   const local_token = sessionStorage.get("token")
  //   setToken(local_token);
  //   API.getItems().then(res => setItems(res))
  // }, [])

    return (
      <div className="flex justify-center content-center">
        <Items />

        <Cart/>

          {/* {items.map((item) =>
            (
              <h1 key={item.id} className="text-center">
               {item.name}
              </h1>
            )
          )} */}
       
      </div>
    );
}

export default App;
