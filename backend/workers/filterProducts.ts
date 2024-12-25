import { parentPort } from "worker_threads";
import product from "../models/productModel";

if (!parentPort) {
  throw new Error("Parent port not found.");
}

// Worker logic for filtering products
parentPort?.on("message", async (filterCriteria) => {
  try {
    const searchProduct = await product.find(filterCriteria);
    console.log(searchProduct);

    parentPort?.postMessage({ success: true, products: searchProduct });
  } catch (error: any) {
    parentPort?.postMessage({ success: false, error: error.message });
  }
});
