import { Outlet } from "react-router-dom";
import { Header } from "./components";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
