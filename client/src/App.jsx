import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Loader";
import MainLayout from "./Layout/MainLayout";

export const App = () => {
  const [finished, setFinished] = useState(false);

  return (
    <main className="relative w-full min-h-screen bg-black">
      {!finished ? (
        <Loader setFinished={setFinished} />
      ) : (
        /* The Router must wrap the MainLayout to enable navigation */
        <Router>
          <MainLayout />
        </Router>
      )}
    </main>
  );
}