import React, { ReactElement, useState ,memo} from 'react'
import { ProductType } from '../context/ProductProvider'
import { ReducerActionType,ReducerAction } from '../context/CartProvider'
import { TiTick } from "react-icons/ti";
import useCart from '../hooks/useCart';
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

type PropsType = {
    product:ProductType,
    dispatch:React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS:ReducerActionType,
    inCart:boolean
}



const Products = ({product,dispatch,REDUCER_ACTIONS,inCart}:ProductType):ReactElement => {

  const [count,setCount] = useState<number>(0)

  // const {REDUCER_ACTIONS,dispatch} = useCart()

    // const img:string = require(`../images/${product.sku}.png`)
    const img:string = new URL(`../images/${product.sku}.png`, import.meta.url).href
    console.log("img",img)  
    
    const onAddToCart = () => dispatch({type:REDUCER_ACTIONS.ADD,payload:{...product,qty:1}})

    const itemInCart = inCart ? <TiTick /> : null

    const content = 
    <article className='product'>
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className='product__img' />
      {count}
      <p>{new Intl.NumberFormat('en-US',{style:'currency', currency:'USD'}).format(product.price)}</p>{itemInCart}
      <FaCirclePlus onClick={()=>setCount(count=>count+1)}/><button onClick={onAddToCart}>Add to cart</button>
      <FaMinusCircle onClick={()=>setCount(count=>count-1)}/>

    </article>

  return content
}

function areProductsEqual ({product:prevProduct,inCart:prevInCart}:PropsType,{prpduct:nextProduct,inCart:nextInCart}:PropsType){
  return(
    Object.keys(prevProduct).every(key =>{
      return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
    }) && prevInCart === nextInCart
  )
}

const MemoizedProduct = memo<typeof Products>(Products,areProductsEqual)

export default MemoizedProduct