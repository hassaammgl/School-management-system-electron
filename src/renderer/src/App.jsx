import { useState } from "react";
import { pageContext } from "./context/pageContext";
import { Header } from "./components";
import { Display, Home, Signup, Login } from "./pages";

function App() {
  const [page, setPage] = useState("Login");

  return (
    <pageContext.Provider value={{ page, setPage }}>
      <Header />
      <Display
        pages={[
          { title: "Home", component: Home },
          { title: "SignUpAdmin", component: Signup },
          { title: "LoginAdmin", component: Login },
        ]}
      />
    </pageContext.Provider>
  );
}

export default App;
