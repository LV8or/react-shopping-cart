import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/slices/cart-slice';

export default function ProductTile({product}) {

    const dispatch = useDispatch();
    const {cart} = useSelector(state => state);

    function handleAddToCart() {
        dispatch(addToCart(product));
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCart(product.id));
    }

    return (
        <div className="product">
            <div className="product-container">
                <div className="product-image">

                    <img
                        src={product?.image}
                        alt={product?.title}
                    />

                    <div>
                        <h1 className="product-title">{product?.title}</h1>
                    </div>

                    <div className="product-button-container">
                        <button
                            onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart}
                            className="shopping-btn"
                        >
                            {
                                cart.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
                            }
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}