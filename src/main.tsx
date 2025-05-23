import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/app/app-layout.tsx";
import "./global.scss";
import { Login } from "./pages/login/login.tsx";
import { Profile } from "./pages/profile/profile.tsx";
import { NewCharacter } from "./pages/new-character/new-character.tsx";
import { Home } from "./pages/home/home.tsx";
import { CharacterSheet } from "./pages/character-sheet/character-sheet.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />, 
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/character/:idCharacter/create",
        element: <NewCharacter />,
      },
      {
        path: "/character/:idCharacter/sheet",
        element: <CharacterSheet />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
