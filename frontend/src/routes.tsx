import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageDefault from './components/PageDefault/Index';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CategoriasEntradas from './pages/Entradas/Categorias';
import Entradas from 'pages/Entradas';
import CategoriasDespesas from 'pages/Despesas/Categorias';
import Despesas from 'pages/Despesas';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<PageDefault />}>
            <Route index element={<Dashboard />} />
            <Route path="entradas/categorias" element={<CategoriasEntradas />} />
            <Route path="entradas" element={<Entradas />} />
            <Route path="despesas/categorias" element={<CategoriasDespesas />} />
            <Route path="despesas" element={<Despesas />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}