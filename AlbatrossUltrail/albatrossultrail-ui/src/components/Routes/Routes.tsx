import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Main from "../Layouts/Main";
import LoadingSpinner from "../LoadingSpinner.tsx/LoadingSpinner";
// import Login from "../Pages/Login/Login";

// Lazy-loaded components
const Home = lazy(() => import("../Pages/Home/Home"));
const AboutPage = lazy(() => import("../Pages/About_Us/About"));
const Criteria50K = lazy(() => import("../Pages/50K/Criteria50K"));
const Criteria83K = lazy(() => import("../Pages/83K/Criteria83K"));
const Criteria33K = lazy(() => import("../Pages/33K/Criteria33K"));
// const RegistrationForm = lazy(() => import("../Pages/Registration/RegistrationForm"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: '/about_us',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AboutPage />
          </Suspense>
        )
      },
      // {
      //   path: '/registration',
      //   element: (
      //     <Suspense fallback={<LoadingSpinner />}>
      //       <RegistrationForm />
      //     </Suspense>
      //   )
      // },
      {
        path: '/criteria83K',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Criteria83K />
          </Suspense>
        )
      },
      {
        path: '/criteria50K',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Criteria50K />
          </Suspense>
        )
      },
      {
      path: '/criteria33K',
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Criteria33K />
        </Suspense>
      )
      },
      // {
      //   path: '/login',
      //   element: (
      //     <Suspense fallback={<LoadingSpinner />}>
      //       <Login />
      //     </Suspense>
      //   )
      // },
    ]
  }
]);

export default routers;