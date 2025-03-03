from pydantic import BaseModel

class BuildingFeatures(BaseModel):
    X1: float
    X2: float
    X3: float
    X4: float
    X5: float
    X6: float
    X7: float
    X8: float

class PredictionResponse(BaseModel):
    Heating_Load_Y1: float
    Cooling_Load_Y2: float
