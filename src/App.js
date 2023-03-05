import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Shopping-cart/Pages/Cart";
import Home from "./Shopping-cart/Pages/Home";
import NavBar from "./Shopping-cart/Pages/NavBar";
import store from "./Shopping-cart/Redux/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
