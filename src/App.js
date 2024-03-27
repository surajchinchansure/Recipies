import RecipeDetails from "./components/RecipeDetails";
import Front from "./components/Front";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Front />,
      children: [
        {
          path: "/recFinder",
          element: <RecipeDetails />,
        },
        {
          path: "/log",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
