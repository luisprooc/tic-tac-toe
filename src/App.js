import Home from "./components/Home";
import MyContext from "./context/Api-context";

const App = () => {
  return (
    <MyContext>
      <Home />
    </MyContext>
  );
}

export default App;
