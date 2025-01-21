import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductPage from '../pages/Productpage';

export function BaseRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/produtos" element={<ProductsPage />}/>
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        </>
    )
}