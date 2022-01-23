import React, { createContext, useContext, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { initialState, reducer } from "./Reducers/userReducer";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import "./assets/styles/common.css";
import Post from "./Pages/Post";
import Cookies from "js-cookie";
export const UserContext = createContext();

const AllRoutes = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      const userData = JSON.parse(Cookies.get("userData"));

      dispatch({ type: "USER", payload: userData });
    } else {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Routes>
        <Route path="/post/:b_id/:p_id" element={<Post />} />
      </Routes>
    </>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
