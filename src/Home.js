import React from "react";
// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
// const function_name = (argument_pass,e)=>{
//     console.log('Hello'+ argument_pass,e.target);
// }
const Home = () => {
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {/* <h2>Home page</h2>  
            <button onClick={ (e)=> function_name('passing_var',e)}>Click me</button>  */}
            {/* doing this will not invoke the function, it will get invoked after clicking the button */}
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='Sunil')} title="Sunil's blog!" />}
        </div>
     );
}
  
export default Home;