
// DEPENDES
import { Routes, Route } from "react-router-dom";
import {Suspense, lazy} from "react"

// PAGES COMPONENTS
import { HomePage } from "./pages/HomePage";
import { MangaPage } from "./pages/MangaPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/manga/:id" element={<MangaPage />} />
      {/* <Route path="/manga/:id/chapter/:chapterId" element={<ChapterPage />} /> */}
    </Routes>
  );
};

export default App;
