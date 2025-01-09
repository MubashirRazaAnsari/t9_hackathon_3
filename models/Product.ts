import mongoose, { Schema, model, models } from 'mongoose';

const productSchema = new Schema(
  {
    productname: { type: String, required: true },
    product_descr: { type: String },
    product_price: { type: Number, required: true },
    product_category: { type: String },
    product_quantity: { type: Number, default: 0 },
    product_image: { type: String },
    product_rating: { type: Number, default: 0 },
    product_sale: { type: Boolean, default: false },
    delivery: { type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' },
    product_discount: { type: Number, default: 0 },
    product_menuDescr: { type: String },
    product_review: [
      {
        user_name: { type: String },
        user_email: { type: String },
        user_reviewDescr: { type: String },
        user_rating: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Product = models.Product || model('Product', productSchema);

export default Product;
