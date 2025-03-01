# Setting Up MLflow
## Installation
To install MLflow using pip:
```
pip install mlflow
```
## Starting the MLflow Tracking Server
Once MLflow is installed, start an MLflow tracking server. The tracking server will store experiment data and artifacts. Use the following command to start the server:
```
mlflow server --backend-store-uri sqlite:///mlflow.db --default-artifact-root ./mlruns --host 0.0.0.0 --port 5000
```