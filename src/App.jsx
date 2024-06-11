import FAQ from "./pages/FAQ";
import Feed from "./pages/Feed";
import Follow from "./pages/Follow";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Mypage from "./pages/Mypage";
import Not from "./pages/Not";
import Post from "./pages/Post";
import Search from "./pages/Search";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import GlobalModal from "./components/GlobalModal";
import DefaultLayout from "./components/layout/DefaultLayout";
import MinimalLayout from "./components/layout/MinimalLayout";
import PrivateRoute from "./components/route/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RecoilizeDebugger from "recoilize";
import { createGlobalStyle } from "styled-components";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'pretendard', sans-serif;
  }

  .wf-loading body {
    font-family: sans-serif;
  }

  .wf-active body {
    font-family: 'pretendard', sans-serif;
  }

  .wf-inactive body {
    font-family: sans-serif;
  }
`;

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <GlobalModal />
            <GlobalStyle />
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/search" element={<Search />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/follow" element={<Follow />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route
                  path="/:userLink"
                  element={<PrivateRoute element={<Mypage />} />}
                />
                <Route
                  path="/setting"
                  element={<PrivateRoute element={<Setting />} />}
                />
                <Route path="*" element={<Not />} />
                <Route path="/:userLink/post/:id" element={<Post />} />
              </Route>

              {/* Header와 Player가 없는 Layout */}
              <Route element={<MinimalLayout />}>
                <Route
                  path="/write"
                  element={<PrivateRoute element={<Write />} />}
                />{" "}
                <Route path="/signup" element={<Signup />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <RecoilizeDebugger />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
};
export default App;
