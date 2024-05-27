import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTile from '../components/cart-tile/cart-tile';

export default function Cart() {

	const [totalCart, setTotalCart] = useState(0);
	const {cart} = useSelector((state) => state);

	useEffect(() => {
		const total = cart.reduce((acc, curr) => acc + curr.price, 0);
		const totalString = "$"+total.toFixed(2);
		setTotalCart(totalString);
	}, [cart]);

	return (
		<div className="cart">
			<div className="container">

			{cart && cart.length ? (
				<div className="cart-container">

					<div className="cart-products-container ">
						{
							cart.map(cartItem => <CartTile key={cartItem.id} cartItem={cartItem}/>)
						}
					</div>

					<div className="cart-summary">
						<div className="cart-summary-container">
							<h1 className="cart-title">Your Cart Summary</h1>
							<p>
								<span className="cart-summary-label">Total Items</span>
								<span>: {cart.length}</span>
							</p>
							<p>
								<span className="cart-summary-label">Total Amount</span>
								<span>: {totalCart}</span>
							</p>
						</div>
					</div>
					
				</div>
				) : (
				<div className="cart-no-products">
					<h1 className="cart-no-products-title">Your cart is empty</h1>
					<Link to={'/'}>
						<button className="shopping-btn">Shop Now</button>
					</Link>
				</div>
				)

			}

			</div>
		</div>
	)
}