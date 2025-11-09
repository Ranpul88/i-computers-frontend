import { Link } from "react-router-dom";
import Header from "./header";

export default function ProductCard(props) {

    const product = props.product

  return (
    <div className="w-[300px] h-[400px] m-4 shadow-2xl cursor-pointer relative hover:[&_.buttons]:opacity-100 hover:[&_.primary-image]:opacity-0">
        <div className="w-full h-[250px] bg-red-900 relative">
            <img src={product.images[1]} className="w-full h-full absolute bg-white object-cover"/>
            <img src={product.images[0]} className="w-full h-full absolute bg-white object-cover primary-image transition-opacity duration-500"/>
        </div>
        <div className="w-full h-[150px] p-2 flex flex-col justify-between">
            <h1 className="text-lg text-center">{product.name}</h1>
            <div className="w-full flex flex-col items-center">
                {
                  product.labelledPrice > product.price &&
                  <h2 className="text-secondary/80 line-through decoration-gold/70 decoration-2 mr-2">
                    LKR. {product.labelledPrice.toFixed(2)}
                  </h2>
                }
                <h2 className="text-accent font-semibold text-2xl">{product.price.toFixed(2)}</h2>

            </div>
        </div>
        
        <div className="w-full h-[150px] bg-white flex flex-row justify-center items-center gap-4 opacity-0 absolute bottom-0 buttons transition-opacity duration-300">
                <Link to={"/overview/" + product.productID} className="w-[150px] h-[50px] border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-150 flex justify-center items-center">View Details</Link>
        </div>

    </div>
  )
}