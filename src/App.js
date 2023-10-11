import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/header";
import { Camera } from "./page/camera";
import { SelectFrame } from "./page/selectFram";
import MainPage from "./page/main";
import { SelectType } from "./page/selectType";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<SelectType />} path="/type" />
        <Route element={<Camera />} path="/camera" />
        <Route element={<SelectFrame />} path="/frame" />
      </Routes>
    </>
  );
}

export default App;
