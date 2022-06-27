import { useState, useEffect } from 'react'
import ReloadPrompt from './ReloadPrompt'

import './App.css'

function App() {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const [prompt, setPrompt] = useState<Event|null>(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      setPrompt(event);
      setIsReadyForInstall(true);
    });
  }, []);

  const install = async () => {
    console.log(prompt)
    if (prompt) {
      /* prompt.prompt();
      const result = await prompt.userChoice; */
      setPrompt(null);
      setIsReadyForInstall(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Hola Mundo - { isReadyForInstall ? <button onClick={install}>Descargar</button> : "Not Ready" }
        <ReloadPrompt />
      </header>
    </div>
  )
}

export default App
