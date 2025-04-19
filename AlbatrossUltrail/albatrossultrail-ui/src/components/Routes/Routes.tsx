import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Main from "../Layouts/Main";
import LoadingSpinner from "../LoadingSpinner.tsx/LoadingSpinner";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";

// Lazy-loaded components
const Home = lazy(() => import("../Pages/Home/Home"));
const AboutPage = lazy(() => import("../Pages/About_Us/About"));
const RegistrationForm = lazy(() => import("../Pages/Registration/RegistrationForm"));

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
      {
        path: '/registration',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RegistrationForm />
          </Suspense>
        )
      },
      {
        path: '/terms',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <EventDetails />
          </Suspense>
        )
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        )
      },
    ]
  }
]);

export default routers;