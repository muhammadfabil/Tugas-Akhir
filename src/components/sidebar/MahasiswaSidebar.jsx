import { Link } from "react-router-dom";

const MahasiswaSidebar = () => (
  <div className="w-64 bg-blue-500 text-white min-h-screen p-4">
    <h2 className="text-2xl font-bold mb-6">Mahasiswa Panel</h2>
    <ul className="space-y-4">
      <li><Link to="/mahasiswa">Dashboard</Link></li>
      <li><Link to="/mahasiswa/bimbingan">Pilih Dosen Pembimbing</Link></li>
      <li><Link to="/mahasiswa/administrasi">Pelayanan Administrasi</Link></li>
      <li><Link to="/mahasiswa/antrian">antrean</Link></li>
    </ul>
  </div>
);

export default MahasiswaSidebar;
