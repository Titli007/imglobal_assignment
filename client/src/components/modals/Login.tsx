import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { AuthModalProps } from "./types";
import Loading from "./Loading";

const LoginModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSwitch }) => {
  const [loading, setLoading] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username: identifier,
        password,
      });

      const token = response.data.access_token;
      localStorage.setItem("authToken", token);

      console.log("Login successful:", response.data);
      onClose(); // Close the modal
      navigate("/home"); // Redirect to home after login
    } catch (err: any) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Loading isOpen={loading} />
      {!loading && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Login</h2>
              <button onClick={onClose} className="text-gray-600">✕</button>
            </div>
            <p className="text-sm text-gray-500">Sign in to your account</p>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Email ID"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              onClick={handleLogin}
              className="mt-4 w-full bg-pink-500 text-white py-2 rounded"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <span className="text-pink-500 cursor-pointer" onClick={onSwitch}>
                Register
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
