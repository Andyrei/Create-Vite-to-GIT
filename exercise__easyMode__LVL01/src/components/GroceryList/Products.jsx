export default function Products(props) {
  return (
    <li key={props.index}>
      {props.item}
    </li>
  )
}
