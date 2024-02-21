import './App.css';
import { useState } from "react";
import Calendar from './components/Calendar';
import Overlay from "./components/Overlay";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='App'>
        <a>Saudações, William!</a>
        <button onClick={toggleOverlay}>Open Overlay</button>
        <Overlay isOpen={isOpen} onClose={toggleOverlay}>
          <h1>Content in Overlay</h1>
          </Overlay>
        <Calendar />
      </div>
    </>
  )
}

export default App