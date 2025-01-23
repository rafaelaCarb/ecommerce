import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductPage from '../pages/ProductPage';
import LoginSection from '../components/LoginSection';

export function BaseRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginSection />}/>
            <Route path="/produtos" element={<ProductsPage />}/>
            <Route path="/produto/:id" element={<ProductPage />} />
        </Routes>
        </>
    )
}