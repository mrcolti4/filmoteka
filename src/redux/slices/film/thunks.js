import { createAsyncThunk } from '@reduxjs/toolkit';
import MovieAPI from 'js/API_requests/MoviesAPI';

export const getTrendMovies = createAsyncThunk(
  'film/getTrendMovies',
  async (params, thunkApi) => {
    try {
      const result = await MovieAPI.getTrendMovies(...Object.values(params));
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSearchMovies = createAsyncThunk(
  'film/getSearchMovies',
  async (query, thunkApi) => {
    try {
      const data = await MovieAPI.getMoviesByQuery(query);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSingleMovie = createAsyncThunk(
  'film/getSingleMovie',
  async (params, thunkApi) => {
    try {
      const data = await MovieAPI.getSingleMovie(...Object.values(params));
      return { ...data, media_type: params.mediaType };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCinemaMovies = createAsyncThunk(
  'film/getCinemaMovies',
  async (_, thunkApi) => {
    try {
      const data = await MovieAPI.getCinemaMovies();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSimilarMovies = createAsyncThunk(
  'film/getSimilar',
  async (params, thunkApi) => {
    try {
      const data = await MovieAPI.getSimilarMovies(...Object.values(params));

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
