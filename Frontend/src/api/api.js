export const API_BASE_URL = 'http://localhost:3000/api';


export async function getAllProductData(){
  const response = await fetch(`${API_BASE_URL}/products`,{
        method:'GET',
        headers:{
             'Content-Type': 'application/json',
        },
        
    });
    const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
    

}

export async function getProductById(id){
  const response = await fetch(`${API_BASE_URL}/products/${id}`,{
        method:'GET',
        headers:{
             'Content-Type': 'application/json',
        },
        
    });
    const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
    

}
export async function addProduct(product){
  const response = await fetch(`${API_BASE_URL}/products`,{
        method:'POST',
        headers:{
             'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    });
    const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
    

}

export async function updateProduct(id, product){
  const response = await fetch(`${API_BASE_URL}/products/${id}`,{
        method:'PUT',
        headers:{
             'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    });
    const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
    

}

export async function deleteProduct(id){
  const response = await fetch(`${API_BASE_URL}/products/${id}`,{
        method:'DELETE',
        headers:{
             'Content-Type': 'application/json',
        },
        
    });
    const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
    

}
