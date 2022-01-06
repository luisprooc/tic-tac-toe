import Scene from "./components/Scene";
import MyContext from "./context/Api-context";

const App = () => {
  return (
    <MyContext>
      <Scene />
    </MyContext>
  );
}

export default App;
