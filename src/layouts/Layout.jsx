import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import Loader from 'components/Loader/LoaderScreen';
import RecentlyWatched from 'components/RecentlyWatched/RecentlyWatched';

const Layout = () => {
  return (
    <>
      <Header />
      <RecentlyWatched />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
