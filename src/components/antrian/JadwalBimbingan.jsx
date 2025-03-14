const JadwalBimbingan = ({ jadwal, onBooking, terpilih }) => {
    const handleBooking = (hari, kuota) => {
      if (kuota === 0) {
        alert("Kuota penuh untuk hari ini. Silakan pilih hari lain.");
        return;
      }
      onBooking(hari);
    };
  
    return (
      <div className="space-y-3">
        {jadwal.map((item, index) => (
          <button
            key={index}
            onClick={() => handleBooking(item.hari, item.kuota)}
            disabled={item.kuota === 0}
            className={`w-full py-2 rounded-lg shadow ${
              item.kuota === 0
                ? "bg-gray-300"
                : "bg-[#1277C9] text-white hover:bg-[#0f5fa0]"
            } ${terpilih === item.hari ? "ring-4 ring-yellow-400" : ""}`}
          >
            {item.hari} - Kuota: {item.kuota}{" "}
            {terpilih === item.hari ? "(Dipilih)" : ""}
          </button>
        ))}
      </div>
    );
  };
  
  export default JadwalBimbingan;
  