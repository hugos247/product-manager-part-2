import { useState } from "react";
import axios from 'axios';

export const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    const submitHandler = ( event ) => {
        //Sending the product to the database
        event.preventDefault();
        axios.post('http://localhost:8000/api/createproduct',
        {
            title,
            price,
            description
        })
        .then( (res) => console.log(res) )
        .catch( (err) => console.log(err) );
    }

  return (
    <>
        <h1>Administrador de productos</h1>

        <form className= "col-6 mx-auto"onSubmit={ submitHandler }>
            <label className="form-label">Title</label>
            <input type="text" className="form-control" onChange={ event => setTitle(event.target.value) }/>

            <label className="form-label">Price</label>
            <input type="text" className="form-control" onChange={ event => setPrice(event.target.value) }/>

            <label className="form-label">Description</label>
            <input type="text" className="form-control" onChange={ event => setDescription(event.target.value) }/>

            <button className="btn btn-success mt-3">Create Product</button>



        </form>
    </>
  )
}
