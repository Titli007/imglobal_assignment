import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import Loading from "../components/modals/Loading";

const HomePage: React.FC = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:3000/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        localStorage.removeItem("authToken");
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning ☀️";
    if (hour < 18) return "Good Afternoon 🌤";
    return "Good Evening 🌙";
  };

  if (loading) return <Loading isOpen={true} />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-pink-200 text-white">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-2">{getGreeting()}, {user?.username}!</h2>
        <p className="text-gray-600 text-sm mb-4">
          "Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill
        </p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default HomePage;
