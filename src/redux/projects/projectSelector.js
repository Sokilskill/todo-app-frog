export const selectProjects = (state) => state.projects;

export const selectProjectById = (state, projectId) => {
  if (!projectId) return null;
  if (projectId === "all")
    return { id: "all", name: "All Projects", color: "aqua" };
  return state.projects.find((project) => project.id === projectId);
};
