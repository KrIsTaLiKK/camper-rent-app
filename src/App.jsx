import { Route, Routes } from "react-router-dom";
import { CatalogPage, FavoritePage, HomePage, NotFoundPage } from "./pages";
import Container from "./shared/components/Container/Container";
import { Loader } from "./shared/components/Loader/Loader";

import { Suspense } from "react";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};

export default App;
