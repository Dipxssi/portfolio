'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'

const Hero = () => {
  const role = useRoleSwitcher({ roles: ['FULLSTACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'NEXT.JS DEVELOPER'] })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">Hi - I&apos;m Dipsha Das</span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            Design. Code. Launch. Repeat
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/in/dipsha-das-233b18290/"
              aria-label="View LinkedIn Profile"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/Dipxssi"
              aria-label="View Github Profile"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              Github Profile
            </a>

            <a
              href="mailto:dipshadas4@gmail.com"
              aria-label="Connect with me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download="Dipsha_Das_Fullstack_Developer_Resume.pdf"
              target="_blank"
              aria-label="Download Resume"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end text-right">
          <div className="text-2xl lg:text-4xl font-extrabold font-mono leading-tight text-primary-content">
            <div className="mb-4">Coding the web.</div>
            <div className="mb-4">simplifying life.</div>
            <div className="mb-4">learning something new every day.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
