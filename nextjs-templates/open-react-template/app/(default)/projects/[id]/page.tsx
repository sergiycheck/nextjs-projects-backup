import { projects } from "@/api/projects";
import { ProjectComponent } from "../../../../components/projects/project-components";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function PageProject({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find((project) => project.id === id)!;

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return <ProjectComponent project={project} nextProject={nextProject} />;
}
