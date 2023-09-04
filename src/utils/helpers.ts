export const getImgSrc = (company_id: string) =>
  `https://storage.googleapis.com/linkedingpt/company-${company_id}.jpeg`;

export const URLtitles =
  "https://file.notion.so/f/s/c3d812b6-a451-4195-9eb2-b2649e46b4ea/titles.json?id=8a7e599d-c561-482e-abec-fa02377720e9&table=block&spaceId=418cb9ed-25bf-4ab3-a23f-8711d87f49f2&expirationTimestamp=1693677600000&signature=VA4sOG6MgBO5F8HKvKvkQtBmZNvaMA-tGDq81co0lcA&downloadName=titles.json";
export const URLcities =
  "https://file.notion.so/f/s/7df047fa-6417-4e89-b8dc-b4e4f741bb7d/cities.json?id=67794339-f17c-4201-aa96-c37657978ddf&table=block&spaceId=418cb9ed-25bf-4ab3-a23f-8711d87f49f2&expirationTimestamp=1693677600000&signature=ATnoQiZq1XHdqxwjamroZ66gx75LmDMMF9Hq4jyI6o0&downloadName=cities.json";
export const URLindustries =
  "https://file.notion.so/f/s/66b544da-d29c-48ff-a24c-8913349693d7/industries.json?id=dc77f6fa-1039-45b9-a496-272ab60e80c0&table=block&spaceId=418cb9ed-25bf-4ab3-a23f-8711d87f49f2&expirationTimestamp=1693677600000&signature=thfxSmuoioCnZoG7C-n2h1SwzbwuHf-hJfKz2chimms&downloadName=industries.json";
export const URLspecialities =
  "https://file.notion.so/f/s/c7e8f22a-640a-43e9-ab10-6eceacfdad3c/sepcilities.json?id=3130eade-6357-4c8a-bbb9-ab50a74be150&table=block&spaceId=418cb9ed-25bf-4ab3-a23f-8711d87f49f2&expirationTimestamp=1693677600000&signature=6VJNasNvzT__Y6Iwi1Wbt3YiZqPMUKv4Z6iaVNvOVAM&downloadName=sepcilities.json";
export const URLcompanies =
  "https://file.notion.so/f/s/35397912-12c4-4f1f-b0fa-07f7c3192579/companies_name_only.json?id=6987ad19-2e52-4caf-854e-964541f6a179&table=block&spaceId=418cb9ed-25bf-4ab3-a23f-8711d87f49f2&expirationTimestamp=1693677600000&signature=MU-Wct23WpAPRqWhb9ErGwDM-lTjwddhoVALlb6kw1w&downloadName=companies_name_only.json";

export const getYearsInIndustry = (experiences: Experience[]) => {
  const allStarts_at = experiences.map(
    experience => new Date(experience.starts_at)
  );
  const earliestDate = allStarts_at.reduce((minDate, currentDate) => {
    return currentDate < minDate ? currentDate : minDate;
  }, allStarts_at[0]);
  const currentDate = new Date();
  const timeDifferenceMs = currentDate.getTime() - earliestDate.getTime();
  const millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
  const yearsDifference = Math.floor(timeDifferenceMs / millisecondsPerYear);

  return yearsDifference;
};
