import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "project",
  initialState: [
    // {
    //   id: string,
    //   name: string,
    //   color: string (hex, rgb, color-name),
    //   createdAt: "2025-06-30T15:38:41.676Z",
    //   updatedAt: "2025-06-30T15:38:41.676Z",
    // }
  ],
  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id: Date.now().toString(),
        name: action.payload.name,
        color: action.payload.color,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.push(newProject);
    },
    deleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },

    updateProject: (state, action) => {
      const { id, name, color } = action.payload;
      const project = state.find((p) => p.id === id);
      if (project) {
        if (name !== undefined && name !== "") project.name = name;
        if (color !== undefined && color !== "") project.color = color;
      }
    },
  },
});

export const { addProject, deleteProject, updateProject } =
  projectsSlice.actions;
export default projectsSlice.reducer;
