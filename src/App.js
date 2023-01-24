import "./App.css";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import FoodMenu from "./components/FoodMenu";
import BeveragesMenu from "./components/BeveragesMenu";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcomeScreen" element={<WelcomePage />} />
          <Route path="/foodMenu" element={<FoodMenu />} />
          <Route path="/beveragesMenu" element={<BeveragesMenu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
