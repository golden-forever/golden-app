export const filtersData: Filter[] = [
  { label: "Job Titles", applied: [] },
  {
    label: "Skills and Keywords",
    applied: ["PHP", "Branding", "Software Development"],
    include: "Current or Past",
  },
  { label: "Keywords To Avoid", applied: [], include: "Current or Past" },
  { label: "Company Industries", applied: [], include: "Current or Past" },
  { label: "Companies to Include", applied: [], include: "Current or Past" },
  { label: "Companies to Avoid", applied: [], include: "Current or Past" },
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
    applied: ["PHP", "Branding", "Software Development"],
    include: "Current or Past",
  },
];
