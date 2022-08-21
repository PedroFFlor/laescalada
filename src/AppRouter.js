import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./pages/Home'));
const Link = lazy(() => import('./pages/Link'));
const Age2 = lazy(() => import('./pages/Age2'));
const Age2RutaDinamica = lazy(() => import('./components/Age2RutaDinamica'));

const AppRouter = () => {

  const queryClient = new QueryClient()       //lo routeado va desde lo base a lo largo ej: 1ro "/", 2do "/contacto", 3ro "/contacto/sucursales", etc. o usamos exact 
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>loading!!</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/Link" element={<Link />} />
              <Route path="/Age2" element={<Age2 />} />
              <Route path="/Age2/civilization/:id" element={<Age2RutaDinamica />} />   {/* ese id es una variable, puede usarse cualquiera, nosotros usamos el id por que hace referencia a un id*/}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    )
}

export default AppRouter;
