import { useEffect } from "react";
import { useState } from "react";


export default function useProductDetail(productId){
    const [product, setProduct]=useState({})
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        
    },[productId])

    return {product, loading};
}