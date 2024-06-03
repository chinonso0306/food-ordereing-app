import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last  name' />
        </div>

        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='zip code' />
          <input type="text" placeholder='country' />
        </div>

        <input type="text" placeholder='phone' />

      </div>

      <div className="place-order-right">

        <div className="cart-total">

          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₦{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p> Delivery Fee</p>
              <p>₦{getTotalCartAmount() === 0 ? 0 : 700}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₦{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 700}</p>
            </div>
          </div>
          <button>PROCEES TO Payment</button>
        </div>


      </div>

    </form>
  )
}

export default PlaceOrder
