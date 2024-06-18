import axios from "axios";

const baseUrl = "http://localhost:3005/products";

const getAllProducts = async () => 
  {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error while fetching all products:", error);
    throw error;
  }
};


const getProductById = (productId) => axios.get(`${baseUrl}/${productId}`);

const addProduct =  (product) => axios.post(baseUrl, product); 

const updateProduct =  (productId, updatedProduct) => axios.put(`${baseUrl}/${productId}`, updatedProduct);

const deleteProduct =  (productId) =>  axios.delete(`${baseUrl}/${productId}`);


export { getAllProducts, addProduct, deleteProduct, updateProduct, getProductById };
