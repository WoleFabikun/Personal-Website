import SkillCard from "@/components/SkillCard";

const Skill = ({ skill }) => {
    // Filter out skills with published: false
    const publishedSkills = skill.filter(skill => skill.frontmatter.published);

    return (
        <>
            <section className="flex flex-row justify-center p-10">
                <p className="mt-1 text-base text-slate-100">{`What I Have Worked With.`}</p>
            </section>

            <section className="grid gap-5 grid-col-1 md:grid-cols-1 lg:grid-cols-3">
                {publishedSkills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </section>
        </>
    );
}

export default Skill;

