import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCompanyThunk, getCompaniesThunk } from "./companyThunk";
type InitialState = {
  companies: Company[];
  company: null | Company;
  isLoading: boolean;
};
const initialState: InitialState = {
  companies: [],
  company: null,
  isLoading: false,
};
export const getCompanies = createAsyncThunk(
  "user/getCompanies",
  getCompaniesThunk
);
export const getCompany = createAsyncThunk(
  "user/getCompany",
  async (companyId: string, thunkAPI: AsyncThunkConfig) => {
    return getCompanyThunk(companyId, thunkAPI);
  }
);
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    clearCompany: state => {
      return {
        ...state,
        companies: [],
        company: null,
      };
    },
    setCompany: (state, { payload }) => {
      return { ...state, company: payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCompany.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCompany.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.company = payload;
      })
      .addCase(getCompany.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getCompanies.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCompanies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.companies = payload;
      })
      .addCase(getCompanies.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { clearCompany, setCompany } = companySlice.actions;

export default companySlice.reducer;
