import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  _id: String,
  _type: String,
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String,
}, {
  timestamps: true
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product
