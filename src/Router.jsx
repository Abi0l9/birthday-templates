import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Templates from "./pages/Templates";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Templates />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/templates/1" element={<Main />} />
    </Routes>
  );
};

export default Router;
