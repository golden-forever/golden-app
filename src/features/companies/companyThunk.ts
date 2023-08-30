import { getRequest, postRequest } from "../../utils/apiHelper";
import { setCompany } from "./companySlice";
import { companies } from "../../_mock/company";
import { AxiosError } from "axios";

const companiesURL =
  "f/s/24c0dff6-015b-4b54-8ac4-96c16313f856/profiles_sample.json?id=d843a1a9-1d09-458f-bfdf-743f868d782f&table=block&spaceId=418cb9ed-25bf-4ab3-a23f-8711d87f49f2&expirationTimestamp=1693483200000&signature=nqRk9jfaGwDjN_i7UOWLn1Y6HPFzjXVcne7f50ewWns&downloadName=profiles_sample.json";
export const getCompanyThunk = async (
  companyId: string,
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const response = await getRequest(companiesURL);
    const data = response.data;
    const companies: Company[] = [];
    data.map((company: any) => {
      const experiences = company.experiences;
      const companiesFromExperiences = experiences.map(
        (experience: Company) => {
          const { company, specialities, company_size, company_id, logo_url } =
            experience;
          companies.push({
            company,
            specialities,
            company_size,
            company_id,
            logo_url,
          });
        }
      );
    });
    const company = companies.find(company => company.company_id === companyId);
    if (!company) throw new Error("Something wen wrong");
    return data;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;

    console.log(error);

    return thunkAPI.rejectWithValue(error.message);
  }
};

export const getCompaniesThunk = async (
  _: any = "",
  thunkAPI: AsyncThunkConfig
) => {
  try {
    const response = await getRequest(companiesURL);
    const data = response.data;
    const companies: {}[] = [];
    data.map((company: any) => {
      const experiences = company.experiences;
      const companiesFromExperiences = experiences.map((experience: any) => {
        const {
          company,
          specialities,
          company_size: numOfImployees,
          company_id,
          logo_url,
        } = experience;
        companies.push({
          company,
          specialities,
          numOfImployees,
          company_id,
          logo_url,
        });
      });
    });

    return companies;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;

    console.log(error);

    return thunkAPI.rejectWithValue(error.message);
  }
};
