import React, { useState } from "react";
import mouseImage from './assets/mouse.png';
import keyboardImage from './assets/keyboard.png';
import microphoneImage from './assets/mic.png';
import cpuImage from './assets/cpu.png';
import gpuImage from './assets/gpu.png';
import ramImage from './assets/ram.png';
import monitorImage from './assets/monitor.png';
import speakerImage from './assets/speaker.png';

function App() {
  const [activeTab, setActiveTab] = useState("input");

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar/Header */}
      <header className="bg-[#64c2c0] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Peralatan Komputer</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button
                  className={`${
                    activeTab === "input" ? "underline" : ""
                  } hover:underline`}
                  onClick={() => setActiveTab("input")}
                >
                  Input
                </button>
              </li>
              <li>
                <button
                  className={`${
                    activeTab === "pemrosesan" ? "underline" : ""
                  } hover:underline`}
                  onClick={() => setActiveTab("pemrosesan")}
                >
                  Pemrosesan
                </button>
              </li>
              <li>
                <button
                  className={`${
                    activeTab === "output" ? "underline" : ""
                  } hover:underline`}
                  onClick={() => setActiveTab("output")}
                >
                  Output
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {activeTab === "input" && (
          <section id="input" className="w-full md:w-3/4 lg:w-1/2 bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Peralatan Input</h2>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={mouseImage}
                alt="Mouse"
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <p className="text-gray-700 mb-4">
              Mouse adalah perangkat input yang digunakan untuk mengontrol kursor pada layar komputer, memungkinkan pengguna untuk memilih, mengklik, menyeret, dan menjalankan perintah. Mouse dapat berbasis sensor optik atau laser untuk mendeteksi gerakan.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={keyboardImage}
                alt="Keyboard"
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <p className="text-gray-700 mb-4">
              Keyboard adalah perangkat input utama untuk memasukkan data berupa teks, angka, dan simbol ke dalam komputer. Terdiri dari tombol-tombol yang tersusun dalam tata letak seperti QWERTY, keyboard digunakan untuk mengetik, menjalankan perintah, atau menggunakan shortcut.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={microphoneImage}
                alt="Microphone"
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <p className="text-gray-700">
              Microphone adalah perangkat input audio yang mengubah gelombang suara menjadi sinyal listrik untuk direkam atau dikirimkan ke perangkat lain.
              </p>
            </div>
          </section>
        )}

        {activeTab === "pemrosesan" && (
          <section id="pemrosesan" className="w-full md:w-3/4 lg:w-1/2 bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Peralatan Pemrosesan</h2>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={cpuImage}
                alt="CPU"
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <p className="text-gray-700 mb-4">
              CPU adalah komponen utama komputer yang berfungsi sebagai pusat pemrosesan data, mengelola instruksi dari perangkat lunak, dan menjalankan perhitungan logis serta aritmatika.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={gpuImage}
                alt="GPU"
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <p className="text-gray-700">
              GPU adalah prosesor khusus yang dirancang untuk memproses grafis dan melakukan perhitungan paralel dalam jumlah besar. Biasanya digunakan untuk rendering visual pada game, desain grafis, atau aplikasi berbasis AI dan komputasi ilmiah.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={ramImage}
                alt="RAM"
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <p className="text-gray-700">
              RAM adalah memori sementara yang digunakan komputer untuk menyimpan data yang sedang diproses atau dibutuhkan secara cepat oleh CPU.
              </p>
            </div>
          </section>
        )}

        {activeTab === "output" && (
          <section id="output" className="w-full md:w-3/4 lg:w-1/2 bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Peralatan Output</h2>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={monitorImage}
                alt="Monitor"
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <p className="text-gray-700 mb-4">
              Monitor adalah perangkat output visual yang menampilkan informasi dari komputer dalam bentuk gambar atau teks di layar. Monitor menggunakan teknologi seperti LCD, LED, atau OLED untuk menghasilkan tampilan dengan resolusi dan kualitas warna yang bervariasi.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={speakerImage}
                alt="Speaker"
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <p className="text-gray-700">
              Speaker adalah perangkat output audio yang mengubah sinyal listrik menjadi gelombang suara untuk didengar oleh pengguna. 
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
