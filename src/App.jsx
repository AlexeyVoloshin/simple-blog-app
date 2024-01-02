import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ROUTES } from './core/routes';
import { Route, Routes } from 'react-router-dom';

import './styles.css';

export const App = () => {
  return (
    <Layout title={'Home'}>
      <main>
        <Routes>
          <Route
            path={ROUTES.static.home}
            element={<Home />}></Route>
        </Routes>
      </main>
    </Layout>
  );
};
