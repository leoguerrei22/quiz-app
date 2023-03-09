
import Questions from "../pages/Questions";
import FinalScreen from "../pages/FinalScreen";
import Settings from "../pages/Settings";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Settings/>,
      },
      {
        path: "/questions",
        element: <Questions  />,
      },
      {
        path: "/score",
        element: <FinalScreen/>
      },
    ],
  },
], {
  basename: "/quiz-app"
});