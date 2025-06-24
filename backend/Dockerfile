# Stage 1: Build dependencies
FROM python:3.12-slim AS builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y gcc

# Install dependencies
COPY requriements.txt .
RUN pip install --upgrade pip
RUN pip install --user -r requriements.txt

COPY app/ ./app
COPY test_main.py .

RUN ~/.local/bin/pytest test_main.py

# Stage 2: Final image
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Copy only what's needed
COPY --from=builder /root/.local /root/.local
COPY --from=builder /app /app
COPY requriements.txt .

ENV PATH=/root/.local/bin:$PATH

# Run FastAPI app using Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
