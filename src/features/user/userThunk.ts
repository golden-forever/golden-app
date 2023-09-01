import { getRequest, postRequest } from "../../utils/apiHelper";
import { AxiosError } from "axios";
import { getProject } from "./userSlice";
import {
  getPipeline,
  getProfiles,
  setSearchQuery,
} from "../project/projectSlice";
// type ThunkAPI={
//   state: RootState
//   dispatch: AppDispatch
//   rejectValue: string
//   extra: { s: string; n: number }
// }
export const showMeThunk = async (_: any = "", thunkAPI: AsyncThunkConfig) => {
  try {
    const URL = "me";
    const response = await getRequest(URL);
    const data = response.data;
    thunkAPI.dispatch(getProfiles(data.recent_pid));
    thunkAPI.dispatch(getProject(data.recent_pid));
    thunkAPI.dispatch(
      getPipeline({ projectId: data.recent_pid, label: "good" })
    );

    // thunkAPI.dispatch(
    //   getPipeline({ projectId: data.recent_pid, label: "maybe" })
    // );

    return data;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;

    console.log(error);

    return thunkAPI.rejectWithValue(error.message);
  }
};
export const getCompanyThunk = async (
  companyId: string,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const URL = `select_company/${companyId}`;
    const response = await postRequest(URL, {});
    const data = response.data;

    return data;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;

    console.log(error);

    return thunkAPI.rejectWithValue(error.message);
  }
};

export const getProjectThunk = async (
  projectId: string,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const URL = `project/${projectId}`;
    const response = await getRequest(URL);
    const data = response.data;
    thunkAPI.dispatch(setSearchQuery(data.search_query));

    return data;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;

    console.log(error);

    return thunkAPI.rejectWithValue(error.message);
  }
};

export const logoutThunk = async (_: any = "", thunkAPI: AsyncThunkConfig) => {
  try {
    const URL = "logout";

    const response = await getRequest(URL);
    const data = response.data;

    return data;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;

    console.log(error);

    return thunkAPI.rejectWithValue(error.message);
  }
};
