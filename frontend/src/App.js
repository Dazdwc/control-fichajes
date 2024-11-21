import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/test")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return <div>¡Frontend conectado al backend!</div>;
};

export default App;
