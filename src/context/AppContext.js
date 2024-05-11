import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import {useNavigate} from "react-router-dom"




export const AppContext= createContext();

export default function AppContextProvider({children}){
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [totalPages,setTotalPages]=useState(null);

    const navigate=useNavigate();



    const fetchBlogPost = async (page=1 ,tag=null,category) =>{
        setLoading(true);
        let url =`${baseUrl}?page=${page}`;
        console.log("url",url);
        if(tag) {
            url += `&tag=${tag}`;
            console.log("tag url",url);
          }
          if(category) {
            url += `&category=${category}`;
            console.log("category url",url);

          }

        try{
            const res=await fetch(url);
            const data =await res.json();

           
            
            console.log("Api Response",data);
            setPage(data.page);
            console.log(data.page,data.posts,data.totalPages);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("Error in Fetching BlogPosts", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);

    }

    function changHandler(page){
     navigate({search:`?page=${page}`});
     setPage(page);
    }

    console.log(posts);


    const value ={
        posts,
        setPosts,
        page,
        setPage,
        loading,
        setLoading,
        changHandler,
        totalPages,
        setTotalPages,
        fetchBlogPost
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}