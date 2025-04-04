import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import NotFound from "./pages/404.tsx";
import RandomGridLayout from "./pages/templates/random-layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/templates",
    children: [
      {
        path: "random-layout",
        element: <RandomGridLayout />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
