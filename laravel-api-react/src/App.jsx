import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import { useAppContext } from "./Context/AppContext";

function App() {
  // fetch("http://127.0.0.1:8000/api/");

  const { user } = useAppContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
