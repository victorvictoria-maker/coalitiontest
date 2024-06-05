import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

let Home = lazy(() => import("./pages/Home"));
let MainSection = lazy(() => import("./pages/MainSection"));
let Schedule = lazy(() => import("./pages/Schedule"));
let Message = lazy(() => import("./pages/Message"));
let Transactions = lazy(() => import("./pages/Transactions"));
let PageNotFound = lazy(() => import("./pages/PageNotFound"));

const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/patients/:name' element={<MainSection />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/message' element={<Message />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='*' Component={() => <PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
