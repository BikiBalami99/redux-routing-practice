import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppLayout from "./AppLayout.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Posts from "./components/Posts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<AppLayout />} />
      <Route path="/posts" element={<Posts />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
