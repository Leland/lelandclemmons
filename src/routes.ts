import { ReactNode } from "react";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";

interface Route {
  name: string;
  path: string;
  component: () => ReactNode;
}

const routes: Route[] = [
  {
    name: "Home",
    path: "",
    component: Home,
  },
  {
    name: "Blog",
    path: "",
    component: Blog,
  },
];

export default routes;
