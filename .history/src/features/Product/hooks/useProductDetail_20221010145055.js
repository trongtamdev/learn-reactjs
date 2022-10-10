import productApi from "api/productApi";
import { useEffect } from "react";
import { useState } from "react";


export default function useProductDetail(productId){
    const [product, setProduct]=useState({})
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        (async()=>{
            try {
                setLoading(true)
                const result=await productApi.get(productId)
                console.log(object);
            } catch (error) {
                console.log('Failed to fetch product', error);
            }
            setLoading(false)
        })()
    },[productId])

    return {product, loading};
}