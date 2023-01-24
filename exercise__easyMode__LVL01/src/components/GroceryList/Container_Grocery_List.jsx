import OrderList from "./OrderList"

export default function Container_Grocery_List(props) {
  return (
    <ul>
        <li>
          <h4>{props.item.name}</h4>
            <OrderList item={props.item} key={props.index}/>
        </li>
    </ul>
  )
}
