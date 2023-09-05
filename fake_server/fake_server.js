const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(cors());
const port = 8000;

app.use(bodyParser.json());
const mockExperiences = [
  {
    starts_at: "2023-02-01T00:00:00.000+0000",
    ends_at: null,
    company: "Surecomp",
    company_linkedin_profile_url: "https://il.linkedin.com/company/surecomp",
    title: "Product Team Lead",
    description: null,
    location: null,
    logo_url:
      "https://storage.googleapis.com/linkedingpt/company-surecomp.jpeg",
    company_id: "surecomp",
    company_website: "http://www.surecomp.com",
    company_size: 279.0,
    industry: "Computer Software",
    specialities: [
      "Global trade solutions for banks and corporations",
      "Trade Finance Solution",
      "Trade Finance Software",
      "Bank front to back trade finance",
      "Multi bank corporate trade finance system",
      "front to back trade finance software",
      "Supply Chain Finance",
    ],
    description:
      "• Leading the product activity of a successful B2B and B2C growing igaming company (inbound and outbound). \n• Matrix management and full ownership of the Casino online product, all the way from inception to production.\n• Identify customer (b2b and players) needs and work collaboratively with Engineering, Marketing, Legal, UX, Support, and other cross-functional teams on innovative technologies.\n• Working in a tight schedule and complex business and legal demands on number of products simultaneously.\n• Writing PRD's and MRD's for the company's dev team (IL and Kiev) and for third party companies.\n• Gathering, specifying, deeply analyzing and prioritizing market requirements for current and future products, by conducting market research supported by interactions with stakeholders and customers.\n• Represent the company in front of our b2b customers and partners as the product-centric, technologically oriented figure.",
  },
  {
    starts_at: "2021-05-01T00:00:00.000+0000",
    ends_at: "2023-03-31T00:00:00.000+0000",
    company: "Surecomp",
    company_linkedin_profile_url: "https://il.linkedin.com/company/surecomp",
    title: "Senior Product Manager",
    description: null,
    location: "Kefar Sava, Central, Israel",
    logo_url:
      "https://storage.googleapis.com/linkedingpt/company-surecomp.jpeg",
    company_id: "surecomp",
    company_website: "http://www.surecomp.com",
    company_size: 279.0,
    industry: "Computer Software",
    specialities: [
      "Global trade solutions for banks and corporations",
      "Trade Finance Solution",
      "Trade Finance Software",
      "Bank front to back trade finance",
      "Multi bank corporate trade finance system",
      "front to back trade finance software",
      "Supply Chain Finance",
    ],
  },
  {
    starts_at: "2017-08-01T00:00:00.000+0000",
    ends_at: "2021-05-31T00:00:00.000+0000",
    company: "Aspire Global",
    company_linkedin_profile_url:
      "https://il.linkedin.com/company/aspireglobal",
    title:
      "Senior Product Manager at Aspire Global - a leading online iGaming company",
    description:
      "• Leading the product activity of a successful B2B and B2C growing igaming company (inbound and outbound). \n• Matrix management and full ownership of the Casino online product, all the way from inception to production.\n• Identify customer (b2b and players) needs and work collaboratively with Engineering, Marketing, Legal, UX, Support, and other cross-functional teams on innovative technologies.\n• Working in a tight schedule and complex business and legal demands on number of products simultaneously.\n• Writing PRD's and MRD's for the company's dev team (IL and Kiev) and for third party companies.\n• Gathering, specifying, deeply analyzing and prioritizing market requirements for current and future products, by conducting market research supported by interactions with stakeholders and customers.\n• Represent the company in front of our b2b customers and partners as the product-centric, technologically oriented figure.",
    location: "Israel",
    logo_url:
      "https://storage.googleapis.com/linkedingpt/company-aspireglobal.jpeg",
    company_id: "aspireglobal",
    company_website: "http://www.aspireglobal.com",
    company_size: 234.0,
    industry: "Software Development",
    specialities: [""],
  },
];

const mockUserInfo = {
  name: "John Doe",
  email: "john.doe@example.com",
  completed_onboarding: true,
};

const mockJobInfo = {
  project_id: "projA",
  job_title: "Backend Developer",
  job_location: "New York, NY",
  job_description:
    "• Vast experience building successful consumer Mobile Web and Desktop products from scratch.\n• Demonstrated success in creating innovative and user-friendly software applications and customer- facing features.\n• Experience working on Agile enabled teams (SCRUM) as a product owner.\n• Experience launching consumer-facing online service (Web/ Mobile/ Tablet) from start to finish.\n• Proven ability to understand complex business problems, apply strong analytical skill and create \n  technical requirements (PRD's, user stories - high level and detailed design).\n• Deep experience in analytics, and massive understanding of the online industry.\n\n• Have both the ability to work independently and also to integrate with other team members.\n• Attention to detail and the ability to see the bigger picture.\n• Ability to manage cross-functional projects without direct authority.\n\n• In my spare time I'm a long distances runner and a triathlete. Also I was competing in The Iron Man Triathlon competition in Austria 2019.",
};

const mockCompanyInfo = {
  company_id: "company123",
  name: "TechCo",
  profile_pic_url:
    "https://storage.googleapis.com/linkedingpt/company-surecomp.jpeg",
};

const mockProjectSnippets = [
  {
    project_title: "Project A",
    company_id: "123",
    project_id: "projA",
  },
  {
    project_title: "Project B",
    company_id: "123",
    project_id: "projB",
  },
];

