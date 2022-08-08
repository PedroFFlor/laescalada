import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const Home = lazy(() => import('./pages/Home'));
const PanelControl = lazy(() => import('./pages/PanelControl'));
const Contact = lazy(() => import('./pages/Contact'));
const Catalogue = lazy(() => import('./pages/Catalogue'));
const Services = lazy(() => import('./pages/Services'));

const AppRouter = () => {

  const queryClient = new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>loading!!</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Admin" element={<PanelControl />} />
              <Route path="/Contacto" element={<Contact />} />
              <Route path="/Catalogo" element={<Catalogue />} />
              <Route path="/Servicios" element={<Services />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    )
}

export default AppRouter;
