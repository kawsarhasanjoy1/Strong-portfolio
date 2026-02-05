import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://next-lavel-portfolio-back-end.vercel.app/api/v1" }),
  endpoints: (builder) => ({}),
  tagTypes: ["project", "blog", "skill"],
});
