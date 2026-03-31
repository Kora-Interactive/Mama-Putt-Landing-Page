import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import DeleteAccount from "./pages/DeleteAccount";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/delete-account",
    Component: DeleteAccount,
  },
]);
