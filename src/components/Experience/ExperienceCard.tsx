interface ExperienceRole {
  title: string
  period: string
  location?: string
  bullets: string[]
}

interface ExperienceCardProps {
  company: string
  arrangement: string
  roles: ExperienceRole[]
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, arrangement, roles }) => {
  return (
    <div className="bg-secondary border-border rounded-[14px] border p-5 md:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-secondary-content text-lg font-semibold md:text-xl">{company}</h3>
        <span className="text-accent text-sm">{arrangement}</span>
      </div>

      <ol className="mt-6 flex flex-col">
        {roles.map((role, index) => {
          const isLast = index === roles.length - 1
          return (
            <li key={role.title} className="flex gap-4">
              <div className="flex w-3 shrink-0 flex-col items-center">
                <span className="border-accent bg-secondary mt-1.5 size-3 shrink-0 rounded-full border-2" />
                {!isLast && <span className="bg-border mt-2 w-px grow" />}
              </div>

              <div className={isLast ? 'pb-0' : 'pb-8'}>
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
                  <h4 className="text-secondary-content font-medium">{role.title}</h4>
                  <span className="text-tertiary-content text-sm">{role.period}</span>
                  {role.location && (
                    <span className="text-tertiary-content text-sm">· {role.location}</span>
                  )}
                </div>
                <ul className="text-primary-content mt-3 space-y-2 text-sm md:text-base">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-accent mt-2 size-1 shrink-0 rounded-full bg-current" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default ExperienceCard
