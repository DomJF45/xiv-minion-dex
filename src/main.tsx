import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import App from './App.tsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme.ts';
import Fonts from './fonts.tsx';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import MinionPage from './pages/MinionPage.tsx';
import './index.css';
import Nav from './components/Nav.tsx';

const Root = () => {
  return (
    <>

      <Nav />
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:minionId',
        element: <MinionPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <Fonts />
    </ChakraProvider>
  </React.StrictMode>,
)
