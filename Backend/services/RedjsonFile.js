import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'products.json');

export async function readProducts() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products:', error);
    throw error;
  }
}

export async function writeProducts(products) {
  try {
    await fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing products:', error);
    throw error;
  }
}