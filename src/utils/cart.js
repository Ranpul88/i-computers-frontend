import { lazy } from "react"
import toast from "react-hot-toast"

const sampleCart = [
    {
        productID: "123456",
        name: "Sample Product 1",
        price: 29.99,
        labelledPrice: 39.99,
        quantity: 2,
        image: "https://example.com/image1.jpg"
    },
    {
        productID: "789012",
        name: "Sample Product 2",
        price: 49.99,
        labelledPrice: 59.99,
        quantity: 1,
        image: "https://example.com/image2.jpg"
    }
]

export function getCart(){
    let cartString = localStorage.getItem("cart")

    if(cartString == null){
        localStorage.setItem("cart", "[]")
        return []
    }else{
        const cart = JSON.parse(cartString)
        return cart
    }
}



export function addToCart(product, quantity){
    const cart = getCart()

    const index = cart.findIndex((item=>{
        return item.productID == product.productID
    }))
    if(index == -1){
        cart.push({
            productID: product.productID,
            name: product.name,
            price: product.price,
            labelledPrice: product.labelledPrice,
            quantity: quantity,
            image: product.images[0]
        })

        toast.success(`${product.name}Product added to cart.`)

    }else{
        const newQuantity = cart[index].quantity + quantity
        
        if(newQuantity <= 0){
            cart.splice(index, 1)
        }else{
            cart[index].quantity = newQuantity
        }
    }

    const cartString = JSON.stringify(cart)
    localStorage.setItem("cart", cartString)
}

export function emptyCart(){
    localStorage.setItem("cart", "[]")
}