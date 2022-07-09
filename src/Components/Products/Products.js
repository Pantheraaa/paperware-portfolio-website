import React from 'react'
import './Products.css'

const Products = () => {
    return (
        <div className="products" id="products">
            <h1>Our Products
                <hr />
            </h1>
            <div className='cards'>
                <div className="card">
                    <div className="product-image">
                        <img style={{ height: '60%', width: '60%' }} src={require('../../Assets/PaperLidNew.png')} alt="Bowl" />
                    </div>
                    <div className="product-details">
                        <h2>Paperware Eco-friendly</h2>
                        <h4>Paper bowl with lid</h4>
                        <h3>Product Details</h3>
                        <div className="product-specs">
                            <p><b>•</b> Leak resistant bowls with paper lid</p>
                            <p><b>•</b> Food grade high quality paper</p>
                            <p><b>•</b> Interior moisture and Grease barrier</p>
                            <p><b>•</b> Round design allows custom printing</p>
                            <p><b>•</b> Recyclabe and bio-degradable</p>
                        </div>
                        <h3>Size</h3>
                        <div className="product-details-size">
                            <div className="size">40<br />ml</div>
                            <div className="size">100<br />ml</div>
                            <div className="size">250<br />ml</div>
                            <div className="size">350<br />ml</div>
                            <div className="size">500<br />ml</div>
                            <div className="size">750<br />ml</div>
                            <div className="size">1000<br />ml</div>
                            <div className="size">1250<br />ml</div>
                        </div>
                        <button className="product-more">
                            <a href="#contact-us">Know More</a>
                        </button>
                    </div>
                </div>
                <div className="card" id="paperBox">
                    <div className="product-image">
                        <img style={{ height: '100%', width: '100%' }} src={require('../../Assets/PaperBoxNew2.png')} alt="Bowl" />
                    </div>
                    <div className="product-details">
                        <h2>Paperware Eco-friendly</h2>
                        <h4>Food Box</h4>
                        <h3>Product Details</h3>
                        <div className="product-specs">
                            <p><b>•</b> Leak resistant</p>
                            <p><b>•</b> Suitable for hot, cold, solid and liquid items</p>
                            <p><b>•</b> Poly-coated paper material 100% ITC</p>
                            <p><b>•</b> Food grade paper upto 350 GSM</p>
                            <p><b>•</b> Interior moisture and Grease barrier</p>
                            <p><b>•</b> Recyclabe and bio-degradable</p>
                        </div>
                        <h3>Size</h3>
                        <div className="product-details-size">
                            <div className="size">500<br />ml</div>
                            <div className="size">750<br />ml</div>
                            <div className="size">1000<br />ml</div>
                            <div className="size">1250<br />ml</div>
                        </div>
                        <button className="product-more">
                            <a href="#contact-us">Know More</a>
                        </button>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img style={{ height: '75%', width: '84%' }} src={require('../../Assets/PaperLidNew.png')} alt="Bowl" />
                        </div>
                        <div className="product-details">
                            <h2>Paperware Eco-friendly</h2>
                            <h4>Paper bowl with lid</h4>
                            <h3>Product Details</h3>
                            <div className="product-specs">
                                <p><b>•</b> Leak resistant bowls with paper lid</p>
                                <p><b>•</b> Food grade high quality paper</p>
                                <p><b>•</b> Interior moisture and Grease barrier</p>
                                <p><b>•</b> Round design allows custom printing</p>
                                <p><b>•</b> Recyclabe and bio-degradable</p>
                            </div>
                            <h3>Size</h3>
                            <div className="product-details-size">
                                <div className="size">40<br />ml</div>
                                <div className="size">100<br />ml</div>
                                <div className="size">250<br />ml</div>
                                <div className="size">500<br />ml</div>
                                <div className="size">750<br />ml</div>
                                <div className="size">1000<br />ml</div>
                                <div className="size">1250<br />ml</div>
                            </div>
                            <button className="product-more">
                                <a href="#contact-us">Know More</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" id="flip-card-2nd">
                            <img style={{ height: '77%', width: '77%', transform: 'scale(1.3)' }} src={require('../../Assets/PaperBoxNew2.png')} alt="Bowl" />
                        </div>
                        <div className="product-details">
                            <h2>Paperware Eco-friendly</h2>
                            <h4>Food Box</h4>
                            <h3>Product Details</h3>
                            <div className="product-specs">
                                <p><b>•</b> Leak resistant</p>
                                <p><b>•</b> Suitable for hot, cold, solid and liquid items</p>
                                <p><b>•</b> Poly-coated paper material 100% ITC</p>
                                <p><b>•</b> Food grade paper upto 350 GSM</p>
                                <p><b>•</b> Interior moisture and Grease barrier</p>
                                <p><b>•</b> Recyclabe and bio-degradable</p>
                            </div>
                            <h3>Size</h3>
                            <div className="product-details-size">
                                <div className="size">500<br />ml</div>
                                <div className="size">750<br />ml</div>
                                <div className="size">1000<br />ml</div>
                                <div className="size">1250<br />ml</div>
                            </div>
                            <button className="product-more">
                                <a href="#contact-us">Know More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;