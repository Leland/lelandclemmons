import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ name, path, component: Component }) => {
          return <Route key={name} path={path} element={<Component />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
