import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavBar from "./Scenes/User/NavBar/NavBar";
import Footer from "./Scenes/User/Footer/Footer";
const Body = lazy(() => import("./Pages/Cur-Converter/C_Converter"));

const Newz = () => {
  return (
    <div className="">
      <NavBar />
      <Suspense fallback="Loading">
        <Routes>
          <Route exact path="/" element={<Body />} />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
};

export default Newz;
