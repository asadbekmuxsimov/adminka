import "./App.css";
import Navbar from "./companents/Navbar";
import LoginPage from "./companents/Login";
import useMyStor from "./useMyStore";

function App() {
  const { user }:any = useMyStor();
  
  return (
    <>
      {user ? <Navbar /> : <LoginPage />}
    </>
  );
}

export default App;