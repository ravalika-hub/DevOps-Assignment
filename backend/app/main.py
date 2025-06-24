from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # ✅ Already present

app = FastAPI()

# ✅ ADD THIS block below app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or use your specific frontend URL: ["http://13.232.62.219:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/message")
def get_message():
    return {"message": "Hello from backend!"}

