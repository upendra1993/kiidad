let addToCart = (id, qty, unitPrice) => {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = createCartIfNotExists(cart);
    let itemExists = cart.items.some((item) => item.id === id)
    if (itemExists) {
        let itemIndex = cart.items.findIndex(itm => itm.id === id)
        let item = cart.items[itemIndex]
        item.qty += qty
        cart.items[itemIndex] = item
    } else {
        let item = {
            id: id,
            qty: qty,
            unit: unitPrice
        }
        cart.items.push(item)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}

let reduceFromCart = (id, qty) => {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = createCartIfNotExists(cart);
    let itemExists = cart.items.some((item) => item.id === id)
    if (itemExists) {
        let itemIndex = cart.items.findIndex(itm => itm.id === id)
        let item = cart.items[itemIndex]
        if (item.qty <= qty) {
            cart.items.splice(itemIndex, 1);
        } else {
            item.qty -= qty
            cart.items[itemIndex] = item
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}

// consider this as a cart structure
let createCartIfNotExists = (cart) => {
    if (cart === null || cart === undefined) {
        console.log("cart is undefined")
        return {
            items: [],
            total: 0,
        }
    } else {
        console.log("cart was available")
        return cart
    }
}

let loadCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = createCartIfNotExists(cart);
    return cart;
}

let clearCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = createCartIfNotExists(cart);
    cart.items = []
    localStorage.setItem("cart", JSON.stringify(cart))
    return cart;
}

let removeItem = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = createCartIfNotExists(cart);
    cart.items = cart.items.filter(item => item.id !== id)
}

export {
    addToCart,
    createCartIfNotExists,
    loadCart,
    clearCart,
    removeItem,
    reduceFromCart
}