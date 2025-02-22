import MahasiswaSidebar from "../../components/sidebar/MahasiswaSidebar";
import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";

const MahasiswaDashboard = () => (
  <div className="flex">
    <MahasiswaSidebar />
    <div className="flex-1">
      <Navbar title="Mahasiswa Dashboard" />
      <div className="p-4">
        <ProfileCard
          name="Mahasiswa C"
          ttl="Bandung, 15 Juli 2000"
          id="19000123"
          email="mahasiswa@example.com"
          role="mahasiswa"
        />
      </div>
    </div>
  </div>
);

export default MahasiswaDashboard;
