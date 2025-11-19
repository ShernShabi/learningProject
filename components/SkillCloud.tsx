type SkillCloudProps = {
  skills: string[];
  query: string;
};

const sizeClasses = ["text-sm", "text-base", "text-lg", "text-xl"];
const accentClasses = [
  "bg-accentPurple/50",
  "bg-accentOrange/50",
  "bg-primary/10",
  "bg-softGray",
];

export default function SkillCloud({ skills, query }: SkillCloudProps) {
  const normalizedQuery = query.trim().toLowerCase();

  return (
    <section
      aria-hidden="true"
      className="pointer-events-none select-none rounded-3xl bg-white/70 p-10 shadow-card ring-1 ring-white/80 backdrop-blur-sm"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const isMatch =
            normalizedQuery.length === 0 ||
            skill.toLowerCase().includes(normalizedQuery);

          const sizeClass = sizeClasses[index % sizeClasses.length];
          const accentClass = accentClasses[index % accentClasses.length];

          return (
            <span
              key={skill}
              className={`inline-flex items-center justify-center rounded-full px-3 py-2 font-medium text-slate-700 transition-all duration-300 ${sizeClass} ${accentClass} ${
                isMatch ? "opacity-100" : "opacity-20"
              }`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
}

