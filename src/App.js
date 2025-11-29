import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Home";
import { Data } from "./Components/Data";
import { Contact } from "./Components/Contact";

function App() {
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<Root/>}>
        <Route index element = {<Home/>}/>
        <Route path="/data" element = {<Data/>}/>
        <Route path="/contact" element = {<Contact/>}/>

      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
const Root= () =>{
  return<>
  <div>
    <Link to="/">Home</Link>
    <Link to="/data">Data</Link>
    <Link to="/contact">Contact</Link>

  </div>
  <div>
    <Outlet/> 
  </div>
  </>
}
