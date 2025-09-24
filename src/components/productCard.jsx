export default function ProductCard(props) {

    console.log(props.name);

  return (
    <div>
        <h1>{props.name}</h1>
        <img src="https://picsum.photos/200/300?grayscale" />
        <p>price: {props.price}</p>
    </div>
  )
}