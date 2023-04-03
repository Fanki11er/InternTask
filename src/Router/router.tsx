import { Route } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainTemplate from "../Templates/MainTemplate/MainTemplate";
import Main from "../Views/Main/Main";
import NotFound from "../Views/NotFound/NotFound";
import Views from "../Views/Views/Views";
import { paths } from "./paths";

const { main, views } = paths;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainTemplate />}>
      <Route path={main} element={<Main />} />
      <Route path={views} element={<Views />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
