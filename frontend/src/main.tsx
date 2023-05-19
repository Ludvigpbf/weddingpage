import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Contact from "./pages/Contact.tsx";
import Story from "./pages/Story.tsx";
import Faq from "./pages/FAQ.tsx";
import Guestbook from "./pages/Guestbook.tsx";
import Photos from "./pages/Photos.tsx";
import Registry from "./pages/Registry.tsx";
import RSVP from "./pages/RSVP.tsx";
import Updates from "./pages/Updates.tsx";
import Landing from "./pages/Landing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/",
        element: <Story />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/guestbook",
        element: <Guestbook />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
      {
        path: "/registry",
        element: <Registry />,
      },
      {
        path: "/rsvp",
        element: <RSVP />,
      },
      {
        path: "/updates",
        element: <Updates />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<RouterProvider router={router} />);
