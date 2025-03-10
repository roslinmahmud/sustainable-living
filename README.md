## **Architecture Diagram**  
Below is the architecture flow of the project:  

![Architecture Diagram](https://github.com/user-attachments/assets/4a222d71-6dc7-46eb-a5db-24ff74f6a6e8)

The architecture ensures efficient model management, API-based prediction serving, and a user-friendly UI for interactions.

## Installation

**Install dependencies**:
   Run the following command to install all dependencies required by your project:
   ```bash
    cd backend
    pip install -r requirements.txt
```

## Preparation of Environment

Before running your project, ensure you have the necessary environment variables set up:

**Activate a virtual environment (optional)**:
   To avoid polluting the system Python environment, consider activating a virtual environment using `python -m venv myenv` and then activating it with `myenv\Scripts\activate` on Windows or `source myenv/bin/activate` on macOS/Linux.



## **Running the Project**

### Running MLflow
1. Navigate to the MLflow  directory:
    ```bash
    cd backend/mlflow
    ```
2. Start the MLflow server:
    ```bash
    mlflow server --backend-store-uri sqlite:///mlflow.db --default-artifact-root ./mlruns --host 0.0.0.0 --port 5000
    ```

### Running FastAPI
- Start the FastAPI server:
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
    ng serve
    ```

Now you should have MLflow running on port 5000, FastAPI on port 8000, and the Angular app on port 4200.
