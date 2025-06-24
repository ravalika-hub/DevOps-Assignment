from fastapi.testclient import TestClient
from app.main import app  # Make sure this matches your import structure

client = TestClient(app)

def test_get_message():
    response = client.get("/api/message")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello from backend!"}
