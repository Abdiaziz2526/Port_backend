import Products from '../models/productsModel.js';

// Get all product
export const getProducts = async (req, res) => {
    try {
        const products = await Products.find().populate('business');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all product
export const getMyProducts = async (req, res) => {
    try {
        const products = await Products.find({ business: req.params.id }).populate('business');

        if (products) {
            return res.status(200).json(products);
        }
        else {
            return res.status(404).json({ message: "No Products found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id).populate('business');
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
        const { name, qty, price, totalPrice, business } = req.body;
        const product = new Products({ name, qty, price, totalPrice, business });

        await product.save();
        res.status(201).json(product);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing product
export const updateProduct = async (req, res) => {
    try {
        const { name, qty, price, totalPrice } = req.body;
        const updatedProduct = await Products.findById(req.params.id);

        if (updatedProduct) {
            updatedProduct.name = name;
            updatedProduct.qty = qty;
            updatedProduct.price = price;
            updatedProduct.totalPrice = totalPrice;

            await updatedProduct.save()
            res.status(200).json(updatedProduct);
           
        }else{
            return res.status(404).json({ message: 'Product not found' });
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update product To Taxed
export const updateToTaxedProduct = async (req, res) => {
    try {
        const { isTaxed } = req.body;
        const updatedProduct = await Products.findById(req.params.id);

        if (updatedProduct) {
            updatedProduct.isTaxed = isTaxed;
            await updatedProduct.save()
            res.status(200).json(updatedProduct);
           
        }else{
            return res.status(404).json({ message: 'Product not found' });
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update product To Paid
export const updateToPaidProduct = async (req, res) => {
    try {
        const { isPaid } = req.body;
        const updatedProduct = await Products.findById(req.params.id);

        if (updatedProduct) {
            updatedProduct.isPaid = isPaid;
            await updatedProduct.save()
            res.status(200).json(updatedProduct);
           
        }else{
            return res.status(404).json({ message: 'Product not found' });
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Products.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
