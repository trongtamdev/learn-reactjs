import { useEffect } from "react";
import { useState } from "react";


export default function useProductDetail(productId){
    const [product, setProduct]=useState({})
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        (async()=>{
            try {
                
            } catch (error) {
                console.log(object);
            }
        })()
    },[productId])

    return {product, loading};
}