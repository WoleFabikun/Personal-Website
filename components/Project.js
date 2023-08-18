
import ProjectCard from '@/components/ProjectCard';

const Projects = ({ projects }) => {
    return (
        <>
            <section className="flex flex-row justify-center p-10">
                <p className="mt-1 text-base text-slate-100">{`Current and Past Projects`}</p>
            </section>

            <section className="grid content-end gap-5 h-fit grid-col-1 md:grid-cols-1 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </section>
        </>
    );
}

export default Projects;