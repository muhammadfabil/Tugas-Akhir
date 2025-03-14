// MahasiswaDashboard.jsx
import MahasiswaSidebar from "../../components/sidebar/MahasiswaSidebar";
import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";
import JadwalBimbingan from "../../components/antrian/JadwalBimbingan";
import { useState } from "react";

const dosenPembimbing = [
  {
    nama: "Dr. Aulia Rahman",
    jadwal: [
      { hari: "Senin", kuota: 2 },
      { hari: "Kamis", kuota: 3 },
    ],
  },
  {
    nama: "Prof. Budi Santoso",
    jadwal: [
      { hari: "Selasa", kuota: 1 },
      { hari: "Jumat", kuota: 4 },
    ],
  },
];

const MahasiswaDashboard = () => {
  const [jadwalDipilih, setJadwalDipilih] = useState({});

  const handleBooking = (dosen, hari) => {
    setJadwalDipilih((prev) => ({ ...prev, [dosen]: hari }));
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Jadwal Dipilih", {
        body: `Anda telah memilih jadwal bimbingan dengan ${dosen} di hari ${hari}.`,
      });
    }
  };

  return (
    <div className="flex">
      <MahasiswaSidebar />
      <div className="flex-1">
        <Navbar title="Mahasiswa Dashboard" />
        <div className="p-4 space-y-6">
          <ProfileCard
            name="Mahasiswa C"
            ttl="Bandung, 15 Juli 2000"
            id="19000123"
            email="mahasiswa@example.com"
            role="mahasiswa"
          />

          {dosenPembimbing.map((dosen, index) => (
            <div
              key={index}
              className="bg-white text-[#1277C9] rounded-2xl shadow-lg p-4 space-y-4"
            >
              <h3 className="text-lg font-semibold">
                Jadwal Bimbingan - {dosen.nama}
              </h3>
              <JadwalBimbingan
                jadwal={dosen.jadwal}
                onBooking={(hari) => handleBooking(dosen.nama, hari)}
                terpilih={jadwalDipilih[dosen.nama]}
              />
              {jadwalDipilih[dosen.nama] && (
                <p className="text-green-600 font-medium">
                  Jadwal dipilih: {jadwalDipilih[dosen.nama]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MahasiswaDashboard;
