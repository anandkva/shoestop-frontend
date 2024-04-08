import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import { Button, Container } from 'react-bootstrap'
import { productContext } from '../contextAPI/Context'
import axios from 'axios'

const Cart = () => {

  const url = "http://localhost:5000/api/addcart"

  const { cartProduct, setCartProducts, getcart} = useContext(productContext)
  const [total, setTotal] = useState(0)

  

  useEffect(()=>{
    getcart()
  },[])

  useEffect(() => {
    
    // Calculate the total cart value whenever cartProduct changes
    const cartTotal = cartProduct.reduce((acc, item) => {
      return acc + item.quantity * parseInt(item.price)
    }, 0);
    setTotal(cartTotal);
  }, [cartProduct]);

  const removeFavItems = async (id) => {
    await axios.delete(`${url}/${id}`)
    getcart()
  }

  const addQty = (id) => {
    const updatedCartItems = cartProduct.map((item) =>
      item._id === id ? { ...item, quantity: parseInt(item.quantity) + 1 } : item
    );
    setCartProducts(updatedCartItems);
  }

  const reduceQty = (id) => {
    const updatedCartItems = cartProduct.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartProducts(updatedCartItems);
  }

  return (
    <Container>
      <div>
        {cartProduct.length > 0 ?
          <div className='cart'>
            <h4 className='text-center py-3'>{cartProduct.length} items in your Cart </h4>
            {
              cartProduct.map(li => {
                return <div key={li._id}>
                  <div className='item'>
                    <img src={li.image} className='img' alt="" />
                    <div className='mx-3'>
                      <p className="cp-title">{li.title}</p>
                      <p className="cp-company">{li.company}</p>
                    </div>

                    <div className="quantity-counter my-2">
                      <Button className='mx-3' onClick={() => reduceQty(li._id)}>-</Button>
                      <p>{parseInt(li.quantity)}</p>
                      <Button className='mx-3' onClick={() => addQty(li._id)}>+</Button>
                    </div>

                    <p className="cp-price text-dark mx-5 my-3">Rs: {li.quantity * parseInt(li.price)}</p>
                    <div className="Fbtns">
                      <Button variant='danger' onClick={() => { removeFavItems(li._id) }}>Remove</Button>
                    </div>
                  </div>
                </div>
              })}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>Total</p>
              <p>{total}</p>
            </div>
          </div> :
          <div className='no-items'>
            <p>No Items are added to the cart</p>
          </div>}
      </div>
    </Container>
  )
}

export default Cart;
