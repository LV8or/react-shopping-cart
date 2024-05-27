
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cart-slice';


export default function CartTile({cartItem}) {

    const dispatch = useDispatch();

    function handleRemovefromCart() {
        dispatch(removeFromCart(cartItem.id))
    }

    return (
        <div className="cart-tile">
			<div className="cart-tile-info">
				<div className="cart-tile-img">
					<img src={cartItem?.image} alt={cartItem?.title} />
				</div>
				<div className="cart-tile-text">
					<h1>{cartItem?.title}</h1>
					<p>{cartItem?.description}</p>
					<div>${cartItem?.price.toFixed(2)}</div>
				</div>
			</div>
			<div className="cart-tile-btn">
				<button
					onClick={handleRemovefromCart}
					className="shopping-btn"
				>
					Remove from Cart
				</button>
			</div>
        </div>
    )
}