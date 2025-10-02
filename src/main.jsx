import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Root from "./components/root/Root.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Header from "./components/header/Header.jsx";
import Laptops from "./components/laptops/Laptops.jsx";
import Home from "./components/home/Home.jsx";
import Mobiles from "./components/mobiles/Mobiles.jsx";
import About from "./components/about/About.jsx";
import Users from "./components/users/Users.jsx";
import Users2 from "./components/users2/Users2.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetail from "./components/PostDetail/PostDetail.jsx";
import Comments from "./components/Comments/Comments.jsx";
import CommentDetails from "./components/CommentDetails/CommentDetails.jsx";

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "laptops", Component: Laptops },
      { path: "mobiles", Component: Mobiles },
      { path: "about", Component: About },
      { path: "users", 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails

      },
      {
        path:'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      },
      {
        path: 'comments',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        Component: Comments
      },
      {
        path: 'comments/:commentId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        Component: CommentDetails
      },
      {
        path: '*',
        element: <h3>Not Found: 404 Status</h3>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
