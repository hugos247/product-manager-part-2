import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const OneProduct = () => {

    const [product, setProduct] = useState({});

    const { id } = useParams();


    useEffect( () => {
      axios.get(`http://localhost:8000/api/oneproduct/${id}`)
        .then( (res) => {
          setProduct( res.data );
        })
        .catch ( (error) => {
          console.log('Algo salio mal', error);
        })
    },[])

  return (
    <div>
      <h1>{ product.title }</h1>
      <p> Price: { product.price }</p>
      <p> Description: { product.description } </p>
    </div>
  )
}
