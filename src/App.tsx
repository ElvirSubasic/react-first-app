import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <div>
          <Alert onClose={() => setShowAlert(false)}>
            This is an alert message. <span> Test </span>
          </Alert>
        </div>
      )}
      <Button onClick={() => setShowAlert(true)}>Toggle Alert</Button>
    </>
  );
}

export default App;
