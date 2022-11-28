import { useState } from "react";
import PasswordGenerated from "./components/PasswordGenerated";
import PasswordRules from "./components/PasswordRules";


function App() {

  const [thisPassword, setThisPassword] = useState("");

  return (
    <section className="app">
      <PasswordGenerated thisPassword={thisPassword} />
      <PasswordRules setThisPassword={setThisPassword} />
    </section>
  );
}

export default App;
