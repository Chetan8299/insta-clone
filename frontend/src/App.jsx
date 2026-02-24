import { RouterProvider } from "react-router-dom";
import { routes } from "./app.routes.jsx";
import { AuthProvider } from "./features/auth/context/auth.context.jsx";
import { PostProvider } from "./features/post/context/post.context.jsx";
import "./features/shared/global.scss";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <RouterProvider router={routes} />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
