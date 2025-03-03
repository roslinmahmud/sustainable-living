from typing import List

from fastapi import FastAPI
import mlflow
import pandas as pd

from app.models import BuildingFeatures

mlflow.set_tracking_uri("http://127.0.0.1:5000")  # Localhost MLflow server
model = mlflow.sklearn.load_model(model_uri='runs:/12aff15c5bf844a4baabe74af87f07c4/random_forest_model')

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Welcome to the Energy Efficiency Prediction API"}


@app.post("/predict/")
async def predict_energy(features: List[BuildingFeatures]):
    
    # Convert input to DataFrame
    input_data = pd.DataFrame([feature.model_dump() for feature in features])

    # Make predictions
    predictions = model.predict(input_data)
    
   
    return {"predictions": predictions}