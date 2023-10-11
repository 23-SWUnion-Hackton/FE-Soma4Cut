import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/header";
import { Footer } from "./components/common/footer";
import { Camera } from "./page/camera";
import { SelectFrame } from "./page/selectFram";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Camera />} path="/camera" />
        <Route element={<SelectFrame />} path="/frame" />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
