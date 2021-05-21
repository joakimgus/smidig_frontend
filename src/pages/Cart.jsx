import React from "react";
import './Cart.css';

const Cart = () => {
    const imgPaaaath = require('../images/vikingsskiphuset.png').default;
    return(
        <div className={'cart-page-container'}>
            <div className={'cart-top-text-container'}>
                <h1>Handlekurv</h1>
                <hr />
                <p>Her vil du finne en oversikt over hvilke varer du har i handlekurven din.</p>
            </div>
            <div className={'cart-table-specifications'}>
                <h5 className={'product-title-section'}>Produkt</h5>
                <h5 className={'amount-title-section'}>Antall</h5>
                <h5 className={'price-title-section'}>Pris</h5>
                <h5 className={'remove-title-section'}>Slett</h5>
                <hr />
            </div>
            <div className={'cart-item-container'}>
                <div className={'cart-img-text-container'}>
                    <img src={imgPaaaath} alt={'item image'} />
                    <div className={'cart-item-text-container'}>
                        <h3>Produktnavn</h3>
                        <p className={'cart-product-description'}>Produktbeskrivelse</p>
                        <p>Artikkelnr. 098765</p>
                    </div>
                </div>
                <div className={'item-amount-container'}>
                    {/*TODO fix counter*/}
                    <p><span>-</span> 1 <span>+</span></p>
                </div>
                <div className={'item-price-container'}>
                    <p>NOK 0.00</p>
                </div>
                <div className={'item-remove-container'}>
                    <button>x</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
