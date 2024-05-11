import { baseApi } from "./baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSkill: build.mutation({
      query: (data) => ({
        url: "skill/create-skill",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['skill']
    }),
    getSkill: build.query({
      query: () => ({
        url: "skill/get-all-skill",
        method: "GET",
      }),
      providesTags: ['skill']
    }),
    deleteSkill: build.mutation({
      query: (id) => ({
        url: `skill/delete-skill/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['skill']
    }),
  }),
});

export const {
  useCreateSkillMutation,
  useGetSkillQuery,
  useDeleteSkillMutation,
} = skillApi;
