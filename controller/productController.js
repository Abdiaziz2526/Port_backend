import Products from '../models/productsModel.js';

// Get all product
export const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Register a new product
export const registerNewProduct = async (req, res) => {
    try {
        // const { name, qty, price, totalPrice, user } = req.body;
            const { business } = req.body;
        // const product = new Products({ name, qty, price, totalPrice, user });

        // await product.save();
        // res.status(201).json(product);

        

        const products = [];
        for (let i = 1; i <= 20; i++) {
            const qty = i * 2; // Example quantity
            const price = i * 50; // Example price
            const totalPrice = qty * price;
            
            const product = {
                name: `Product ${i}`,
                qty: qty, // Example quantity
                price: price, // Example price
                totalPrice: totalPrice, // Example total price
                isTaxed: false, // Alternate between taxed and not taxed
                isPaid: false, // Alternate between paid and not paid
                business: business,
            };
            products.push(product);
        }

        await Products.insertMany(products);
        console.log('20 products created');

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing product
export const updateProduct = async (req, res) => {
    try {
        const { name, qty, price, totalPrice } = req.body;
        const updatedProduct = await Products.findByIdAndUpdate(
            req.params.id,
            { name, qty, price, totalPrice },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const deletedTaxProduct = await Products.findByIdAndDelete(req.params.id);
        if (!deletedTaxRate) {
            return res.status(404).json({ message: 'Product rate not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
