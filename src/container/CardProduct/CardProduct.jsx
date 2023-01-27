import React, {Component} from 'react';
import '../Product/Product.css';
import DagingAyam from '../../assets/Ayam_Utuh.jpeg';


class CardProduct extends Component {
    state = {
        order:4,
        name:'Ardiyanto'
    }

    handleCounterChangeProduct = (newValue) => {
        this.props.onCounterChangeProduct(newValue);
    }

    handlePlus = () => {
        // alert("button berhasil ditambah");
        this.setState({
            order : this.state.order + 1
        }, () =>{
            this.handleCounterChangeProduct(this.state.order);
        })

    }
    
    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order : this.state.order - 1
            }, () => {
                this.handleCounterChangeProduct(this.state.order);
            })
        } else {
            alert("Jumlah sudah kosong");

        }

    }
  render() {
    return (
            <div className='card-product'>
                <div className='img-thumb-prod'>
                    <img src={DagingAyam} alt="" />
                </div>
                <p className='product-title'>Daging Ayam Berbumbu Rasa Orgininal Plus Tepung</p>
                <p className='product-price'>Rp. 410.000,-</p>
                <div className='counter'>
                    <button className='minus  bg-sky-500 hover:bg-sky-700' onClick={this.handleMinus}>-</button>
                    <input type="text" className='countbarang border' value={this.state.order} />
                    <button className='plus bg-sky-500 hover:bg-sky-700' onClick={this.handlePlus}>+</button>
                </div>
            </div>
    )
  }
}

export default CardProduct