import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";
import Home from "./pages/home/Home";
import Sidebar from "./components/Sidebar";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="sidebar" element={<Sidebar />} /> */}
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
