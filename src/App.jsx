// Packages
import { Routes, Route } from 'react-router-dom';

// Files
import Layout from './components/Layout';
import Blog from './pages/Blog';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

// Styles
import './App.css';

// Code
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Blog />} />
          <Route path='posts/:id' element={<Post />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
