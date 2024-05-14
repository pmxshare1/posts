import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NewPosts from "./pages/NewPosts";
import PostDetails, { postDetailsLoader } from "./pages/PostDetails";
import PostsLayout from "./layouts/PostsLayout";
import NotFound from "./pages/NotFound";
import PostEditForm, { postEditLoader } from "./pages/PostEditForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="posts" element={<PostsLayout />}>
        <Route index element={<Posts />} />
        <Route
          path=":id"
          element={<PostDetails />}
          loader={postDetailsLoader}
        />
        <Route
          path="edit/:id"
          element={<PostEditForm />}
          loader={postEditLoader}
        />
      </Route>
      <Route path="newposts" element={<NewPosts />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
