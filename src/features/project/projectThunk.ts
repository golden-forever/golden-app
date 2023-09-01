import { getRequest, postRequest } from "../../utils/apiHelper";
import { AxiosError } from "axios";

export const getProfilesThunk = async (
  profileId: string,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const URL = `search_profiles/${profileId}`;
    const response = await getRequest(URL);
    const data = response.data;

    return data;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;

    console.log(error);

    return thunkAPI.rejectWithValue(error.message);
  }
};

type Props = {
  projectId: string;
  label: PipelineLabel;
};
export const getPipelineThunk = async (
  { projectId, label }: Props,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    // const URL = `pipeline_profiles/${projectId}/${label} `;

    const responseMaybe = await getRequest(
      `pipeline_profiles/${projectId}/maybe`
    );
    const pipeline_maybe = responseMaybe.data;
    const responseGood = await getRequest(
      `pipeline_profiles/${projectId}/good`
    );
    const pipeline_good = responseGood.data;

    return { pipeline_good, pipeline_maybe };
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;
    return thunkAPI.rejectWithValue(error.message);
  }
};
