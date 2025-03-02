import React, { useState } from "react";
import axios from "axios";
import { AuthModalProps } from "./types";
import Loading from "./Loading";

const RegisterModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSwitch }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await axios.post("http://localhost:3000/auth/register", {
        username: email,
        password: password,
      });

      console.log("Registration successful");
      onClose(); // Close the modal
      onSwitch(); // Switch to login modal
    } catch (err: any) {
      console.error("Registration failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed.");
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
              <h2 className="text-xl font-bold">Register</h2>
              <button onClick={onClose} className="text-gray-600">✕</button>
            </div>
            <p className="text-sm text-gray-500">Create a new account</p>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="mt-4 space-y-3">
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded" 
              />
              <input 
                type="email" 
                placeholder="Email ID" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded" 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded" 
              />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border rounded" 
              />
            </div>

            <button
              onClick={handleRegister}
              className="mt-4 w-full bg-pink-500 text-white py-2 rounded"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <span className="text-pink-500 cursor-pointer" onClick={onSwitch}>
                Login
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
