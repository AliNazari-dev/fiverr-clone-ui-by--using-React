import Navbar from "./components/navabar/Navbar";
import "./app.scss";
import { BrowserRouter, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/mygigs/MyGigs";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Add from "./pages/add/Add";

function App() {
  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/gigs", element: <Gigs /> },
        { path: "/gig/:id", element: <Gig /> },
        { path: "/orders", element: <Orders /> },
        { path: "/messages", element: <Messages /> },
        { path: "/add", element: <Add /> },
        { path: "/message/:id", element: <Message /> },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
      ],
    },
  ]);
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
