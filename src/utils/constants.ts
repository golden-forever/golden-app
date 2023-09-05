import { jobTitles, skillsAndKeywords, filters } from "../_mock/filters";
// export const filtersData: (Filter | CustomFilter)[] = [
//   {
//     label: "Job Titles",
//     applied: [],
//     allTags: jobTitles,
//     name: "titles",
//   },

//   {
//     label: "Skills and Keywords",
//     applied: [],
//     include: "Current or Past",
//     allTags: skillsAndKeywords,
//     name: "keywords",
//   },
//   { type: "location" },
//   {
//     label: "Keywords To Avoid",
//     applied: [],
//     include: "Current or Past",
//     allTags: filters,
//     name: "negative_keywords",
//   },
//   {
//     label: "Company Specialities",
//     applied: [],
//     include: "Current or Past",
//     allTags: filters,
//     name: "specialities",
//   },
//   {
//     label: "Companies to Include",
//     applied: [],
//     include: "Current or Past",
//     allTags: filters,
//     name: "companies",
//   },
//   {
//     label: "Companies to Avoid",
//     applied: [],
//     include: "Current or Past",
//     allTags: filters,
//     name: "companies_to_avoid",
//   },
// ];

export const filtersRangeData: FilterRange[] = [
  {
    label: "Company sizes",
    value: [1, 1500],
    min: 1,
    max: 1500,
  },
  {
    label: "Years of experience",
    value: [1, 20],
    min: 1,
    max: 20,
  },
];
export const filtersLocationData: FilterLocation = {
  label: "Education",
  minToDrive: 60,
  to: "",
  anywhere: false,
};

export const APP_BAR_MOBILE = 90;
export const APP_BAR_DESKTOP = 109;
export const MOBILE_TOP_SIDEBAR = 52;
export const NAV_WIDTH=320
