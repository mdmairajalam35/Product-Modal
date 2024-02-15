// import "./App.css";
import Card from "./component/Card";
import "./input.css";

function App() {
  return (
    <>
      {/* Galobal Background */}
      <div className="bg-slate-800   md:h-screen md:w-screen flex justify-center items-center font-serif">
        {/* Card */}
        <Card/>
      </div>
    </>
  );
}

export default App;
