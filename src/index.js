import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Produtos from './pages/Produtos/Produtos';
import CriarProduto from './pages/Produtos/CriarProduto';
import EditarProduto from './pages/Produtos/EditarProduto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/criar-produto" element={<CriarProduto />} />
          <Route exact path="/editar-produto/:id" Component={EditarProduto} />
            
          {/* <Route path="utilizadores" element={<Utilizadores />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
);
reportWebVitals();
