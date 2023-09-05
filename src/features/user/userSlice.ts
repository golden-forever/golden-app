import { createSlice } from "@reduxjs/toolkit";
import {
  showMeThunk,
  getCompanyThunk,
  logoutThunk,
  getProjectThunk,
} from "./userThunk";
import { createAppAsyncThunk as createAsyncThunk } from "../../hooks/redux";
import { AxiosError } from "axios";
import { postRequest } from "../../utils/apiHelper";

type InitialState = {
  user_info: User | null;
  recent_pid: string;
  company_info: CompanyInfo | null;
  project_snippets: ProjectSnippet[];
  job_info: Job | null;
  isLoading: boolean;
  isMobileSidebar: boolean;
  message: string;
};
const initialState: InitialState = {
  user_info: null,
  recent_pid: "",
  company_info: null,
  project_snippets: [],
  job_info: null,
  isLoading: false,
  isMobileSidebar: false,
  message: "",
};
export const showMe = createAsyncThunk("user/me", showMeThunk);
export const logout = createAsyncThunk("user/logout", logoutThunk);
export const getProject = createAsyncThunk(
  "user/getProject",
  async (project_id: string, thunkAPI) => {
    return getProjectThunk(project_id, thunkAPI);
  }
);
export const updateProject = createAsyncThunk(
  "user/updateProject",
  async (
    updatedData: {
      job_title: string;
      job_location: string;
      job_description: string;
    },
    thunkAPI
  ) => {
    try {
      const { recent_pid } = thunkAPI.getState().user;
      const URL = `project/${recent_pid}`;
      const response = await postRequest(URL, {
        ...updatedData,
        project_id: recent_pid,
        id: "22",
      });
      const data = response.data;

      return data;
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;

      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsMobileSidebar: (state, { payload }) => {
      return { ...state, isMobileSidebar: payload };
    },
  },
  extraReducers: builder => {
    builder

      .addCase(showMe.pending, state => {
        state.isLoading = true;
      })
      .addCase(showMe.fulfilled, (state, { payload }) => {
        const { user_info, recent_pid, company_info, project_snippets } =
          payload;
        state.isLoading = false;
        state.user_info = user_info;
        state.recent_pid = recent_pid;
        state.company_info = company_info;
        state.project_snippets = project_snippets;
      })
      .addCase(showMe.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getProject.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProject.fulfilled, (state, { payload }) => {
        const { job_info, search_query } = payload;
        state.job_info = job_info;
        state.recent_pid = job_info.project_id;
        state.isLoading = false;
      })
      .addCase(getProject.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.message = payload;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(updateProject.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateProject.fulfilled, (state, { payload }) => {
        state.message = payload;
        state.isLoading = false;
      })
      .addCase(updateProject.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { setIsMobileSidebar } = userSlice.actions;

export default userSlice.reducer;
