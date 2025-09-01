from typing import List

from fastapi import FastAPI
import mlflow
import pandas as pd

from starlette.middleware.cors import CORSMiddleware

from app.models import BuildingFeatures, PredictionResponse

mlflow.set_tracking_uri("http://127.0.0.1:5000")  # Localhost MLflow server
model = mlflow.sklearn.load_model(model_uri='models:/RandomForestModel/latest')

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost",  # Adjust this to match the origin of your Angular app
    "http://localhost:4200",
    "http://127.0.0.1",
    "http://127.0.0.1:4200"  # Default port for Angular development server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Welcome to the Energy Efficiency Prediction API"}


@app.post("/predict/")
async def predict_energy(features: List[BuildingFeatures]):
    
    # Convert input to DataFrame
    input_data = pd.DataFrame([feature.model_dump() for feature in features])

    # Make predictions
    predictions = model.predict(input_data)
    
   
    return PredictionResponse(Heating_Load_Y1=predictions[0][0], Cooling_Load_Y2=predictions[0][1])