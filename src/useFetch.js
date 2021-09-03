// import React from 'react'
import { useState, useEffect } from "react";

const useFetch=(url)=>{
    const [data, setData] = useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error, setError]=useState(null);
    useEffect(()=>{ //this function run with every render
        fetch(url)
        .then(res=>{
            if(!res.ok)
            {
                throw Error('could not connect to server');
            }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
        })
        .catch(err=>{
            setIsPending(false);
            setError(err.message);
        })
    },[]);//no need to store, doesnot return anything....[] used for running the function only once
    return {data, isPending,error};
}
export default useFetch;