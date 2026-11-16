import cegahscam from "../assets/feat-projects/cegahscam.png";
import fitur1 from "../assets/feat-projects/cegahScam/fitur1.png";
import fitur2 from "../assets/feat-projects/cegahScam/fitur2.png";
import fitur3 from "../assets/feat-projects/cegahScam/fitur3.png";

import ts from "../assets/icon-tech/ts-2.svg";
import tailcss from "../assets/icon-tech/tailwind.svg";
import rct from "../assets/icon-tech/react.svg";
import nodejs from "../assets/icon-tech/node-js.svg";
import exjs from "../assets/icon-tech/express.svg";
import figma from "../assets/icon-tech/figma.svg";

export default function CegahScam() {
  console.log("yala");

  return (
    <main className="w-full bg-[#F5EFE3] pt-15 font-mono">
      <section id="hero" className="relative w-full h-125 tracking-normal">
        <img src={cegahscam} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/40 to-black/20 backdrop-blur-sm" />

        <div className="absolute inset-0 flex flex-col items-start justify-end px-20 text-white py-10">
          <h1 className="text-6xl font-bold">CegahScam</h1>
          <p className="italic">"Kenali, Pahami, Hadapi"</p>
          <a
            href="https://github.com/njhbil/CegahScam"
            className="bg-[#B8892D] px-3 py-2 rounded-lg mt-2 shadow-lg"
          >
            Cek Repository disini
          </a>
        </div>
      </section>

      <section
        id="desc"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full min-h-screen px-10 lg:px-20 py-10 tracking-normal"
      >
        {/* Kolom kiri */}
        <div className="lg:col-span-5 flex flex-col">
          <p className="text-[#B8892D]">Project Overview</p>
          <h1 className="text-3xl font-bold mb-8">3 Fitur Utama.</h1>

          <div className="w-full flex items-center justify-center">
            <img
              src={fitur1}
              alt="Fitur utama CegahScam"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Dua gambar bagian atas */}
          <div className="grid grid-cols-2 gap-4 items-start">
            <img
              src={fitur2}
              alt="Fitur CegahScam kedua"
              className="w-full h-auto object-contain rounded-2xl"
            />

            <img
              src={fitur3}
              alt="Fitur CegahScam ketiga"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Deskripsi */}
          <div className="gap-5 text-sm text-[#4F5B2A]">
            <div>
              <h2 className="font-bold text-base mb-2">About CegahScam</h2>
              <p className="leading-relaxed">
                CegahScam merupakan platform yang membantu pengguna dalam
                mengatasi permasalahan terkait scam dan phising. 3 Fitur
                utamanya yaitu Pelaporan darurat (emergency), analisis
                mencurigakan dan edukasi terkait tren terbaru
              </p>
            </div>
          </div>

          {/* Kalimat penutup */}
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
            Kenali berbagai modus penipuan, pahami indikasinya, dan lindungi
            dirimu dalam satu platform.
          </h2>
        </div>
      </section>

      <section
        id="desc-role"
        className="bg-[#4F5B2A] w-full h-145 px-10 lg:px-20 py-16 tracking-normal text-[#F5EFE3]"
      >
        {/* Heading */}
        <div className="mb-8">
          <p className="text-[#B8892D]">Contribute Role</p>
          <h1 className="text-3xl font-bold">Peran dalam Kontribusi.</h1>
        </div>

        <hr className="border-[#F5EFE3]/40" />

        {/* Project Information */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          <div>
            <p className="text-sm text-[#D8C9A8]">YEAR</p>
            <p className="font-semibold text-lg">2026</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#D8C9A8]">PROJECT</p>
            <p className="font-semibold text-lg">Massive Project Challenge</p>
          </div>

          <div className="text-end">
            <p className="text-sm text-[#D8C9A8]">ROLE</p>
            <p className="font-semibold text-lg">Hacker / Programmer</p>
          </div>
        </div>

        <hr className="border-[#F5EFE3]/40" />

        {/* Contribution Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
          <div>
            <p className="text-[#D8C9A8] mb-3">01 / DESCRIPTION</p>
            <h2 className="text-2xl font-bold mb-4">About My Contribution.</h2>
            <p className="leading-relaxed text-[#F5EFE3]/80">
              Bertanggung jawab dalam menerjemahkan rancangan UI dari tim
              Hipster/Desainer ke dalam implementasi kode, memastikan
              konsistensi tampilan, responsivitas, serta fungsionalitas
              antarmuka aplikasi
            </p>
          </div>

          <div>
            <p className="text-[#D8C9A8] mb-3">02 / RESPONSIBILITIES</p>
            <h2 className="text-2xl font-bold mb-4">Areas of Contribution.</h2>

            <ul className="space-y-3">
              <li className="border-b border-[#F5EFE3]/30 pb-3">
                Frontend Development
              </li>
              <li className="border-b border-[#F5EFE3]/30 pb-3">
                UI Implementation
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="desc-tech"
        className="bg-[#f5efe3] flex flex-row w-full h-145 px-10 lg:px-20 py-16 tracking-normal text-[#F5EFE3]"
      >
        <div className="w-full">
          <p className="text-[#B8892D]">Technologies</p>
          <h1 className="text-3xl font-bold text-[#4f5b2a]">
            Teknologi yang digunakan<br></br>sebagai alat pengembangan.
          </h1>
          <p className="mt-4 max-w-xl text-[#4f5b2a]/80 leading-relaxed">
            Berbagai teknologi dan tools yang dimanfaatkan<br></br>dalam proses
            pengembangan CegahScam, mulai dari<br></br>implementasi antarmuka
            hingga pengembangan<br></br>fungsionalitas aplikasi.
          </p>
        </div>
        <div className="grid grid-cols-3 w-full">
          <div className="bg-[#4f5b2a] w-30 h-30 flex items-center justify-center rounded-md">
            <img src={figma} className="w-20 h-20" />
          </div>
          <div className="bg-[#4f5b2a] w-30 h-30 flex items-center justify-center rounded-md">
            <img src={ts} className="w-20 h-20" />
          </div>
          <div className="bg-[#4f5b2a] w-30 h-30 flex items-center justify-center rounded-md">
            <img src={rct} className="w-20 h-20" />
          </div>
          <div className="bg-[#4f5b2a] w-30 h-30 flex items-center justify-center rounded-md">
            <img src={tailcss} className="w-20 h-20" />
          </div>
          <div className="bg-[#4f5b2a] w-30 h-30 flex items-center justify-center rounded-md">
            <img src={nodejs} className="w-20 h-20" />
          </div>
          <div className="bg-[#4f5b2a] w-30 h-30 flex items-center justify-center rounded-md">
            <img src={exjs} className="w-15 h-15" />
          </div>
        </div>
      </section>
    </main>
  );
}
