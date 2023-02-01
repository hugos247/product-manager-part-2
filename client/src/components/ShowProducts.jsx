import axios from "axios"
import { useEffect,useState } from "react"
import { ProductForm } from "./ProductForm"


export const ShowProducts = ( ) => {

  const [list, setList] = useState([]);
  

  useEffect( () => {
    axios.get('http://localhost:8000/api/getproducts')
    .then( (res) => {
      console.log(res);
      setList(res.data);
    })
    .catch( (err) => {
      console.log(err);
    })
  },[])

  return (
    <div>
        <ProductForm />
        <hr />
        {
            list.map( ( product, index) => {
                return <a key={index} href={`/${product._id}`}> { product.title } </a>
            })
        }
    </div>
  )
}
