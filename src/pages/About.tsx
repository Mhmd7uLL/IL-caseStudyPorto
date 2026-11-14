import selfPhoto from "../assets/hero-section/bg-front.webp";

export default function About() {
  return (
    <main className="py-20 bg-[#F5EFE3] font-mono">
      <section
        id="profile-section"
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
    </main>
  );
}
