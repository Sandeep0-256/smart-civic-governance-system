from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ticket_counter = 1
complaints = []

class Complaint(BaseModel):
    description: str
    latitude: float
    longitude: float
    severity: str


@app.get("/")
def home():
    return {
        "project": "Smart Civic Governance System",
        "status": "Running"
    }


@app.post("/complaint")
def create_complaint(data: Complaint):
    global ticket_counter

    ticket_id = f"SCGS-2026-{ticket_counter:04d}"

    complaint = {
        "ticketId": ticket_id,
        "description": data.description,
        "latitude": data.latitude,
        "longitude": data.longitude,
        "severity": data.severity,
        "status": "Submitted"
    }

    complaints.append(complaint)

    ticket_counter += 1

    return complaint


@app.get("/complaints")
def get_complaints():
    return complaints


@app.get("/complaints/{ticket_id}")
def get_complaint(ticket_id: str):

    for complaint in complaints:
        if complaint["ticketId"] == ticket_id:
            return complaint

    return {
        "message": "Complaint not found"
    }