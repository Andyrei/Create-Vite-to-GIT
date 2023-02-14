export default function ItemSearch(props) {
  return (
      <li key={props.key}><a href={"https://" + props.value.url}>{props.value.name}</a></li>
  )
}
