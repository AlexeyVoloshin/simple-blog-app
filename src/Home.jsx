import React, { Suspense } from 'react';

const HomeModule = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return await import('./components/HomeModule.jsx');
});

const Home = () => {
  return (
    <Suspense fallback={<p>Loading!...</p>}>
      <HomeModule />
    </Suspense>
  );
};
export default Home;
