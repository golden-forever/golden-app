import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk as createAsyncThunk } from "../../hooks/redux";

import { getProfilesThunk, getPipelineThunk } from "./projectThunk";
import { AxiosError } from "axios";
import { postRequest } from "../../utils/apiHelper";

export const getProfiles = createAsyncThunk(
  "project/getProfiles",
  getProfilesThunk
);
export const addAction = createAsyncThunk(
  "project/addAction",
  async (data: ProfileData, thunkAPI) => {
    try {
      // const URL = `search_profiles/${profileId}`;
      // const response = await getRequest(URL);
      const { profiles } = thunkAPI.getState().project;
      const newProfiles = [...profiles];
      const profIndex = profiles.findIndex(profile => profile._id === data._id);
      if (profIndex >= 0) newProfiles.splice(profIndex, 1);
      return { profiles: newProfiles, data };
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;

      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const cancelAction = createAsyncThunk(
  "project/cancelAction",
  async (data: ProfileData, thunkAPI) => {
    try {
      const { recent_pid } = thunkAPI.getState().user;
      const { actions } = thunkAPI.getState().project;
      const URL = `/label/${data._id}/${recent_pid}`;
      const response = await postRequest(URL, { label: data.label });
      const newActions = [...actions];
      const profIndex = actions.findIndex(action => action._id === data._id);
      if (profIndex >= 0) newActions.splice(profIndex, 1);
      return { actions: newActions, data };
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;

      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getPipeline = createAsyncThunk(
  "project/getPipeline",
  getPipelineThunk
);

export const setFilters = createAsyncThunk(
  "project/setFilters",
  async (filters: any, thunkAPI) => {
    try {
      const { recent_pid } = thunkAPI.getState().user;
      const { search_query } = thunkAPI.getState().project;
      const URL = `search_query/${recent_pid}`;
      const response = await postRequest(URL, {
        ...search_query,
        ...filters,
      });
      const data = response.data;
      thunkAPI.dispatch(setSearchQuery(search_query));
      return data;
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;

      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
type InitialState = {
  profiles: ProfileData[];
  pipelineTotal: number;
  pipeline_good: ProfileData[];
  pipeline_maybe: ProfileData[];
  isShowGoodPipeline: boolean;
  actions: ProfileData[];
  search_query: SearchQuery | null;
  isLoading: boolean;
};
const initialState: InitialState = {
  profiles: [],
  pipelineTotal: 0,
  pipeline_good: [],
  pipeline_maybe: [],
  isShowGoodPipeline: true,
  actions: [],
  search_query: null,
  isLoading: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setIsShowGoodPipeline: (state, { payload }) => {
      return { ...state, isShowGoodPipeline: payload };
    },
    setSearchQuery: (state, { payload }) => {
      return { ...state, search_query: payload };
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getProfiles.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProfiles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.profiles = payload;
      })
      .addCase(getProfiles.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getPipeline.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPipeline.fulfilled, (state, { payload }) => {
        const { pipeline_good, pipeline_maybe } = payload;

        state.pipeline_good = pipeline_good;
        state.pipeline_maybe = pipeline_maybe;
        state.pipelineTotal = pipeline_good.length + pipeline_maybe.length;
        state.isLoading = false;
      })
      .addCase(getPipeline.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(addAction.fulfilled, (state, { payload }) => {
        const { profiles, data } = payload;

        state.profiles = profiles;
        state.actions = [...state.actions, data];
        state.isLoading = false;
      })
      .addCase(addAction.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(cancelAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(cancelAction.fulfilled, (state, { payload }) => {
        const { actions, data } = payload;
        const profile = { ...data };
        delete profile.label;
        state.actions = actions;
        state.profiles = [...state.profiles, profile];
        state.isLoading = false;
      })
      .addCase(cancelAction.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(setFilters.pending, state => {
        state.isLoading = true;
      })
      .addCase(setFilters.fulfilled, (state, { payload }) => {
        // state.profiles = payload;
        state.isLoading = false;
      })
      .addCase(setFilters.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { setIsShowGoodPipeline, setSearchQuery } = projectSlice.actions;

export default projectSlice.reducer;
