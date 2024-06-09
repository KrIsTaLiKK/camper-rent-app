import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage.jsx"));
const CatalogPage = lazy(() => import("./CatalogPage.jsx"));
const FavoritePage = lazy(() => import("./FavoritePage.jsx"));
const NotFoundPage = lazy(() => import("./NotFoundPage.jsx"));

export { HomePage, CatalogPage, FavoritePage, NotFoundPage };
