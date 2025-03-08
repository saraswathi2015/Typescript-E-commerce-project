import { createContext, ReactElement, useEffect, useState } from "react"


 export type ProductType = {
    sku:string,
    name:string,
    price:number
}

const initState:ProductType[] = [
        {
            "sku" : "item0001",
            "name" : "widget",
            "price" : 9.99
        },
        {
            "sku" : "item0002",
            "name" : "premiumm",
            "price" : 19.99
        },
        {
            "sku" : "item0001",
            "name" : "Deluxe",
            "price" : 29.99
        }
    ]

    // const initState:ProductType[]= []

    export type UseProductsContextType = {products:ProductType[]}

    const initContextState:UseProductsContextType = {products:[]}

    const ProductContext = createContext<UseProductsContextType>(initContextState)

    type ChildrenType = {children?: ReactElement | ReactElement[]}

    export const ProductProvider = ({children} : ChildrenType):ReactElement =>{
        const[products,setProducts] = useState<ProductType[]>(initState)

        // useEffect(()=>{
        //    const fetchProducts = async():Promise<ProductType[]> =>{
        //      const data = await fetch ('http://localhost:3500/products').then(res=>{
        //         return res.json()
        //      }).catch(err=>{
        //           if(err instanceof Error) console.log(err.message)
        //      })
        //     return data
        //    }
        //    fetchProducts().then(products=> setProducts(products))
        // },[])

        return (
            <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
        )

    }

    export default ProductContext