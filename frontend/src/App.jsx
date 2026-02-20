import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.jsx";
import { AuthProvider } from "./features/auth/context/auth.context.jsx";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
