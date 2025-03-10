## **Architecture Diagram**  
Below is the architecture flow of the project:  

![Architecture Diagram](https://github.com/user-attachments/assets/4a222d71-6dc7-46eb-a5db-24ff74f6a6e8)

The architecture ensures efficient model management, API-based prediction serving, and a user-friendly UI for interactions.

## **Running the Project**

### Running MLflow
1. Install MLflow:
    ```bash
    pip install mlflow
    ```
2. Start the MLflow server:
    ```bash
    mlflow server --backend-store-uri sqlite:///mlflow.db --default-artifact-root ./mlruns --host 0.0.0.0 --port 5000
    ```

### Running FastAPI
1. Install FastAPI and Uvicorn:
    ```bash
    pip install fastapi uvicorn
    ```
2. Start the FastAPI server:
    ```bash
    uvicorn main:app --host 0.0.0.0 --port 8000
    ```

### Running the Angular App
1. Navigate to the Angular app directory:
    ```bash
    cd path/to/angular-app
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the Angular development server:
    ```bash
    ng serve --host 0.0.0.0 --port 4200
    ```

Now you should have MLflow running on port 5000, FastAPI on port 8000, and the Angular app on port 4200.
