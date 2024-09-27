import { projects } from "@/api/projects";
import { ProjectComponent } from "@/components/projects/project-components";
import { ModalPortalRouteInterceptor } from "@/components/common/modal-portal-route-interceptor";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function PageModalProject({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find((project) => project.id === id)!;

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <ModalPortalRouteInterceptor>
      <ProjectComponent project={project} nextProject={nextProject} />
    </ModalPortalRouteInterceptor>
  );
}
