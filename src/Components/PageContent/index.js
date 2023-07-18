import { Outlet } from "react-router-dom";

import AppRoutes from "../AppRoutes/index";

function PageContent() {
  return (
    <div className="PageContent">
      <AppRoutes />
      <Outlet />
    </div>
  );
}
export default PageContent;
