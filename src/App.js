import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Chat from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="container">
      <section className="section-container">
        <Navbar />
        <Chat />
      </section>
    </div>
  );
}

export default App;
