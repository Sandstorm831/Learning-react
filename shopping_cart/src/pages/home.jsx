import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner";
import ProdctTile from "../components/product-tile";

export default function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchListofProducts() {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data  =  await res.json();

        if(data){
            setLoading(false);
            setProducts(data);
        }
    }


    useEffect(()=>{
        fetchListofProducts();
    }, [])


    return <div>
        {
            loading ? 
            <div className="min-h-screen w-full flex justify-center items-center">
                <Circles height={'120'} width={'120'} color="rgb(127,29,29)" visible={true} />
            </div> :
            <div className="min-h-[80vh] grid sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
                {
                    products && products.length ? 
                    products.map(productItem => <ProdctTile product={productItem} />) : null
                }
            </div>
        }
    </div>
}