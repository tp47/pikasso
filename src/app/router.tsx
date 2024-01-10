import { createBrowserRouter } from "react-router-dom";
import { HomePage, PostPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "post/:postId",
    element: <PostPage />,
  },
]);

export { router };
