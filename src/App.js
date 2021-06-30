import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="d-flex justify-content-evenly">
      <Shop />
      <Cart />
    </div>
  );
}

export default App;
