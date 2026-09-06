import { experienceData } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-14">
      <SectionHeading
        title="// Experience:"
        subtitle="Roles where I ship product — from web development into full-stack and AI-adjacent work."
      />

      <div className="mt-8 flex flex-col gap-6 md:mt-[3.75rem]">
        {experienceData.map((item) => (
          <ExperienceCard
            key={item.company}
            company={item.company}
            arrangement={item.arrangement}
            roles={item.roles}
          />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
