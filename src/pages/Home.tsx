import { Link } from "react-router-dom";
import selfPhoto from "../assets/hero-section/bg-front.webp";
import siakadu from "../assets/feat-projects/siakadu.jpeg";
import cegahscam from "../assets/feat-projects/cegahscam.png";
import sidoharjo from "../assets/feat-projects/sidoharjo-web.png";
import js from "../assets/icon-tech/javascript.svg";
import ts from "../assets/icon-tech/typescript.svg";
import tailcss from "../assets/icon-tech/tailwind.svg";
import rct from "../assets/icon-tech/react.svg";
import nodejs from "../assets/icon-tech/node-js.svg";
import exjs from "../assets/icon-tech/express.svg";

export default function Home() {
  return (
    <main className="w-full bg-[#F5EFE3] pt-15 font-mono">
      <section
        id="home"
        className="flex flex-row max-[600px]:flex-col justify-around lg:px-20 h-156 tracking-widest"
      >
        <div className="w-full flex items-center justify-center">
          <img src={selfPhoto} className="w-70 h-70 lg:w-100 lg:h-100 rounded-full" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-center lg:text-end">
            <p className="text-3xl font-bold lg:font-semibold text-[#4F5B2A]">
              Muhammad Julianda Nu'man
            </p>
            <p className="text-sm lg:text-xl font-light text-[#B8892D]">
              Informatics Engineering Student
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="grid grid-cols-1 gap-2 px-6 py-10 tracking-normal md:px-10 lg:grid-cols-[1.05fr_1fr_0.9fr] lg:grid-rows-[18rem_9rem] lg:px-20"
      >
        {/* About Me */}
        <article className="group relative isolate overflow-hidden rounded-md lg:row-span-2 min-h-80">
          {/* Background Image */}
          <img
            src={selfPhoto}
            alt=""
            className="absolute inset-0 -z-20 w-full h-full object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-black/85 via-black/40 to-black/20" />

          {/* Content */}
          <div className="flex flex-col justify-between h-full min-h-80 p-8 lg:p-10">
            {/* Title */}
            <h2 className="text-4xl font-bold tracking-wide text-[#F8EADC]">
              About Me
            </h2>
          </div>
        </article>

        {/* Personal Introduction */}
        <article className="rounded-md bg-[#B8892D] p-8 lg:p-10 text-[#F8EADC]">
          <h2 className="mb-2 text-2xl font-semibold leading-tight lg:text-3xl">
            Muhammad Julianda Nu'man
          </h2>
          <p className="text-sm leading-relaxed">
            An Informatics Engineering student at Universitas Negeri Surabaya
            with a strong interest in Software Engineering, particularly in
            developing functional and user-friendly applications.
          </p>
        </article>

        {/* Statistics */}
        <div className="grid grid-rows-2 gap-2">
          <article className="rounded-md bg-[#B8892D] p-8 lg:p-10 text-[#F8EADC]">
            <h2 className="mb-2 text-3xl font-semibold">3.85</h2>
            <p className="text-xs tracking-widest">Current GPA</p>
          </article>

          <article className="rounded-md bg-[#B8892D] p-8 lg:p-10 text-[#F8EADC]">
            <h2 className="mb-2 text-3xl font-semibold">2 years</h2>
            <p className="text-xs tracking-widest">Learning Time</p>
          </article>
        </div>

        {/* Education */}
        <article className="rounded-md bg-[#B8892D] p-8 lg:col-span-2 lg:p-10 text-[#F8EADC]">
          <h2 className="mb-2 text-2xl font-semibold lg:text-3xl">
            Informatics Engineering
          </h2>

          <p className="text-xs tracking-widest">
            Universitas Negeri Surabaya (2024 - present)
          </p>
        </article>
      </section>

      <section id="about" className="bg-[#4F5B2A] h-100 w-full px-5 py-10 lg:px-20 lg:py-20">
        <div className="flex flex-col">
          <h1 className="text-[#B8892D] font-bold">Tech Stacks</h1>
          <p className="text-[#F5EFE3] text-2xl font-bold">
            What i use to develop
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mt-5">
          <div className="bg-[#b8892d] p-5 rounded-md group relative overflow-hidden">
            <img
              src={js}
              className="w-20 h-20 mx-auto transition-opacity duration-300 group-hover:opacity-20"
            />

            <p className="absolute inset-0 flex items-center justify-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              JavaScript
            </p>
          </div>
          <div className="bg-[#b8892d] p-5 rounded-md group relative overflow-hidden">
            <img
              src={ts}
              className="w-20 h-20 mx-auto transition-opacity duration-300 group-hover:opacity-20"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              TypeScript
            </p>
          </div>
          <div className="bg-[#b8892d] p-5 rounded-md group relative overflow-hidden">
            <img
              src={rct}
              className="w-20 h-20 mx-auto transition-opacity duration-300 group-hover:opacity-20"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              React.Js
            </p>
          </div>
          <div className="bg-[#b8892d] p-5 rounded-md group relative overflow-hidden">
            <img
              src={tailcss}
              className="w-20 h-20 mx-auto transition-opacity duration-300 group-hover:opacity-20"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tailwind CSS
            </p>
          </div>
          <div className="bg-[#b8892d] p-5 rounded-md group relative overflow-hidden">
            <img
              src={nodejs}
              className="w-20 h-20 mx-auto transition-opacity duration-300 group-hover:opacity-20"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Node.js
            </p>
          </div>
          <div className="bg-[#b8892d] p-5 rounded-md group relative overflow-hidden">
            <img
              src={exjs}
              className="w-20 h-20 mx-auto transition-opacity duration-300 group-hover:opacity-20"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Express
            </p>
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="bg-[#f5efe3] flex flex-col lg:flex-row lg:h-100 w-full px-5 lg:px-20 lg:py-10 my-10 items-center"
      >
        <div className="lg:w-250">
          <div className="flex flex-col">
            <h1 className="text-[#B8892D] font-bold max-[600px]:text-xs">Achievements</h1>
            <p className="text-[#4f5b2a] text-4xl lg:text-[50px] font-bold">
              SOME <span className="text-[#B8892D]">ACHIEVEMENTS</span>
              <br></br>I GOT SO FAR.
            </p>
          </div>
          <p className="text-xs">
            Contributed to the competition challenges, whether individual or
            group competitions
          </p>
        </div>
        <div className="w-full max-[600px]:text-start max-[600px]:mt-10">
          <div className="border-t-[0.5px] border-b-[0.5px] border-[#B8892D] flex flex-row gap-5 py-5 transition-all duration-300 ease-out hover:ps-10">
            <div className="text-[#B8892D] font-bold">2025</div>
            <div>
              <p className="text-[#4f5b2a] font-bold text-xl lg:text-3xl">3rd Place</p>
              <p className="max-[600px]:text-sm">UI/UX Development by INSYFEST - UBP Karawang</p>
            </div>
          </div>
          <div className="border-b-[0.5px] border-[#B8892D] flex flex-row gap-5 py-5 transition-all duration-300 ease-out hover:ps-10">
            <div className="text-[#B8892D] font-bold">2025</div>
            <div>
              <p className="text-[#4f5b2a] font-bold text-xl lg:text-3xl">3rd Place</p>
              <p className="max-[600px]:text-sm">Web Development By SLP - UNESA</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-[#B8892D] min-h-screen w-full px-5 py-10 lg:px-20 lg:py-20"
      >
        <div className="flex flex-col">
          <h1 className="text-[#4f5b2a] font-bold max-[600px]:text-xs">Featured Projects</h1>
          <p className="text-[#F5EFE3] text-4xl lg:text-[50px] font-bold">
            Best of 3 projects I've created as part of the group.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-2 mt-5">
          <Link
            to="/cegahScam"
            className="group relative w-full overflow-hidden rounded-md"
          >
            <img
              src={cegahscam}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg">CegahScam</span>
            </div>
          </Link>

          <Link
            to="/sidoharjo"
            className="group relative w-full overflow-hidden rounded-md"
          >
            <img
              src={sidoharjo}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg">
                Sidoharjo Website
              </span>
            </div>
          </Link>

          <Link
            to="/siakadu"
            className="group relative w-full overflow-hidden rounded-md"
          >
            <img
              src={siakadu}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg">Academic System</span>
            </div>
          </Link>
        </div>
        <Link to="/projects">
          <p className="w-full text-end mt-5 font-bold text-[#F5efe3] max-[600px]:text-sm hover:text-[#4f5b2a]">
            Show more projects
          </p>
        </Link>
      </section>
    </main>
  );
}
