import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplashCursor from '../../UI/SplashCursor/SplashCursor'


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Dummy credentials
    const users = {
      admin: { role: "admin" },
      dosen: { role: "dosen" },
      mahasiswa: { role: "mahasiswa" },
    };

    if (users[username] && password === "password123") {
      const role = users[username].role;
      navigate(`/${role}`);
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-sm p-6 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
      <SplashCursor />
    </div>
  );
};

export default Login;
