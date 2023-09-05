declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
type Tag = { label: string; value: string };
type CustomFilter = {
  type: "location" | "company_sizes";
};
type Filter = {
  label: string;
  applied: Tag[];
  include?: string;
  allTags: Tag[];
};

type FilterRange = {
  label: string;
  value: [number, number];
  min: number;
  max: number;
};
type FilterLocation = {
  label: string;
  minToDrive: number;
  to: string;
  anywhere: boolean;
};

type RemoveTag = (filterData: Filter, removeIndex: number) => void;
type AddTag = (filterData: Filter, tag: Tag) => void;
type ClearAllTags = (filterData: Filter) => void;
type Role = {
  label: string;
  starts_at: string;
  ends_at: string;
  location: string;
};
type Experience = {
  starts_at: string;
  ends_at: string;
  degree_name: string;
  company: string;
  location: string;
  company_linkedin_profile_url: string;
  company_size: number;
  description: string;
  logo_url: string;
  industry: string;
  specialities?: string[];
};
type Education = {
  starts_at: string;
  ends_at: string;
  field_of_study: string;
  degree_name: string;
  school: string;
  school_linkedin_profile_url: string;
  description: string | null;
  logo_url: string;
};

type ProfileData = {
  _id: string;
  city: null;
  label?: "good" | "maybe" | "not good";
  connections: number;
  country: string;
  country_full_name: string;
  first_name: string;
  last_name: string;
  headline: string;
  occupation: string;
  industry: stringl;
  profile_pic_url: string;
  public_identifier: string;
  state: null;
  summary: string;
  education: Education[];
  experiences: Experience[];
  full_name: string;
};
type PipelineLabel = "good" | "maybe" | "not good";

interface Action {
  first_name: string;
  last_name: string;
  _id: string;
}
interface TookAction extends Action {
  label: PipelineLabel;
}

type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: unknown;
  /** type for `thunkApi.dispatch` */
  dispatch?: Dispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown;
  /** return type of the `serializeError` option callback */
  rejectWithValue: any;
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown;
};
type KnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

type TrimmedCompany = { company: string; id: string };
type Company = {
  company: string;
  specialities?: string[];
  company_size: number;
  company_id: string;
  logo_url: string;
  summary: string;
  title: string;
  location: null | string;
};

type User = {
  name: string;
  email: string;
  completed_onboarding: boolean;
};
type Job = {
  project_id: string;
  job_title: string;
  job_location: string;
  job_description: string;
};
type CompanyInfo = {
  company_id: string;
  name: string;
  company_logo_url: string | null;
};
type ProjectSnippet = {
  project_title: string;
  company_id: string;
  project_id: string;
};
type Location = {
  location_text_display: string;
  location_id: string;
};
type Page = "next" | "prev";

type SearchQuery = {
  titles: string[];
  city_hq: string;
  max_driving_time: number;
  min_years_of_experience_title: number;
  max_years_of_experience_title: number;
  min_years_of_experience_in_industry: number;
  max_years_of_experience_in_industry: number;
  companies: string[];
  companies_to_avoid: string[];
  company_sizes: string[];
  industries: string[];
  specialities: string[];
  keywords: string[];
  negative_keywords: string[];
  is_top_schools_only: boolean;
  degree_names: string[];
  fields_of_study: string[];
};
type CompanySize =
  | "1-10"
  | "11-50"
  | "51-200"
  | "201-500"
  | "501-1,000"
  | "1,001-5,000"
  | "5,001-10,000"
  | "10,000+";
