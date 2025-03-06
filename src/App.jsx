import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import UserAuth from "./ui/UserAuth";
import Signup from "./pages/Signup";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="home" element={<Home />} />

            {/* For Posts */}
            <Route
              path="post/:postId"
              element={<Navigate replace to="home" />}
            />

            {/* For Profile */}
            <Route
              path="profile/:username"
              element={<Navigate replace to="home" />}
            />
          </Route>

          {/* For login/signup */}
          <Route element={<UserAuth />}>
            <Route path="login" element={<Navigate replace to="home" />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
