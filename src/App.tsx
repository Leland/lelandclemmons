import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import routes from "./routes";

function App() {
  return (
    <div
      style={{
        maxWidth: "750px",
        margin: "0 auto",
      }}
    >
      <Header />
      <Routes>
        {routes.map(({ name, path, component: Component }) => {
          return <Route key={name} path={path} element={<Component />} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
