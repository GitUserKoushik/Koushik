// import logo from './logo.svg';
// import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Product from './Components/Product';
import CreateList from './Components/CreateList';
// import Update from './Components/Update';
// import Login from './Auth/Login';
// import Register from './Auth/Register';
// import { store } from './Redux/Store';

const Home = lazy(()=> import("../src/Components/Home"));
const Login =lazy(()=> import ('../src/Auth/Login'));
const Register =lazy(()=> import ('../src/Auth/Register'));
const Update = lazy(()=> import ('./Components/Update'))

function App() {
  function PrivateRoute({ children }) {
    console.log(children, "children");
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/login" />
      </>
    );
  }

    const PrivateRouteNames = [
      {
        path: "/",
        Component: <Home />,
      },
      {
        path: "/product",
        Component: <Product/>,
      },
      {
        path:"/CreateList",
        Component: <CreateList/>
      },
      {
        path:"/Update/:id",
        Component: <Update/>
      }

      
    ];
  
    const PublicRouteNames = [
      {
        path: "/Register",
        Component: <Register />,
      },
      {
        path: "/Login",
        Component: <Login />,
      },
     
    ];

return (
      <>
        <Suspense fallback={<h2>Loading....</h2>}>
          <Router>
            <Navbar />
            <Routes>
              {PublicRouteNames?.map((route, index) => {
                return <Route key={index} exact path={route.path} element={route.Component} />;
              })}
  
              {PrivateRouteNames?.map((route, index) => {
                return <Route key={index} path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />;
              })}
            </Routes>
            <Footer />
          </Router>
        </Suspense>
      </>
    );
}

export default App;
