import "./App.css";
import { Link, Route, Routes, useParams, Outlet } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const SearchPage = () => {
  const tacos = ["cochinita", "chili", "carnita", "chili pepper"];

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tacos.map((taco) => (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Tacos = () => {
  const { taco } = useParams();
  return (
    <div>
      <h1>Tacos</h1>
      {taco}
      <Link to="details">Ir a los detalles</Link>
      <Outlet />
    </div>
  );
};

const TacoIndex = () => {
  return <h1>Index Route de Tacos</h1>;
};
const TacoDetails = () => {
  const { taco } = useParams();
  return <h1>Taco Details del {taco}</h1>;
};

function App() {
  return (
    <div className="App">
      <header>
        <h1> PonPon Chollos Sin Fin $</h1>
        <nav>
          <ul>
            <li>
              <Link className='link' to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-page">Search Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:taco" element={<Tacos />}>
          <Route index element={<TacoIndex />} />
          <Route path="details" element={<TacoDetails />} />
        </Route>
        <Route
          path="/tacos/ponpontaco"
          element={<h1 style={{ color: "red" }}>Pon Pon Taco</h1>}
        />
        <Route path="*" element={<h1>No found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
