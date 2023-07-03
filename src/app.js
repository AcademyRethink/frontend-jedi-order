import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/center-panel" element={<CenterPanel />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/contact" element={<Contac />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
