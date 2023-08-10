import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import FirstTask from "../pages/FirstTask/FirstTask";
import React from "react";
import RootPage from "../pages/RootPage/RootPage";
import SecondTask from "../pages/SecondTask/SecondTask";
import ThirdTask from "../pages/ThirdTask/ThirdTask";

const routerPath = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'}
         element={<RootPage/>}>
    < Route index
            element={<FirstTask/>}/>
    < Route path={'/second'}
            element={<SecondTask/>}/>
    < Route path={'/third'}
            element={<ThirdTask/>}/>

  </Route>
));


const AppRoutes = (): JSX.Element => {
  return (
    <RouterProvider router={routerPath}/>
  );
};
export default AppRoutes;
