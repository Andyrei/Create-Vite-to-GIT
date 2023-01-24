import Container_Grocery_List from "./Container_Grocery_List";

function Grocery() {
  const arrGrocery = [
    {
      "name": "igiene e pulizia",
      "products":['detergente pavimento','sapone piatti']
    },
    {
      "name": "alimentari",
      "products":['carne','pasta fresca','uova']
    },
    {
      "name": "casa",
      "products":['piatti','posate','tovaglioli']
    }
  ]

  return <>
    <h1 className="text-center"> Grocery List </h1>
      {
        arrGrocery.map((item, index)=>{
          return <Container_Grocery_List index={index} key={Math.random()} item={item}/>
        })
      }
  </>
}

export default Grocery;