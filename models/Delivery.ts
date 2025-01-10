import mongoose from 'mongoose'

const deliverySchema = new mongoose.Schema({
  _id: String,
  _type: String,
  title: String,
  description: String,
}, {
  timestamps: true
})

const Delivery = mongoose.models.Delivery || mongoose.model('Delivery', deliverySchema)
export default Delivery
