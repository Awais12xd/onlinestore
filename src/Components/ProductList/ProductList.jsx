import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './productlist.css'
import React from 'react'
import {useSelector} from 'react-redux'


function ProductList (){
    const products = useSelector ((state) => state.product.products)
    return (
        <>
        <Container>
            <div className="cont-list">
               {products.map((product) => (
                <Link to={`/detail/${product.id}`} key={product.id} className="card"
                style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className="img">
                    <img src={`./src/assets/${product.image}`} alt="hat image"/>
                    </div>
                    <h3>{product.name}</h3>
                    <div className="price">
                        <div className="left">
                            <p>{product.originalPrice}$ </p>
                            <span>{product.discountPercentage}% OFF</span>
                        </div>
                        <div className="right"><p>{product.discountPrice}$</p></div>
                    </div>
                    <div className="detail-list">
                        <h4>Details</h4>
                        <p className='p'>{product.description}</p>
                    </div>
                    <button>
                        Add to Cart
                    </button>
                    
                </Link>
               ))}
            </div>
        </Container>
        </>
    )
}



export default ProductList;