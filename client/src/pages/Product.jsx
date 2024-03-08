import React,{useState} from "react";
import axios from "axios";

function Product(){
    const [productName , setProductName] = useState("");
    const [productCategory , setProductCategorr] = useState("");
    const [productQuantity , setProductQuantity] = useState("");
    const [price , setPrice] = useState('');
    const [brand , setBrand] = useState('');
    const [productDiscription , setProductDiscription] = useState('');
    const [rating , setRating] = useState('');
    const [sellCount , setSellCount] = useState('');
    const [image,setImage] = useState('');
    const handleSubmit = async (event) => {
        console.log(image)
        event.preventDefault();
        const formData = new FormData();
        formData.append('product_name', productName);
        formData.append('product_catagory', productCategory);
        formData.append('product_quantity', productQuantity);
        formData.append('image', image);
        formData.append('price', price);
        formData.append('brand', brand);
        formData.append('product_description', productDiscription);
        formData.append('rating', rating);
        formData.append('sell_count', sellCount);
        console.log(image);
        try {
            const response = await axios.post('http://localhost:8000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Handle response as needed
            console.log(response.data);

            // Fetch updated data after successful post
            const updatedResponse = await axios.get('http://localhost:8000/api/products');
            setData(updatedResponse.data);
            console.log("Successfully added");
        } catch (error) {
            // Handle error
            // console.error(error);
        }


        event.target.reset();

    }
    return(
        <div align="center">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="productName" placeholder="Product Name" onChange={event=>setProductName(event.target.value)} required/><br/>
                <input type="text" name="productCategory" placeholder="Product Category" onChange={event=>setProductCategorr(event.target.value)} required/><br/>
                <input type="text" name="productQuantity" placeholder="Product Quantity" onChange={event=>setProductQuantity(event.target.value)} required/><br/>
                <input type="number" name="price" placeholder="Price" onChange={event=>setPrice(event.target.value)} required/><br/>
                <input type="text" name="brand" placeholder="Brand" onChange={event=>setBrand(event.target.value)} required/><br/>
                <input type="text" name="productDiscription" placeholder="Product Discription" onChange={event=>setProductDiscription(event.target.value)} required/><br/>
                <input type="number" name="rating" placeholder="Rating" onChange={event=>setRating(event.target.value)} required/><br/>
                <input type="number" name="sellCount" placeholder="Sell Count" onChange={event=>setSellCount(event.target.value)} required/><br/>
                <input type="file" name="image" placeholder="Image" onChange={event=>setImage(event.target.files[0])} required/><br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Product;