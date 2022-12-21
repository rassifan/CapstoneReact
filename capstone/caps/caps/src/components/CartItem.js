import {React,useContext} from "react"
import {Context} from "../context/PhotoContext"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    return (
        <div className="cart-item">
            <i onClick = {() => removeFromCart(item.id)} className="ri-delete-bin-line"></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem