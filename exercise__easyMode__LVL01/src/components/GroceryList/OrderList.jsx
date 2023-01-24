import Products from "./Products";

export default function OrderList(props) {
  return (
    <ol>
      {
        Object.values(props.item.products).map((val, key)=>{
          return <Products index={key} key={Math.random()} item={val}/>
        })
      }
    </ol>
  )
}
