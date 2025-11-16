import toast from "react-hot-toast"

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

    const index = cart.findIndex((items)=>{
        return items.productID == product.productID
    })

    if(index == -1){
        cart.push({
            productID: product.productID,
            name: product.name,
            price: product.price,
            labelledPrice: product.labelledPrice,
            quantity: quantity,
            image: product.images[0]
        })

        toast.success(`${product.name} added to cart.`)

    }else{
        const newQuantity = cart[index].quantity + quantity
        
        if(newQuantity<=0){
            cart.splice(index, 1)
            toast.success(`${product.name} removed from cart.`)
        }else{
            cart[index].quantity = newQuantity
            toast.success(`Updated ${product.name} qunatity to ${newQuantity}`)
        }
    }

    const cartString = JSON.stringify(cart)
    localStorage.setItem("cart", cartString)
}

export function emptyCart(){
    localStorage.setItem("cart", "[]")
}

export function getCartTotal(){
    let total = 0
    
    const cart = getCart()

    cart.forEach((item)=>{
        total += item.price * item.quantity
    })

    return total
}