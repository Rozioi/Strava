import {  Routes, Route, BrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Main from "../pages/Main/Main";
import Venue from "../pages/Venue/Venue";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/*" element={<Main />} />
        </Route>
        <Route path="/venue/:id" element={<Venue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
