import { useState } from "react";
import { pageContext } from "./context/pageContext";
import { Header } from "./components";
import { Display, Dashboard, Home, Signup, Login } from "./pages";

function App() {
  const [page, setPage] = useState("Login");

  return (
    <pageContext.Provider value={{ page, setPage }}>
      <div>
        <Header />
        <Display
          pages={[
            { title: "Home", component: Home },
            { title: "Dashboard", component: Dashboard },
            { title: "SignUp", component: Signup },
            { title: "Login", component: Login },
          ]}
        />
      </div>
    </pageContext.Provider>
  );
}

export default App;
