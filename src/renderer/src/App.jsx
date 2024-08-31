import { useEffect, useState } from "react";
import { pageContext } from "./context/pageContext";
import { Header } from "./components";
import { Display, Home, SuperAdminSignup, SuperAdminLogin } from "./pages";

function App() {
  const [page, setPage] = useState("SuperAdminSignup");
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      localStorage.getItem("isSuperAdminExist")
    });
    return () => {
      window.removeEventListener("DOMContentLoaded", () => {});
    };
  }, []);

  return (
    <pageContext.Provider value={{ page, setPage }}>
      <Header />
      <Display
        pages={[
          { title: "Home", component: Home },
          { title: "SuperAdminSignup", component: SuperAdminSignup },
          { title: "SuperAdminLogin", component: SuperAdminLogin },
        ]}
      />
    </pageContext.Provider>
  );
}

export default App;
