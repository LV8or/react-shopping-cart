import { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import ProductTile from '../components/product-tile/product';

export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            if(data) {
                setLoading(false);
                setProducts(data);
            }
        }catch(error) {
            console.log(error);
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {loading ? (
                <div className="full-screen-center">
                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#444444"
                        secondaryColor="#ffd814"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : 
                <div className="full-grid-container sm:grid-cols-3 lg:grid-cols-4">
                    {products && products.length
                        ? products.map(productItem => (
                            <ProductTile key={productItem.id} product={productItem} />
                        ))
                        : null
                    }
                </div>
            }
        </div>
    )
}