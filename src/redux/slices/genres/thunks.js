import { createAsyncThunk } from '@reduxjs/toolkit';
import MovieAPI from 'js/API_requests/MoviesAPI';

export const getGenres = createAsyncThunk(
  'genres/getGenres',
  async (_, thunkApi) => {
    try {
      const data = await MovieAPI.getGenres();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
