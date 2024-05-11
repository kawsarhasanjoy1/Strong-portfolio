import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProject: build.mutation({
      query: (data) => ({
        url: "project/create-project",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['project']
    }),
    getProject: build.query({
      query: () => ({
        url: "project/all-project",
        method: "GET",
      }),
      providesTags: ['project']
    }),
    deleteProject: build.mutation({
      query: (id) => ({
        url: `project/delete-project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['project']
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetProjectQuery,
  useDeleteProjectMutation,
} = projectApi;
