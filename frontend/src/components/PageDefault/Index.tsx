import { Outlet } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
import Header from "./Header";

const PageDefault = () => {
  return (
    <>
      <Header />
      <BreadCrumb />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default PageDefault;