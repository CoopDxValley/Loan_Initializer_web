import "./App.css";
import dotenv from "dotenv";
import Landing from "./pages/landing";

function App() {
  dotenv.config();
  return (
    <>
      <Landing />
      {/* <Signup /> */}
      {/* <Calculator /> */}
      {/* <KYCpage1 /> */}
      {/* <KYCpage2 /> */}
    </>
  );
}

export default App;
