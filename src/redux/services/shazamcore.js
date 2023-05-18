import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '511ef04df1mshbbed212d7c81ccbp14450ajsn0a5c769eb970',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '511ef04df1mshbbed212d7c81ccbp14450ajsn0a5c769eb970');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
    getSongDetails: builder.query({ query: ({ songid }) => `tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `tracks/related?track_id=${songid}` }),
    getSongsByCountry: builder.query({ query: ({ countryCode }) => `/charts/country?country_code=${countryCode}` }),
    getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});
export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsByCountryQuery,
  useGetArtistDetailsQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