const mockSearchQuery = {
  titles: ["Backend Developer"],
  city_hq: "New York, NY",
  max_driving_time: 30,
  min_years_of_experience_title: 4,
  max_years_of_experience_title: 8,
  min_years_of_experience_in_industry: 2,
  max_years_of_experience_in_industry: 5,
  companies: ["Amazon"],
  companies_to_avoid: ["Foobar"],
  company_sizes: ["501-1,000", "5,001-10,000"],
  industries: ["Internet"],
  specialities: ["Web Application Development"],
  keywords: ["Python", "FastAPI"],
  negative_keywords: ["Java"],
  is_top_school_only: true,
  degree_names: ["B. Sc."],
  fields_of_study: ["Computer Science"],
};

const mockExperience = {
  starts_at: new Date(2018, 0, 1),
  ends_at: new Date(2021, 11, 31),
  title: "Software Engineer",
  description: "Worked on various backend projects.",
  location: "New York, NY",
  company_linkedin_profile_url: "https://linkedin.com/company/techco",
  company: "TechCo",
  logo_url: "https://example.com/techco.jpg",
  specialities: [
    "Global trade solutions for banks and corporations",
    "Trade Finance Solution",
    "Trade Finance Software",
    "Bank front to back trade finance",
    "Multi bank corporate trade finance system",
    "front to back trade finance software",
    "Supply Chain Finance",
  ],
};

const mockEducation = {
  starts_at: new Date(2014, 8, 1),
  ends_at: new Date(2018, 4, 31),
  field_of_study: "Computer Science",
  degree_name: "Bachelor of Science",
  description: "Studied computer science and programming.",
  school_linkedin_profile_url: "https://linkedin.com/school/university",
  school: "University",
  logo_url:
    "https://storage.googleapis.com/linkedingpt/school-the-college-of-management.jpeg",
};

const mockProfile = {
  _id: "123",
  public_identifier: "john-doe",
  profile_pic_url: "https://storage.googleapis.com/linkedingpt/avi-ventura.jpg",
  first_name: "John",
  last_name: "Doe",
  full_name: "John Doe",
  connections: 500,
  occupation: "Backend Developer at TechCo",
  headline: "Passionate developer",
  summary:
    "• Vast experience building successful consumer Mobile Web and Desktop products from scratch.\n• Demonstrated success in creating innovative and user-friendly software applications and customer- facing features.\n• Experience working on Agile enabled teams (SCRUM) as a product owner.\n• Experience launching consumer-facing online service (Web/ Mobile/ Tablet) from start to finish.\n• Proven ability to understand complex business problems, apply strong analytical skill and create \n  technical requirements (PRD's, user stories - high level and detailed design).\n• Deep experience in analytics, and massive understanding of the online industry.\n\n• Have both the ability to work independently and also to integrate with other team members.\n• Attention to detail and the ability to see the bigger picture.\n• Ability to manage cross-functional projects without direct authority.\n\n• In my spare time I'm a long distances runner and a triathlete. Also I was competing in The Iron Man Triathlon competition in Austria 2019.",
  country: "US",
  country_full_name: "United States",
  city: "New York",
  state: "NY",
  industry: "Technology",
  // experiences: [mockExperience],
  experiences: mockExperiences,
  education: [mockEducation],
};
const mockProfiles = [
  mockProfile,
  { ...mockProfile, first_name: "Sean" },
  { ...mockProfile, first_name: "Ben" },
];

const mockLocation = {
  location_text_display: "New York, NY",
  location_id: "ny",
};

app.get("/me", (req, res) => {
  res.json({
    id: "parth_id",
    name: "Parth Lathiya",
    email: "plathiya1234@gmail.com",
    completed_onboarding: true,
    company_info: mockCompanyInfo,
    project_snippets: mockProjectSnippets,
  });
});

app.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

app.get("/project/:project_id", (req, res) => {
  const { project_id } = req.params;
  const snippet = mockProjectSnippets.find(
    snippet => snippet.project_id === project_id
  );
  const job_info = { ...mockJobInfo };
  if (snippet) {
    job_info.project_id = snippet.project_id;
    job_info.job_title = snippet.project_title;
  }
  res.json({
    job_info,
    search_query: mockSearchQuery,
  });
});

app.post("/project/:project_id", (req, res) => {
  const { project_id } = req.params;
  const job_info = req.body;
  res.json({ message: `Project ${project_id} updated` });
});

app.get("/search_profiles/:project_id", (req, res) => {
  const { project_id } = req.params;
  res.json(mockProfiles);
});

app.post("/search_query/:project_id", (req, res) => {
  const { project_id } = req.params;
  const search_query = req.body;
  res.json(search_query);
});

app.get("/autocomplete/company/:text", (req, res) => {
  const { text } = req.query;
  res.json([mockCompanyInfo]);
});

app.get("/autocomplete/job_title/:text", (req, res) => {
  const { text } = req.params;
  res.json(["Software Engineer", "Data Scientist", "Product Manager"]);
});

app.get("/autocomplete/location/:text", (req, res) => {
  const { text } = req.params;
  res.json(["San Francisco, CA", "New York, NY", "Los Angeles, CA"]);
});

app.post("/label/:profile_id/:project_id", (req, res) => {
  const { profile_id, project_id } = req.params;
  const { label } = req.body;
  res.json({ message: `Label updated for profile ${profile_id}` });
});

app.get("/pipeline_profiles/:project_id/:label", (req, res) => {
  const { project_id, label } = req.params;
  res.json([{ ...mockProfile, label }]);
});

app.get("/find_company_by_domain/:domain", (req, res) => {
  const { domain } = req.params;
  res.json(mockCompanyInfo);
});

app.post("/select_company/:company_id", (req, res) => {
  const { company_id } = req.params;
  res.json(mockCompanyInfo);
});

app.get("/job_description_by_domain/:domain", (req, res) => {
  const { domain } = req.params;
  res.json([mockJobInfo]);
});

app.post("/completed_onboarding", (req, res) => {
  res.json({ message: "Onboarding completed" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
