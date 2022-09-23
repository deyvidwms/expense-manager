import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageDefault from './components/PageDefault/Index';
import CadastroCategoriaEntradas from './pages/CadastroCategoriaEntradas';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<PageDefault />}>
            <Route index element={<Dashboard />} />
            <Route path="entradas/categorias" element={<CadastroCategoriaEntradas />} />
            <Route path="entradas" element={<CadastroCategoriaEntradas />} />
            <Route path="despesas/categorias" element={<CadastroCategoriaEntradas />} />
            <Route path="despesas" element={<CadastroCategoriaEntradas />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}