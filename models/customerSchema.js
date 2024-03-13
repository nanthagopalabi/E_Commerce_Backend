const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Customer"
    },
    cartDetails: [{
        productName: {
            type: String
        },
        price: {
            mrp: {
                type: Number
            },
            cost: {
                type: Number
            },
            discountPercent: {
                type: Number
            }
        },
        subcategory: {
            type: String
        },
        productImage: {
            type: String
        },
        category: {
            type: String
        },
        description: {
            type: String
        },
        tagline: {
            type: String
        },
        quantity: {
            type: Number
        },
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'seller'
        },
    }],
    shippingData: {
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
        pinCode: {
            type: Number,
        },
        phoneNo: {
            type: Number,
        },
    }
});

 const Customer= mongoose.model("Customer", CustomerSchema);

 module.exports = Customer;