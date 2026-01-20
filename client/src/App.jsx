
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Loader";
import MainLayout from "./Layout/MainLayout";

export const App = () => {

  return (
    <main className="relative w-full min-h-screen bg-black">
          <Router>
          <MainLayout />
        </Router>
 
    </main>
  );
}