import Header from "./components/Header";
import Body from "./components/Body";
function App() {
  return (
      <div className="scroll-smooth justify-center flex">
        <div className="md:w-[70%] md:px-0 px-5  w-full flex flex-col">
          <Header></Header>
          <Body></Body>
        </div>
      </div>
  );
}

export default App;
