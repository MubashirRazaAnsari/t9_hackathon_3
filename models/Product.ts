import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  _id: String,
  _type: String,
  _rev: String,
  title: String,
  description: String,
  price: Number,
  image: {
    _type: String,
    asset: {
      _ref: String,
      _type: String
    }
  }
}, {
  timestamps: true,
  strict: false
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product
