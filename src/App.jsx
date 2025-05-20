import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Body from "./Components/Body";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/handling",
      element: <Body />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
