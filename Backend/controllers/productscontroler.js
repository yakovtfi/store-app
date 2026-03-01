import { readProducts } from "../services/RedjsonFile";
import { writeProducts } from "../services/RedjsonFile";

export async function getProducts(req, res) {
  try {
    const products = await readProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read products' });
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const products = await readProducts();
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to read products' });
  }
}

export async function addProduct(req, res) {
  try {
    const newProduct = req.body;
    const products = await readProducts();
    products.push(newProduct);
    await writeProducts(products);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
}

export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const updatedProduct = req.body;
    const products = await readProducts();
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      await writeProducts(products);
      res.json(products[index]);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const products = await readProducts();
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      const deletedProduct = products.splice(index, 1)[0];
      await writeProducts(products);
      res.json(deletedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
}
