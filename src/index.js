import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Home from './pages/home/Home';
import Service from './pages/service/Service';
import Change from './pages/change/Change';
import DisplayJson from './pages/displayJson/DisplayJson';
import DisplayJsonTable from './pages/displayJsonTable/DisplayJsonTable';
import Pagination from './pages/pagination/Pagination';
import Layout from './templates/layout/Layout';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/change" element={<Change />} />
          <Route path="/data" element={<DisplayJson />} />
          <Route path="/table" element={<DisplayJsonTable />} />
          <Route path="/pagination" element={<Pagination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<App />);

reportWebVitals();