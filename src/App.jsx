import "./App.css";
// import MainSection from "./components/MainSection.jsx";
import Navbar from "./components/Navbar.jsx";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className='m-4'>
      <Navbar />
      <AppRouter />
      {/* <MainSection /> */}
    </div>
  );
}

export default App;
