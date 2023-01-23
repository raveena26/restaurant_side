import "./App.css";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="welcomeScreen" element={<WelcomePage />}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
