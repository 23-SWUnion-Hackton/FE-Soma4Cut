import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/header";
import { Camera } from "./page/camera";
import { SelectFrame } from "./page/selectFram";
import MainPage from "./page/main";
import { SelectType } from "./page/selectType";
import { Login } from "./page/login";
import { SelectIsNew } from "./page/selectIsNew";
import { InputCode } from "./page/inputCode";
import Loading from "./page/loading";
import { Another } from "./page/another";
import ShowPictureCode from "./page/showPictureCode";
import { ShowCode } from "./page/showCode";
import { Select } from "./page/select";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<Select />} path="/select" />
        <Route element={<InputCode />} path="/codeinput" />
        <Route element={<Another />} path="/watch" />
        <Route element={<SelectIsNew />} path="/isnew" />
        <Route element={<SelectType />} path="/type" />
        <Route element={<Login />} path="/login" />
        <Route element={<Camera />} path="/camera" />
        <Route element={<SelectFrame />} path="/frame" />
        <Route element={<Loading />} path="/loading" />
        <Route element={<ShowPictureCode />} path="/showCode" />
        <Route element={<ShowCode />} path="/show" />
      </Routes>
    </>
  );
}

export default App;
