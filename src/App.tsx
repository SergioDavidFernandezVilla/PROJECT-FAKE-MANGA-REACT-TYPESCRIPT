import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// PAGES COMPONENTS
import { NotFoundManga } from "./pages/Manga/NotFoundManga/NotFoundManga";

// Componente de manga cargado de manera perezosa
const LazyMangaPage = lazy(() => import("./pages/MangaPage"));
const LazyHomePage = lazy(() => import("./pages/HomePage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<LazyHomePage />} />

        {/* Ruta para la página del manga cargada perezosamente */}
        <Route path="library/manga/:id" element={<LazyMangaPage />} />
        
        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<NotFoundManga />} />
      </Routes>
    </Suspense>
  );
};

export default App;
