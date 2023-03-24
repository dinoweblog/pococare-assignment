import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import { WelcomePage } from "./components";
import { Signin, Signup } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
