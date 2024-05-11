import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: "blog/create-blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    getBlog: build.query({
      query: () => ({
        url: "blog/all-blog",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `blog/delete-blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const { useCreateBlogMutation, useGetBlogQuery, useDeleteBlogMutation } =
  blogApi;
