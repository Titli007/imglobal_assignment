import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginModal from "./components/modals/Login";
import RegisterModal from "./components/modals/Register";
import HomePage from "./pages/HomePage";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Check if user is logged in

  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginModal isOpen={true} onClose={() => {<Navigate to="/" />}} onSwitch={() => {}} />} />
          <Route path="/register" element={<RegisterModal isOpen={true} onClose={() => {{<Navigate to="/" />}}} onSwitch={() => {}} />} />
          <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
