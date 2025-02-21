import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import DosenDashboard from "./pages/dosen/Dashboard";
import MahasiswaDashboard from "./pages/mahasiswa/Dashboard";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dosen" element={<DosenDashboard />} />
        <Route path="/mahasiswa" element={<MahasiswaDashboard />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
