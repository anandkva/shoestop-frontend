import React, { useContext } from 'react'
import './fav.css'
import { Button } from 'react-bootstrap'
import { productContext } from '../contextAPI/Context'
import axios from 'axios'

const Fav = () => {

  const url = "http://localhost:5000/api/addfav"

  const { favProList,setFavProductList, token } = useContext(productContext)

  const getFav = async () => {
    try {
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        
        const response = await axios.get('http://localhost:5000/api/addfav', { headers });
        setFavProductList(response.data);
      }
    } catch (error) {
      console.log('No auth found');
    }
  };

  const removeFavItems = async (id) => {
    await axios.delete(`${url}/${id}`)
      .then(res => getFav())
  }

  return (
    <div >
      {favProList.length > 0 ?
        <div className='fav'>
          <h4>{favProList.length} fav items here </h4>
          {
            favProList.map(li => {
              return <div className='items' key={li._id}>
                <img src={li.image} className='img' alt="" />


                <p className="title">{li.title}</p>
                <p className="company">{li.company}</p>
                <p className="price text-dark">Rs:{li.price}</p>

                <div className="Fbtns">
                  <Button variant='danger'onClick={ ()=>{ removeFavItems() }} > Remove From Favoutie </Button>
                </div>
              </div>

            })}

        </div> :
        <div className='no-items'>
          <p>no fav items here</p>
        </div>}
    </div>


  )
}

export default Fav