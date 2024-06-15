import axios from "axios";
import { useEffect, useState } from "react";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled , setDisabled ]= useState(false);

  const HandleProducts = async () => {
    try {
      setLoading(true);
      let response = await axios.get(`https://dummyjson.com/products?limit=30&skip=${count === 0 ? 0 : count * 20}`)
      console.log(response.data.products);
      
      if (response.data && response.data.products ) {
        setProducts((pre)=> [...pre , ...response.data.products]);
        console.log(products);
        setLoading(false);
    }
      console.log(response.data.products);
      console.log(products);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    HandleProducts();
  }, [count]);

  useEffect(() => {
   if(products && products.length === 150) setDisabled(true)
  }, [products]);

  if (loading) {
    return <div>Loading Please Wait...</div>;
  }
  if (errorMessage) {
    return <div>Error Occured {errorMessage}</div>;
  }

  return (
    <>
      <div  className="flex justify-center gap-4 flex-col">
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-3">
          {products && products.length
            ? products.map((prod) => {
                return (
                  <>
                    
                      <div className="flex flex-col border-2" key={prod.id}>
                        <img src={prod.thumbnail} alt={prod.title} />
                        <h1>{prod.title}</h1>
                     
                    </div>
                  </>
                );
              })
            : null}
        </div>
        <div>

        <button disabled={disabled} className="my-8 p-3 bg-blue-500 rounded-xl" onClick={()=> setCount(count + 1)}>Load More</button>
        {
            disabled ? <p>You reached 150 products</p> :null
        }
        </div>
      </div>
    </>
  );
}
