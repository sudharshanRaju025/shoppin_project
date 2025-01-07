function Cart(){

    const cart=JSON.parse(localStorage.getItem("cart"));
    console.log(cart);

    return(
        <div>
            <h1 className="text-xl">cart</h1>
        </div>
    )
}
export default Cart;