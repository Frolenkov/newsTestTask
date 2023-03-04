import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../common/constants";
import { IPost } from "../../common/models";

export const newsAPI = createApi({
  reducerPath: "news/api",
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  endpoints: (build) => ({
    getNews: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: result => ['Post']
    }),
    deletePost: build.mutation<{ success: boolean; id: number }, number>({
      query: (id: number) => ({
          url: `posts/${id}`,
          method: "DELETE",
        }
      ),
      invalidatesTags: ['Post']
    }),
  }),
});

export const { useGetNewsQuery, useDeletePostMutation } = newsAPI;
