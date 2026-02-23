import "./ShoppingCart.css"
export const ShoppingCart = ({products, increase, decrease, remove}) => {

    const productComponents = products.map(product => {
        return (
            <div key={product.id} className="product-el">
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <div className="controls">
                <button onClick={() => decrease(product.id)}>-</button>
                <button onClick={() => increase(product.id)}>+</button>
                <button onClick={() => remove(product.id)}>Remove</button>
                </div>
            </div>
    )
    })

    let total = 0;

    products.forEach(product => {
    console.log(product.price)
    total += product.price * product.quantity; 
});

    return (
        <>
        <h1 className="shopping-cart">Shopping Cart</h1>
        {productComponents}
        <h1>Total: {total}</h1>
        </>
    )
}