import { useEffect, useState } from "react";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const HandleProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.produts && data.products.length) {
        setProducts(data.products);
        console.log(products);
      }
      setLoading(false);
      console.log(data.products);
      console.log(products);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    HandleProducts();
  }, []);

  if (loading) {
    return <div>Loading Please Wait...</div>;
  }
  if (errorMessage) {
    return <div>Error Occured {errorMessage}</div>;
  }

  return (
    <>
      <div>
        <div className="products">
          {
          products && products.length
            ? products.map((prod) => {
                return (
                  <div className="bg-slate-400 min-h-screen w-screen"  key={prod.id}>
                   <img src={prod.thumnail} alt={prod.title} />
                    <h1>{prod.title}</h1>
                    {/* <h1>{prod.price}</h1> */}
                  </div>
                );
              })
            : null}
        </div>
        {/* <button>Load More</button> */}
      </div>
    </>
  );
}
