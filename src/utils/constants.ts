import { jobTitles, skillsAndKeywords, filters } from "../_mock/filters";
export const filtersData: Filter[] = [
  { label: "Job Titles", applied: [], allTags: jobTitles },
  {
    label: "Skills and Keywords",
    applied: [],
    include: "Current or Past",
    allTags: skillsAndKeywords,
  },
  {
    label: "Keywords To Avoid",
    applied: [],
    include: "Current or Past",
    allTags: filters,
  },
  {
    label: "Company Industries",
    applied: [],
    include: "Current or Past",
    allTags: filters,
  },
  {
    label: "Companies to Include",
    applied: [],
    include: "Current or Past",
    allTags: filters,
  },
  {
    label: "Companies to Avoid",
    applied: [],
    include: "Current or Past",
    allTags: filters,
  },
];

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
export const filtersLocationData: FilterLocation[] = [
  {
    label: "Education",
    minToDrive: 60,
    to: "",
    anywhere: false,
  },
];

export const filtersInputData: Filter[] = [
  {
    label: "Education",
    applied: [],
    include: "Current or Past",
    allTags: filters,
  },
];
