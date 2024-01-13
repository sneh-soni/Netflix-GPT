import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Home from "./components/Home";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
