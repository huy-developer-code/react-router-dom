import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./component/TopMenu";
import Product from "./pages/products";
const index = () => <h2>Home</h2>;

export default function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />

        <Route path="/" exact component={index} />
        <Route path="/products" component={Product} />
      </div>
    </Router>
  );
}
