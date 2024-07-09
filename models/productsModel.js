import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    isTaxed: {
        type: Boolean,
        required: true,
        default: false,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "business",
        required: true,
    },
});

const Products = mongoose.model("products", productSchema);

export default Products;
