declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
type Tag = { label: string; value: string };
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
  company_info: string;
  degree_name: string;
  company: string;
  school_linkedin_profile_url: string;
  description: string;
  logo_url: string;
  roles: Role[];
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
  connections: number;
  country: string;
  country_full_name: string;
  first_name: string;
  headline: string;
  occupation: string;
  profile_pic_url: string;
  public_identifier: string;
  state: null;
  summary: string;
  education: Education[];
  experience: Experience[];
  full_name: string;
};
