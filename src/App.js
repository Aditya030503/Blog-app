import logo from './logo.svg';
import { useContext, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import Home from './Page/Home';
import BlogPage from './Page/BlogPage';
import Tag from './Page/Tag';
import Category from './Page/Category';
import Pagination from './components/Pagination';
import Header from './components/Header';
// import Blog from './components/Blog';

function App() {

  const {fetchBlogPost}=useContext(AppContext);
const [searchParams,setSearchParams]=useSearchParams();

    const location=useLocation();
  const page = searchParams.get("page")??1;

  useEffect(()=>{
    if(location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page), null, category);
    }
    else {
      fetchBlogPost(Number(page));
    }
  },[location.pathname,location.search])

  


  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>}></Route>
        <Route path="/tags/:tag" element = {<Tag/>}   />
        <Route path="/categories/:category" element = {<Category/>}   />
      </Routes>
      <Pagination/>
    
    </div>
  );
}

export default App;
