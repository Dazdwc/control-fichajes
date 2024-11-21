from fastapi import FastAPI

# Crea una instancia de FastAPI
app = FastAPI()

# Define un endpoint de prueba
@app.get("/api/test")
def test_api():
    return {"message": "¡El backend está funcionando!"}