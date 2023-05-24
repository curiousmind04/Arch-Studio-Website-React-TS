import { Outlet } from "react-router-dom";

import MainNav from "../components/Navigation";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
