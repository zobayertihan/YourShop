//to get list of products
export async function getAllProducts() {
    const apiResponse = await fetch('https://fakestoreapi.com/products')
    const result = await apiResponse.json()

    return result;
}


// to get a single product
export async function getProductDetails(id) {
    const apiResponse = await fetch(`https://fakestoreapi.com/products/${id}`)
    const result = await apiResponse.json()

    return result;
}

