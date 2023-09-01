from datetime import date
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# Mock data for various objects

mock_user_info = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "completed_onboarding": True
}

mock_job_info = {
    "project_id": "project123",
    "job_title": "Backend Developer",
    "job_location": "New York, NY",
    "job_description": "Join our amazing backend team!"
}

mock_company_info = {
    "company_id": "company123",
    "company_name": "TechCo",
    "company_logo_url": "https://example.com/logo.png"
}

mock_project_snippet = {
    "project_title": "Techify Project",
    "company_id": "company123",
    "project_id": "project123"
}

mock_search_query = {
    "titles": ["Backend Developer"],
    "city_hq": "New York, NY",
    "max_driving_time": 30,
    "min_years_of_experience_title": 4,
    "max_years_of_experience_title": 8,
    "min_years_of_experience_in_industry": 2,
    "max_years_of_experience_in_industry": 5,
    "companies": ["Amazon"],
    "companies_to_avoid": ["Foobar"],
    "company_sizes": ["Small"],
    "industries": ["Internet"],
    "specialities": ["Web Application Development"],
    "keywords": ["Python", "FastAPI"],
    "negative_keywords": ["Java"],
    "is_top_school_only": True,
    "degree_names": ["B. Sc."],
    "fields_of_study": ["Computer Sceience"],
}


mock_experience = {
    "starts_at": date(year=2018, month=1, day=1),
    "ends_at": date(year=2021, month=12, day=31),
    "title": "Software Engineer",
    "description": "Worked on various backend projects.",
    "location": "New York, NY",
    "company_linkedin_profile_url": "https://linkedin.com/company/techco",
    "company": "TechCo",
    "logo_url": "https://example.com/techco.jpg"
}

mock_education = {
    "starts_at": date(year=2014, month=9, day=1),
    "ends_at": date(year=2018, month=5, day=31),
    "field_of_study": "Computer Science",
    "degree_name": "Bachelor of Science",
    "description": "Studied computer science and programming.",
    "school_linkedin_profile_url": "https://linkedin.com/school/university",
    "school": "University",
    "logo_url": "https://example.com/university.jpg"
}

mock_profile = {
    "_id": "123",
    "public_identifier": "john-doe",
    "profile_pic_url": "https://example.com/john.jpg",
    "first_name": "John",
    "last_name": "Doe",
    "full_name": "John Doe",
    "connections": 500,
    "occupation": "Backend Developer at TechCo",
    "headline": "Passionate developer",
    "summary": "Experienced backend developer with a passion for coding.",
    "country": "US",
    "country_full_name": "United States",
    "city": "New York",
    "state": "NY",
    "industry": "Technology",
    "experiences": [mock_experience],
    "education": [mock_education]
}

mock_location = {
    "location_text_display": "New York, NY",
    "location_id": "ny"
}
mock_project_snippets = [
    {
        "project_title": "Project A",
        "company_id": "123",
        "project_id": "projA"
    },
    {
        "project_title": "Project B",
        "company_id": "123",
        "project_id": "projB"
    }
]

# Implement API endpoints

@app.get("/me")
async def get_me():
    return {
        "user_info": mock_user_info,
        "recent_pid": "projA",
        "company_info": mock_company_info,
        "project_snippets": mock_project_snippets
    }

@app.post("/logout")
async def logout():
    return {"message": "Logged out successfully"}

@app.get("/project/{project_id}")
async def get_project(project_id: str):
    return {
        "job_info": mock_job_info,
        "search_query": mock_search_query
    }

@app.post("/project/{project_id}")
async def update_project(project_id: str, job_info: dict):
    return {"message": f"Project {project_id} updated"}

@app.get("/search_profiles/{project_id}")
async def get_search_profiles(project_id: str):
    return [mock_profile]

@app.post("/search_query/{project_id}")
async def update_search_query(project_id: str, search_query: dict):
    # Update the search query for the given project
    # and return updated search query or appropriate response
    return search_query

@app.post("/label/{profile_id}/{project_id}")
async def update_label(profile_id: str, project_id: str, label: str):
    # Update the label for a specific profile and project
    # Return success response or handle errors
    return {"message": f"Label updated for profile {profile_id}"}

@app.get("/pipeline_profiles/{project_id}/{label}")
def pipeline_profiles_with_label(project_id: str, label: str):
    return []

@app.get("/find_company_by_domain/{domain}")
async def find_company_by_domain(domain: str):
    # Return company_info if found, or None
    return mock_company_info

@app.post("/select_company/{company_id}")
async def select_company(company_id: str):
    # Return the selected company_info object
    return mock_company_info

@app.get("/job_description_by_domain/{domain}")
async def job_description_by_domain(domain: str):
    # Return a list of job_info objects or None
    return [mock_job_info]

@app.post("/completed_onboarding")
async def completed_onboarding():
    return {"message": "Onboarding completed"}

@app.get("/autocomplete/company")
async def autocomplete_company(text: str):
    # Return a list of company_info objects
    return [mock_company_info]

@app.get("/autocomplete/job_title/{text}")
async def autocomplete_job_title(text: str):
    # Return a list of job titles
    return ["Software Engineer", "Data Scientist", "Product Manager"]

@app.get("/autocomplete/location/{text}")
async def autocomplete_location(text: str):
    # Return a list of location names
    return ["San Francisco, CA", "New York, NY", "Los Angeles, CA"]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
