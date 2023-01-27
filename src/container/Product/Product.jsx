import React, {Component, Fragment} from 'react';
import './Product.css';
import imgcart from '../../assets/icons8-shopping-cart-30.png';
// import set from '../../assets/set.jpg';
import CardProduct from '../CardProduct/CardProduct';


class Product extends Component {
    state = {
        order:4,
        name:'Ardiyanto'
    }

    handleCounterChangeProduct = (newValue) => {
        this.setState({
            order:newValue
        }) 
    }

  render() {
    return (
        // <div>Produk</div>
        <Fragment>
            <div className='card'>
                <div className='header'>
                    <div className='logo'>
                        <h1 className="text-xl" >Daging Ayam</h1>
                        {/* <img src={set} alt="" /> */}
                    </div>
                    <div className="trolley">
                        <img src={imgcart} alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChangeProduct={(value) => this.handleCounterChangeProduct(value)}></CardProduct>
            </div>
        </Fragment>
    )
  }
}

export default Product